"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite.config";
import { ID, Permission, Query, Role } from "node-appwrite";
import { parseStringify } from "../utils";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
// import { connection } from "next/server";
import { InputFile } from "node-appwrite/file";

const {
  DATABASE_ID,
  USERS_COLLECTION_ID,
  PUBLIC_USERS_COLLECTION_ID,
  NEXT_PUBLIC_APPWRITE_BUCKET: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  NEXT_PUBLIC_PROJECT_ID: PROJECT_ID,
} = process.env;

export const getUserInfo = async (userId: string) => {
  if (!userId) {
    return null;
  }
  noStore();
  // await connection() TODO: replace noStore with this after update to Next 15
  try {
    const { database } = await createAdminClient();
    const currentUser = await getCurrentUser();

    if (!currentUser) throw new Error("User is not authenticated.");

    const isAdmin = currentUser.labels.includes("admin");
    const isOwnProfile = userId === currentUser.userId || isAdmin;

    const user = isOwnProfile
      ? await database.listDocuments(DATABASE_ID!, USERS_COLLECTION_ID!, [
          Query.equal("userId", [userId]),
        ])
      : await database.listDocuments(
          DATABASE_ID!,
          PUBLIC_USERS_COLLECTION_ID!,
          [Query.equal("userId", [userId])]
        );
    if (user.total <= 0) throw new Error("User is not found.");
    return parseStringify(user.documents[0]);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set("session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return session.userId;
  } catch (error) {
    console.error("Error", error);
  }
};

export const signUp = async ({ password, ...userData }: SignUpParams) => {
  const { email, firstName, lastName } = userData;

  let newUserAccount;

  try {
    const { account, database } = await createAdminClient();

    newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    if (!newUserAccount) throw new Error("Error creating user");

    const newUser = await database.createDocument(
      DATABASE_ID!,
      USERS_COLLECTION_ID!,
      ID.unique(),
      {
        userId: newUserAccount.$id,
        ...userData,
      },
      [
        Permission.read(Role.user(newUserAccount.$id)),
        Permission.update(Role.user(newUserAccount.$id)),
        Permission.delete(Role.user(newUserAccount.$id)),
      ]
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUser);
  } catch (error) {
    console.error("Error", error);
  }
};

export const getCurrentUser = async () => {
  noStore();
  try {
    const { account, database } = await createSessionClient();
    const result = await account.get();
    const user = await database.listDocuments(
      DATABASE_ID!,
      USERS_COLLECTION_ID!,
      [Query.equal("userId", [result.$id])]
    );

    if (user.total <= 0) return null;
    const currentUser = user.documents[0];

    return parseStringify({
      userId: currentUser.userId,
      email: currentUser.email,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      labels: result.labels || [],
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    const { account } = await createSessionClient();
    cookies().delete("session");
    await account.deleteSession("current");
  } catch (error) {
    console.log(error);
    return null;
  }
  redirect("/login");
};

export const getUsers = async (searchParams?: {
  [key: string]: string | string[] | undefined;
}) => {
  noStore();

  try {
    const { database } = await createAdminClient();

    const queries = [];
    if (searchParams?.status && searchParams.status !== "all")
      queries.push(Query.equal("status", searchParams.status as string));

    if (searchParams?.query)
      queries.push(
        Query.or([
          Query.contains("firstName", searchParams.query as string),
          Query.contains("lastName", searchParams.query as string),
        ])
      );

    const users = await database.listDocuments(
      DATABASE_ID!,
      USERS_COLLECTION_ID!,
      queries
    );
    return parseStringify(users.documents);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateUserInfo = async ({
  userId,
  userData,
}: UpdateUserInfoParams) => {
  try {
    const { database, storage } = await createAdminClient();
    const { image, ...user } = userData;
    let file;
    let imageUrl;
    if (image && typeof image === "object") {
      const inputFile = InputFile.fromBuffer(
        image.get("blobFile") as Blob,
        image.get("fileName") as string
      );
      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
      imageUrl = file?.$id
        ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
        : null;
    }
    const updateUser = await database.updateDocument(
      DATABASE_ID!,
      USERS_COLLECTION_ID!,
      userId,
      {
        image: imageUrl ? imageUrl : image,
        ...user,
      }
    );
    revalidatePath("/dashboard");
    return parseStringify(updateUser);
  } catch (error) {
    console.log(error);
    return null;
  }
};

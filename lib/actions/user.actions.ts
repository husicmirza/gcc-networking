"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite.config";
import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";
import { redirect } from "next/navigation";

const { DATABASE_ID, USER_COLLECTION_ID } = process.env;

export const getUserInfo = async ({ userId }: { userId?: string }) => {
  if (!userId) return null;

  try {
    const { database } = await createAdminClient();

    const user = await database.listDocuments(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      [Query.equal("$id", [userId])]
    );

    if (!user.documents.length) return null;

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
      USER_COLLECTION_ID!,
      ID.unique(),
      {
        userId: newUserAccount.$id,
        ...userData,
      }
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

export const getLoggedInUser = async () => {
  try {
    const { database } = await createAdminClient();
    const { account } = await createSessionClient();
    const result = await account.get();

    const user = await database.listDocuments(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      [Query.equal("userId", [result.$id])]
    );

    return parseStringify(user.documents[0]);
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

export const getUsers = async () => {
  try {
    const { database } = await createAdminClient();
    const users = await database.listDocuments(
      DATABASE_ID!,
      USER_COLLECTION_ID!
    );
    return parseStringify(users.documents);
  } catch (error) {
    console.log(error);
    return null;
  }

};

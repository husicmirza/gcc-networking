"use server";
import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite.config";
import { formatUserData, parseStringify } from "../utils";
import { User } from "@/types/appwrite.types";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

const { DATABASE_ID, PUBLIC_USERS_COLLECTION_ID } = process.env;
export const createPublicUser = async ({ userData }: { userData: User }) => {
  try {
    const { database } = await createAdminClient();
    const newUser = await database.createDocument(
      DATABASE_ID!,
      PUBLIC_USERS_COLLECTION_ID!,
      ID.unique(),
      formatUserData(userData)
    );
    revalidatePath("/dashboard/profile");

    return parseStringify(newUser);
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export const updatePublicUserInfo = async ({
  userId,
  userData,
}: UpdateUserInfoParams) => {
  try {
    const { database } = await createAdminClient();
    const user = await database.updateDocument(
      DATABASE_ID!,
      PUBLIC_USERS_COLLECTION_ID!,
      userId,
      formatUserData(userData)
    );
    revalidatePath("/dashboard/profile");

    return parseStringify(user);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPublicUsers = async (searchParams?: {
  [key: string]: string | string[] | undefined;
}) => {
  noStore();

  try {
    const { database } = await createAdminClient();

    const currentPage = Number(searchParams?.current_page) || 1;
    const pageSize = 8;
    const offset = (currentPage - 1) * pageSize;

    const queries = [Query.limit(pageSize), Query.offset(offset)];
    if (searchParams?.industry && searchParams.industry !== "all")
      queries.push(Query.equal("industry", searchParams.industry as string));
    if (searchParams?.country && searchParams.country !== "all")
      queries.push(Query.equal("country", searchParams.country as string));
    if (searchParams?.originCountry && searchParams.originCountry !== "all")
      queries.push(
        Query.equal("countryOfOrigin", searchParams.originCountry as string)
      );
    if (searchParams?.query)
      queries.push(
        Query.or([
          Query.contains("firstName", searchParams.query as string),
          Query.contains("lastName", searchParams.query as string),
        ])
      );

    const users = await database.listDocuments(
      DATABASE_ID!,
      PUBLIC_USERS_COLLECTION_ID!,
      queries
    );
    console.log(users);
    return {
      documents: parseStringify(users.documents),
      total: users.total,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

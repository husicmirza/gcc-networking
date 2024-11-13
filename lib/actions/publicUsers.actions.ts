"use server";
import { ID } from "node-appwrite";
import { createAdminClient } from "../appwrite.config";
import { formatUserData, parseStringify } from "../utils";
import { User } from "@/types/appwrite.types";

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
    return parseStringify(user);
  } catch (error) {
    console.log(error);
    return null;
  }
};

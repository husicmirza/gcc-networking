"use server";
import { ID } from "node-appwrite";
import { createAdminClient } from "../appwrite.config";
import { parseStringify } from "../utils";
import { User } from "@/types/appwrite.types";

const { DATABASE_ID, PUBLIC_USERS_COLLECTION_ID } = process.env;
export const createPublicUser = async ({ userData }: { userData: User }) => {
  const newUserData = {
    userId: userData.userId,
    email: userData.email,
    firstName: userData.firstName,
    lastName: userData.lastName,
    dateOfBirth: userData.dateOfBirth,
    address1: userData.address1,
    city: userData.city,
    country: userData.country,
    zipCode: userData.zipCode ?? "",
    phone: userData.phone,
    status: userData.status,
    cancellationReason: userData.cancellationReason ?? "",
    company: userData.company ?? "",
    industry: userData.industry ?? "",
    linkedin: userData.linkedin ?? "",
    instagram: userData.instagram ?? "",
    facebook: userData.facebook ?? "",
    cityOfOrigin: userData.cityOfOrigin ?? "",
    countryOfOrigin: userData.countryOfOrigin ?? "",
    image: userData.image ?? "",
  };

  try {
    const { database } = await createAdminClient();
    const newUser = await database.createDocument(
      DATABASE_ID!,
      PUBLIC_USERS_COLLECTION_ID!,
      ID.unique(),
      newUserData
    );
    console.log(newUser);
    return parseStringify(newUser);
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

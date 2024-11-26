import { createAdminClient } from "../appwrite.config";
import { parseStringify } from "../utils";
import { Query } from "node-appwrite";

const { EVENTS_COLLECTION_ID, DATABASE_ID } = process.env;

export const getEvents = async () => {
  try {
    const { database } = await createAdminClient();

    const events = await database.listDocuments(
      DATABASE_ID!,
      EVENTS_COLLECTION_ID!,
      [Query.orderDesc("$createdAt")]
    );
    return parseStringify(events.documents);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getEvent = async (slug: string) => {
  try {
    const { database } = await createAdminClient();

    const events = await database.listDocuments(
      DATABASE_ID!,
      EVENTS_COLLECTION_ID!,
      [Query.equal("slug", [slug])]
    );
    return parseStringify(events.documents[0]);
  } catch (error) {
    console.log(error);
    return null;
  }
};

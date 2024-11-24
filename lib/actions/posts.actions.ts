import { createAdminClient } from "../appwrite.config";
import { parseStringify } from "../utils";
import { Query } from "node-appwrite";

const { POSTS_COLLECTION_ID, DATABASE_ID } = process.env;

export const getPosts = async () => {
  try {
    const { database } = await createAdminClient();

    const posts = await database.listDocuments(
      DATABASE_ID!,
      POSTS_COLLECTION_ID!,
      [Query.orderDesc("$createdAt")]
    );
    return parseStringify(posts.documents);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPost = async (slug: string) => {
  try {
    const { database } = await createAdminClient();

    const posts = await database.listDocuments(
      DATABASE_ID!,
      POSTS_COLLECTION_ID!,
      [Query.equal("slug", [slug])]
    );
    return parseStringify(posts.documents[0]);
  } catch (error) {
    console.log(error);
    return null;
  }
};

import React from "react";
import PostGrid from "./PostGrid";
import { getPostsByCategory } from "@/lib/actions/posts.actions";

const PostsByCategoryWrapper = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const posts = await getPostsByCategory(searchParams);
  return <PostGrid posts={posts} />;
};

export default PostsByCategoryWrapper;

import { getLatestPosts } from "@/lib/actions/posts.actions";
import React from "react";
import LatestPosts from "./LatestPosts";

const LatestPostsWrapper = async () => {
  const latestPosts = await getLatestPosts();
  return <LatestPosts posts={latestPosts} />;
};

export default LatestPostsWrapper;

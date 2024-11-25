import React from "react";
import PostHeader from "./PostHeader";
import { getPost } from "@/lib/actions/posts.actions";
import PostBody from "./PostBody";

const PostWrapper = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  return (
    <article className="mb-32">
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.$createdAt}
        authorName={post.authorName}
        authorImage={post.authorImage}
      />
      <PostBody content={post.content} />
    </article>
  );
};

export default PostWrapper;

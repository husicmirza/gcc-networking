import React from "react";
import PostHeader from "./PostHeader";
import { getPost } from "@/lib/actions/posts.actions";
import ContentBody from "./ContentBody";
import Avatar from "./Avatar";

const PostWrapper = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  return (
    <article className="mb-32">
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.$createdAt}
      />
      <ContentBody content={post.content} />
      <div className="max-w-3xl mx-auto">
        <Avatar name={post.authorName} picture={post.authorImage} />
      </div>
    </article>
  );
};

export default PostWrapper;

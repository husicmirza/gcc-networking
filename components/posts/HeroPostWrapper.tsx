import { getHeroPost } from "@/lib/actions/posts.actions";
import React from "react";
import HeroPost from "./HeroPost";

const HeroPostWrapper = async () => {
  const heroPost = await getHeroPost();

  return (
    <HeroPost
      title={heroPost.title}
      coverImage={heroPost.coverImage}
      date={heroPost.$createdAt}
      authorName={heroPost.authorName}
      authorImage={heroPost.authorImage}
      slug={heroPost.slug}
      excerpt={heroPost.excerpt}
    />
  );
};

export default HeroPostWrapper;

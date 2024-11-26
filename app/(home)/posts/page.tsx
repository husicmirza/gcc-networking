import HeroPostWrapper from "@/components/posts/HeroPostWrapper";
import LatestPostsWrapper from "@/components/posts/LatestPostsWrapper";
import PostsByCategoryWrapper from "@/components/posts/PostsByCategoryWrapper";
import { Suspense } from "react";
import CategoryTabs from "@/components/posts/CategoryTabs";

export default async function Posts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="container mx-auto px-5">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroPostWrapper />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsWrapper />
      </Suspense>
      <CategoryTabs />
      <Suspense fallback={<div>Loading...</div>}>
        <PostsByCategoryWrapper searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

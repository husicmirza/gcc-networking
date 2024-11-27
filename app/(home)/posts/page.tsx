import HeroPostWrapper from "@/components/posts/HeroPostWrapper";
import LatestPostsWrapper from "@/components/posts/LatestPostsWrapper";
import PostsByCategoryWrapper from "@/components/posts/PostsByCategoryWrapper";
import { Suspense } from "react";
import CategoryTabs from "@/components/posts/CategoryTabs";
import HeroPostSkeleton from "@/components/skeletons/HeroPostSkeleton";
import { LatestPostsSkeletonWrapper } from "@/components/skeletons/LatestPostsSkeleton";

export default async function Posts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const serializedSearchParams = JSON.stringify(searchParams);

  return (
    <main className="container mx-auto px-5">
      <Suspense key={serializedSearchParams} fallback={<HeroPostSkeleton />}>
        <HeroPostWrapper />
      </Suspense>
      <Suspense
        key={serializedSearchParams}
        fallback={<LatestPostsSkeletonWrapper />}
      >
        <LatestPostsWrapper />
      </Suspense>
      <CategoryTabs />
      <Suspense fallback={<div>Loading...</div>}>
        <PostsByCategoryWrapper searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

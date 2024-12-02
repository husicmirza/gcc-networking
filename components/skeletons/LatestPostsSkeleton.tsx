import { IconArrowRight } from "@tabler/icons-react";
import { Grid } from "../ui/grid";

export const LatestPostsSkeletonWrapper = () => {
  return (
    <div className="py-10">
      <h2 className="mb-4 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        Latest Blog Posts
      </h2>
      <Grid className="py-10 md:py-20">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <PostPreviewSkeleton key={index} />
          ))}
      </Grid>
    </div>
  );
};

export const PostPreviewSkeleton = () => {
  return (
    <div className="flex flex-col h-full animate-pulse">
      {/* Cover Image Skeleton */}
      <div className="mb-5 w-full h-48 bg-gray-300 rounded-lg" />

      {/* Title Skeleton */}
      <div className="h-6 w-3/4 bg-gray-300 rounded mb-3" />

      {/* Date Skeleton */}
      <div className="h-4 w-1/4 bg-gray-300 rounded mb-4" />

      {/* Excerpt Skeleton */}
      <div className="space-y-2 flex-grow">
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-5/6 bg-gray-300 rounded" />
        <div className="h-4 w-3/4 bg-gray-300 rounded" />
      </div>
      {/* Footer (Avatar + Link) Skeleton */}
      <div className="flex justify-between items-end mt-auto">
        {/* Avatar Skeleton */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div className="h-4 w-24 bg-gray-300 rounded" />
        </div>

        {/* Link Skeleton */}
        <div className="flex items-center space-x-2">
          <div className="h-4 w-12 bg-gray-300 rounded" />
          <IconArrowRight className="text-gray-300" size={20} />
        </div>
      </div>
    </div>
  );
};

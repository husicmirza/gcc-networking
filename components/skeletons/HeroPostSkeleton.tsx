import React from "react";
import { IconArrowRight } from "@tabler/icons-react";

const HeroPostSkeleton = () => {
  return (
    <section>
      <div className="py-10 mx-auto">
        {/* Main Wrapper */}
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center animate-pulse">
          {/* Cover Image Skeleton */}
          <div className="w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 bg-neutral-300" />

          {/* Content Section */}
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 space-y-4">
            {/* Category Skeleton */}
            <div className="h-4 w-20 bg-neutral-300 rounded" />

            {/* Title Skeleton */}
            <div className="h-6 w-3/4 bg-neutral-300 rounded" />

            {/* Excerpt Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-neutral-300 rounded" />
              <div className="h-4 w-5/6 bg-neutral-300 rounded" />
            </div>

            {/* Date and Link Skeleton */}
            <div className="flex justify-between items-center mt-4">
              <div className="h-4 w-20 bg-neutral-300 rounded" />
              <div className="flex items-center space-x-2">
                <div className="h-4 w-12 bg-neutral-300 rounded" />
                <IconArrowRight className="text-neutral-300" size={20} />
              </div>
            </div>

            {/* Author Skeleton */}
            <div className="flex items-center mt-6 space-x-4">
              <div className="w-10 h-10 rounded-full bg-neutral-300" />
              <div className="h-4 w-32 bg-neutral-300 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPostSkeleton;

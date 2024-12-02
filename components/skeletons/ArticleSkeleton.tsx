export const ArticleSkeleton = () => {
  return (
    <article className="mb-32 animate-pulse">
      {/* PostHeader Skeleton */}
      <div className="mb-12">
        {/* Title */}
        <div className="h-6 md:h-8 lg:h-10 bg-gray-300 rounded-md w-3/4 mb-4"></div>
        <div className="h-6 md:h-8 lg:h-10 bg-gray-300 rounded-md mb-12"></div>

        {/* Cover Image */}
        <div className="mb-12 sm:mx-0">
          <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-300 rounded-lg"></div>
        </div>
        {/* Date */}
        <div className="max-w-3xl mx-auto flex mb-6 gap-2">
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="h-4 bg-gray-300 rounded-md w-24"></div>
          </div>
        </div>
      </div>

      {/* ContentBody Skeleton */}
      <div className="max-w-3xl mx-auto">
        {/* Simulates multiple paragraphs */}
        <div className="h-4 bg-gray-300 rounded-md mb-4 w-full"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-4 w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-4 w-4/5"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-4 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-4 w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-4 w-full"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-4 w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-4 w-3/4"></div>
      </div>

      {/* Avatar Skeleton */}
      <div className="max-w-3xl mx-auto flex items-center mt-6">
        <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
      </div>
    </article>
  );
};

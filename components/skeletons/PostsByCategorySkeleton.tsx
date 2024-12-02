export const PostByCategorySkeletonWrapper = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-8 my-8 md:my-16 md:grid-cols-2">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <PostGridItemSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};
const PostGridItemSkeleton = () => {
  return (
    <div className="lg:flex animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-56 lg:w-64 bg-gray-300 rounded-3xl"></div>

      <div className="flex flex-col justify-between py-6 lg:mx-6 w-full">
        {/* Category Placeholder */}
        <div className="h-4 bg-gray-300 rounded-md w-24 mb-2"></div>

        {/* Title Placeholder */}
        <div className="h-6 bg-gray-300 rounded-md mb-3 w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded-md mb-3 w-1/2"></div>

        {/* Date Placeholder */}
        <div className="h-4 bg-gray-300 rounded-md w-32"></div>
      </div>
    </div>
  );
};

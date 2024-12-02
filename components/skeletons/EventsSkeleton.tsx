import { Grid } from "../ui/grid";

export const EventsSkeletonWrapper = () => {
  return (
    <div className="py-10">
      <Grid className="md:grid-cols-2 lg:grid-cols-3 gap-y-8">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <EventCardSkeleton key={index} />
          ))}
      </Grid>
    </div>
  );
};
const EventCardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col bg-white rounded-3xl shadow-lg">
      {/* Cover Image Skeleton */}
      <div className="w-full h-48 bg-gray-300 rounded-t-3xl"></div>

      {/* Card Content Skeleton */}
      <div className="flex flex-col w-full md:flex-row">
        {/* Date Section Skeleton */}
        <div className="flex flex-row justify-around p-4 font-semibold leading-none uppercase bg-gray-200 rounded-bl-3xl rounded-br-3xl md:rounded-br-none md:flex-col md:items-center md:justify-center md:w-1/4">
          <div className="w-12 h-6 bg-gray-300 rounded-md"></div>
          <div className="w-10 h-8 bg-gray-300 rounded-md mt-2"></div>
          <div className="w-16 h-5 bg-gray-300 rounded-md mt-2"></div>
        </div>

        {/* Main Content Skeleton */}
        <div className="p-4 md:w-3/4">
          {/* Title Skeleton */}
          <div className="h-5 bg-gray-300 rounded-md mb-4 w-3/4"></div>
          {/* Location Skeleton */}
          <div className="flex items-center mt-2 gap-x-2">
            <div className="h-5 w-5 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

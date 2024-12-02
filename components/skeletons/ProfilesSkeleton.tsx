import { Grid } from "../ui/grid";

export const ProfilesSkeletonWrapper = () => {
  return (
    <div className="flex space-y-8 flex-col max-w-5xl mx-auto w-full">
      <Grid>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <ProfileGridItemSkeleton key={index} />
          ))}
      </Grid>
    </div>
  );
};
const ProfileGridItemSkeleton = () => {
  return (
    <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white border border-neutral-200 flex flex-col shadow-sm cursor-pointer">
      {/* Skeleton for Image */}
      <div className="bg-neutral-300 w-full h-48 rounded-t-lg animate-pulse"></div>

      {/* Skeleton for Badge */}
      <div className="flex items-center flex-wrap gap-1 px-6 py-3 bg-neutral-100">
        <div className="bg-neutral-300 h-4 w-24 rounded animate-pulse"></div>
      </div>

      {/* Skeleton for Profile Details */}
      <div className="group-hover/bento:translate-x-2 transition duration-200 px-6 py-4">
        <div className="bg-neutral-300 h-6 w-1/2 rounded animate-pulse mb-2"></div>
        <div className="bg-neutral-300 h-4 w-3/4 rounded animate-pulse mb-2"></div>
        <div className="flex items-center mt-2 gap-x-2">
          <div className="bg-neutral-300 h-5 w-5 rounded-full animate-pulse"></div>
          <div className="bg-neutral-300 h-4 w-32 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

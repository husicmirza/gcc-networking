export const ProfileSkeleton = () => {
  return (
    <div className="flex space-y-4 flex-col max-w-5xl mx-auto w-full">
      <div className="flex space-y-4 flex-col max-w-5xl mx-auto w-full">
        <div className="bg-white shadow-md rounded-2xl flex flex-col animate-pulse">
          {/* Background Skeleton */}
          <div className="h-40 bg-neutral-300 rounded-2xl flex justify-center lg:justify-start">
            <div className="lg:ml-20 mt-20 w-40 h-40 bg-neutral-300 rounded-full border-2 border-white"></div>
          </div>

          {/* Profile Content Skeleton */}
          <div className="flex lg:justify-end lg:ml-8 lg:pl-8 justify-center mt-20 lg:mt-0">
            <div className="flex px-6 py-6 gap-8 flex-col lg:flex-row lg:justify-between lg:w-[75%] items-center lg:items-start">
              {/* Left Section Skeleton */}
              <div className="flex flex-col gap-y-2 justify-center items-center lg:justify-start lg:items-start w-full">
                <div className="w-32 h-5 bg-neutral-300 rounded-md"></div>
                <div className="w-40 h-4 bg-neutral-300 rounded-md"></div>
                <div className="h-4 w-24 bg-neutral-300 rounded-md"></div>
              </div>

              {/* Right Section Skeleton */}
              <div className="flex flex-col h-full justify-between gap-y-2">
                <div className="w-20 h-8 bg-neutral-300 rounded-md"></div>
                <div className="flex gap-x-2">
                  <div className="h-6 w-6 bg-neutral-300 rounded-full"></div>
                  <div className="h-6 w-6 bg-neutral-300 rounded-full"></div>
                  <div className="h-6 w-6 bg-neutral-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-2xl flex flex-col px-6 py-8 gap-y-4 animate-pulse">
        {/* Title Skeleton */}
        <div className="w-24 h-6 bg-neutral-300 rounded-md"></div>

        {/* Paragraph Skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-neutral-300 rounded-md"></div>
          <div className="h-4 w-3/4 bg-neutral-300 rounded-md"></div>
          <div className="h-4 w-5/6 bg-neutral-300 rounded-md"></div>
          <div className="h-4 w-full bg-neutral-300 rounded-md"></div>
          <div className="h-4 w-4/5 bg-neutral-300 rounded-md"></div>
          <div className="h-4 w-3/4 bg-neutral-300 rounded-md"></div>
          <div className="h-4 w-full bg-neutral-300 rounded-md"></div>
          <div className="h-4 w-5/6 bg-neutral-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

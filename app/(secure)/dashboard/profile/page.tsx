import ProfilesWrapper from "@/components/profile/ProfilesWrapper";
import { ProfilesSkeletonWrapper } from "@/components/skeletons/ProfilesSkeleton";
import { Suspense } from "react";

const ProfilesPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const serializedSearchParams = JSON.stringify(searchParams);

  return (
    <Suspense
      key={serializedSearchParams}
      fallback={<ProfilesSkeletonWrapper />}
    >
      <ProfilesWrapper searchParams={searchParams} />
    </Suspense>
  );
};

export default ProfilesPage;

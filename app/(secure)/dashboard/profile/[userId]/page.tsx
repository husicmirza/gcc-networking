import ProfileWrapper from "@/components/profile/ProfileWrapper";
import { ProfileSkeleton } from "@/components/skeletons/ProfileSkeleton";
import React, { Suspense } from "react";

export default async function ProfilePage({
  params: { userId },
}: SearchParamProps) {
  const serializedSearchParams = JSON.stringify(userId);

  return (
    <Suspense key={serializedSearchParams} fallback={<ProfileSkeleton />}>
      <ProfileWrapper userId={userId} />
    </Suspense>
  );
}

import React from "react";
import ProfileHeader from "./ProfileHeader";
import AboutProfile from "./AboutProfile";
import { getCurrentUser, getUserInfo } from "@/lib/actions/user.actions";
import ProfileAlert from "./ProfileAlert";

const ProfileContainer = async ({ userId }: { userId: string }) => {
  const [user, currentUser] = await Promise.all([
    getUserInfo(userId),
    getCurrentUser(),
  ]);
  return (
    <div className="flex space-y-4 flex-col max-w-5xl mx-auto w-full">
      <ProfileAlert
        status={user.status}
        cancellationReason={user.cancellationReason}
      />
      <ProfileHeader
        imageSrc={user.image}
        fullName={`${user.firstName} ${user.lastName}`}
        occupation={user.occupation}
        company={user.company}
        location={`${user.city}, ${user.country}`}
        industry={user.industry}
        userId={user.userId}
        linkedin={user.linkedin}
        facebook={user.facebook}
        instagram={user.instagram}
        isAdmin={currentUser.isAdmin}
        currentUserId={currentUser.userId}
      />
      <AboutProfile />
    </div>
  );
};
export default ProfileContainer;

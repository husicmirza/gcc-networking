import React from "react";
import ProfileHeader from "./ProfileHeader";
import AboutProfile from "./AboutProfile";
import { getUserInfo } from "@/lib/actions/user.actions";

const ProfileContainer = async ({ userId }: { userId: string }) => {
  const user = await getUserInfo(userId);
  return (
    <div className="flex space-y-4 flex-col max-w-5xl mx-auto w-full">
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
      />
      <AboutProfile />
    </div>
  );
};
export default ProfileContainer;

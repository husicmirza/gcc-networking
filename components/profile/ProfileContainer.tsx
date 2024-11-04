import React from "react";
import ProfileHeader from "./ProfileHeader";
import AboutProfile from "./AboutProfile";

const ProfileContainer = () => {
  return (
    <div className="flex space-y-4 flex-col max-w-5xl mx-auto w-full">
      <ProfileHeader />
      <AboutProfile />
    </div>
  );
};
export default ProfileContainer;

import ProfileContainer from "@/components/profile/ProfileContainer";
import React from "react";

export default async function ProfilePage({
  params: { userId },
}: SearchParamProps) {
  return <ProfileContainer userId={userId} />;
}

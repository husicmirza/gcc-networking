import ProfileContainer from "@/components/profile/ProfileContainer";
import { getUserInfo } from "@/lib/actions/user.actions";
import React from "react";

export default async function ProfilePage({
  params: { userId },
}: SearchParamProps) {
  const user = await getUserInfo(userId as string);
  return <ProfileContainer user={user} />;
}

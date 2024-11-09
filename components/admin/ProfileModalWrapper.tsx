import React from "react";
import { getUserInfo } from "@/lib/actions/user.actions";
import ProfileModal from "./ProfileModal";

const ProfileModalWrapper = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const user = await getUserInfo(searchParams?.id as string);
  return <ProfileModal user={user} />;
};

export default ProfileModalWrapper;

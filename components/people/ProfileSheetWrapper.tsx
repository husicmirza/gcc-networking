import React from "react";
import CustomProfileSheet from "../CustomProfileSheet";
import { getUserInfo } from "@/lib/actions/user.actions";

const ProfileSheetWrapper = async ({ searchParams }: SearchParamProps) => {
  const user = await getUserInfo({ userId: searchParams?.id as string });
  return <CustomProfileSheet user={user} />;
};

export default ProfileSheetWrapper;

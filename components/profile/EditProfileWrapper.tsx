import React from "react";
import EditProfileForm from "./EditProfileForm";
import { getUserInfo } from "@/lib/actions/user.actions";

const EditProfileWrapper = async ({ userId }: { userId: string }) => {
  const user = await getUserInfo(userId);
  return (
    <div className="flex space-y-4 flex-col max-w-5xl mx-auto w-full">
      <EditProfileForm user={user} />
    </div>
  );
};

export default EditProfileWrapper;

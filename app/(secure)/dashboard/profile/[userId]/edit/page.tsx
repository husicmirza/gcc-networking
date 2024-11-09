import EditProfileContainer from "@/components/profile/EditProfileContainer";
import React from "react";

const EditProfilePage = async ({ params: { userId } }: SearchParamProps) => {
  return <EditProfileContainer userId={userId} />;
};

export default EditProfilePage;

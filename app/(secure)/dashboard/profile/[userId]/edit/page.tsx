import EditProfileWrapper from "@/components/profile/EditProfileWrapper";
import React from "react";

const EditProfilePage = async ({ params: { userId } }: SearchParamProps) => {
  return <EditProfileWrapper userId={userId} />;
};

export default EditProfilePage;

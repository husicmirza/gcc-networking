import React from "react";
import { getUsers } from "@/lib/actions/user.actions";
import { DataTable } from "../DataTable";
import { columns } from "./columns";
import ProfileSheetWrapper from "./ProfileSheetWrapper";

const PeopleContainer = async ({ searchParams }: SearchParamProps) => {
  const users = await getUsers();
  return (
    <div>
      <DataTable data={users} columns={columns} />
      <ProfileSheetWrapper searchParams={searchParams} />
    </div>
  );
};

export default PeopleContainer;

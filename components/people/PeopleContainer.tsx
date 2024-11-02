import React from "react";
import { getUsers } from "@/lib/actions/user.actions";
import { DataTable } from "../DataTable";
import { columns } from "./columns";
import ProfileSheetWrapper from "./ProfileSheetWrapper";

const PeopleContainer = async ({ searchParams }: SearchParamProps) => {
  const users = await getUsers();
  return (
    <div className="flex h-full space-y-8 flex-col">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Hi there! 👋</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of Balkan Residents in the GCC!
        </p>
      </div>
      <DataTable data={users} columns={columns} />
      <ProfileSheetWrapper searchParams={searchParams} />
    </div>
  );
};

export default PeopleContainer;

import React from "react";
import { DataTable } from "../core/DataTable";
import { getUsers } from "@/lib/actions/user.actions";
import { columns } from "./columns";

const AdminPanel = async () => {
  const users = await getUsers();

  return (
    <div className="flex space-y-8 flex-col max-w-5xl mx-auto w-full">
      <div className="border-b pb-2">
        <h2 className="text-2xl font-bold tracking-tight">Admin Panel</h2>
        <p className="text-muted-foreground">Here&apos;s a list Users!</p>
      </div>
      {/* <FiltersWrapper /> */}
      <DataTable data={users} columns={columns} />
    </div>
  );
};

export default AdminPanel;

"use client";
import { ColumnDef } from "@tanstack/react-table";

import { IconCheck, IconX } from "@tabler/icons-react";
import { User } from "@/types";

import ProfileModal from "./ProfileModal";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const firstName = row.original.firstName;
      const lastName = row.original.lastName;
      return (
        <p className="text-14-medium ">
          {firstName} {lastName}
        </p>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const email = row.original.email;
      return <p className="text-14-medium ">{email}</p>;
    },
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      const city = row.original.city;
      const country = row.original.country;
      return (
        <p className="text-14-medium ">
          {city} {country}
        </p>
      );
    },
  },
  {
    id: "view",
    header: "View Profile",
    cell: ({ row }) => {
      const user = row.original;
      return <ProfileModal user={user} />;
    },
  },
  {
    id: "action",
    header: "Action",
    cell: () => {
      // const id = row.original.$id;

      return (
        <div className="flex gap-1">
          <IconX className="text-destructive" />
          <IconCheck className="text-success" />
        </div>
      );
    },
  },
];

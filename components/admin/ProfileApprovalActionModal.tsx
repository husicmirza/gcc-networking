"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

import { DialogTitle } from "@radix-ui/react-dialog";
import { User } from "@/types/appwrite.types";
import { IconCheck, IconX } from "@tabler/icons-react";
import ProfileApprovalActionForm from "./ProfileApprovalActionForm";
const ProfileApprovalActionModal = ({
  user,
  type,
}: {
  user: User;
  type: "approve" | "cancel";
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {type === "approve" ? (
          <IconCheck className="text-success" cursor="pointer" />
        ) : (
          <IconX className="text-destructive" cursor="pointer" />
        )}
      </DialogTrigger>
      <DialogContent className="bg-neutral-50">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-neutral-700 capitalize">
            {type} {user?.firstName} {user?.lastName} Profile?
          </DialogTitle>
        </DialogHeader>
        <ProfileApprovalActionForm user={user} type={type} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileApprovalActionModal;

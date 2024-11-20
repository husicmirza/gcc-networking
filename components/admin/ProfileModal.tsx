"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import ProfileHeader from "../profile/ProfileHeader";
import AboutProfile from "../profile/AboutProfile";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { User } from "@/types/appwrite.types";
import Link from "next/link";

const ProfileModal = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">View</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl bg-neutral-50 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex gap-x-3">
          <DialogTitle className="text-lg font-semibold text-neutral-700">
            Preview {user.firstName} {user.lastName} Profile
          </DialogTitle>
          <Link
            href={`/dashboard/profile/${user.userId}`}
            className="underline"
          >
            Visit profile
          </Link>
        </DialogHeader>
        <ProfileHeader
          imageSrc={user.image}
          fullName={`${user.firstName} ${user.lastName}`}
          occupation={user.occupation}
          company={user.company}
          location={`${user.city}, ${user.country}`}
          industry={user.industry}
          userId={user.userId}
          linkedin={user.linkedin as string}
          facebook={user.facebook as string}
          instagram={user.instagram as string}
        />
        <AboutProfile />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;

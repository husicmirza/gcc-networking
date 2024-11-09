"use client";
import React from "react";

import { usePathname, useRouter } from "next/navigation";
import { User } from "@/types";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import ProfileHeader from "../profile/ProfileHeader";
import AboutProfile from "../profile/AboutProfile";
import { DialogTitle } from "@radix-ui/react-dialog";
const ProfileModal = ({ user }: { user: User | undefined }) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleClose = () => router.push(pathname);
  // TODO: implement sheet form here
  return (
    <Dialog open={!!user?.userId} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl bg-neutral-50 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-neutral-700">
            Preview {user?.firstName} {user?.lastName} Profile
          </DialogTitle>
        </DialogHeader>
        {user && (
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
        )}
        <AboutProfile />
        <AboutProfile />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;

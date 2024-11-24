"use client";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";

import Image from "next/image";
import { adminDashboardLinks, sidebarLinks } from "@/constants";
import DashboardFooter from "./DashboardFooter";
import { IconUserBolt } from "@tabler/icons-react";
import { User } from "@/types/appwrite.types";

const DashboardSidebar = ({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: User;
}>) => {
  const [open, setOpen] = useState(false);

  const isAdmin = user.labels.includes("admin");
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-white w-full flex-1 border border-neutral-200 overflow-hidden h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              <SidebarLink
                link={{
                  label: "Profile",
                  href: `/dashboard/profile/${user.userId}`,
                  icon: (
                    <IconUserBolt className="text-neutral-700 h-5 w-5 flex-shrink-0" />
                  ),
                }}
              />
              {sidebarLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              {isAdmin &&
                adminDashboardLinks.map((link, idx) => (
                  <div key={idx}>
                    <hr className="border-neutral-200" />
                    <SidebarLink key={idx} link={link} />
                  </div>
                ))}
            </div>
          </div>

          <DashboardFooter />
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1 overflow-auto">
        <div className="p-6 md:p-10 rounded-tl-2xl border border-neutral-200 bg-neutral-50 flex flex-col gap-2 flex-1 w-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src="/assets/logo.png"
        width={1000}
        height={1000}
        alt="Gcc logo"
        className="h-8 w-8"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-neutral-700 whitespace-pre"
      >
        GCC Netwokring
      </motion.span>
    </Link>
  );
};
const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src="/assets/logo.png"
        width={1000}
        height={1000}
        alt="Gcc logo"
        className="h-8 w-8"
      />
    </Link>
  );
};

export default DashboardSidebar;

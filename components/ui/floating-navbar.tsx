"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AuthButton from "../navigation/AuthButton";

export const FloatingNav = ({
  navItems,
  className,
  user,
}: {
  navItems: NavItemProps[];
  className?: string;
  user: CurrentUser | null;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "flex max-w-fit  fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center sm:space-x-8 space-x-4",
          className
        )}
      >
        {navItems.map((navItem: NavItemProps, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.href}
            className={cn(
              "relative  items-center flex text-neutral-700 hover:text-neutral-500"
            )}
          >
            <div className="flex items-center space-x-1">
              <span className="block ">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.label}</span>
            </div>
          </Link>
        ))}
        <AuthButton user={user} />
      </motion.div>
    </AnimatePresence>
  );
};

import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const AuthButton = ({ user }: { user: LoggedInUser | null }) => {
  return (
    <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
      {user ? (
        <div className="flex items-center space-x-1">
          <IconUser className="h-5 w-5 text-neutral-700 hover:text-neutral-500" />
          <span className="hidden sm:block text-sm text-neutral-700 hover:text-neutral-500">
            {user.name}
          </span>
        </div>
      ) : (
        <Link href="/login" className="text-neutral-700 hover:text-neutral-500">
          Login
        </Link>
      )}
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
    </button>
  );
};

export default AuthButton;

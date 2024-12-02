import Link from "next/link";
import React from "react";
import NavMenu from "./NavMenu";

const AuthButton = ({ user }: { user: CurrentUser | null }) => {
  return (
    <div className="border text-sm font-medium relative border-neutral-200 text-black dark:text-white px-4 py-2 rounded-full">
      {user ? (
        <NavMenu user={user} />
      ) : (
        <Link href="/login" className="text-neutral-700 hover:text-neutral-500">
          Login
        </Link>
      )}
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
    </div>
  );
};

export default AuthButton;

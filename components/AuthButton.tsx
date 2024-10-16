import Link from "next/link";
import React from "react";

const AuthButton = ({ user }: { user: LoggedInUser | null }) => {
  return (
    <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
      {user ? <p>{user.name}</p> : <Link href="/login">Login</Link>}
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
    </button>
  );
};

export default AuthButton;

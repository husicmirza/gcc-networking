import React from "react";
import { logoutUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { IconLogout2 } from "@tabler/icons-react";
import { SidebarLink } from "../ui/sidebar";

const DashboardFooter = () => {
  const handleLogOut = async () => {
    const loggedOut = await logoutUser();
    if (loggedOut) redirect("/login");
  };
  return (
    <div onClick={handleLogOut}>
      <SidebarLink
        link={{
          label: "Logout",
          href: "#",
          icon: (
            <IconLogout2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        }}
      />
    </div>
  );
};

export default DashboardFooter;

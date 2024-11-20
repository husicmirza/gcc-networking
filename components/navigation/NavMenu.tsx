import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  IconDashboard,
  IconLogout2,
  IconUserBolt,
  IconUsers,
} from "@tabler/icons-react";
import { logoutUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { User } from "@/types/appwrite.types";

const NavMenu = ({ user }: { user: User }) => {
  const handleLogOut = async () => {
    const loggedOut = await logoutUser();
    if (loggedOut) redirect("/login");
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {user.firstName} {user.lastName}
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="flex flex-col py-2 px-2 md:w-[150px] text-sm">
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link
                    href={`/dashboard/profile/${user.userId}`}
                    className="flex items-center select-none space-x-1 rounded-md text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground px-4"
                  >
                    <IconUserBolt className="text-neutral-700 h-5 w-5 flex-shrink-0" />
                    <div className="my-3">Profile</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center select-none space-x-1 rounded-md text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground px-4"
                  >
                    <IconUsers className="text-neutral-700 h-5 w-5 flex-shrink-0" />
                    <div className="my-3">People</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              {user.isAdmin && (
                <li className="w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/dashboard/profile"
                      className="flex items-center select-none space-x-1 rounded-md text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground px-4"
                    >
                      <IconDashboard className="text-neutral-700 h-5 w-5 flex-shrink-0" />
                      <div className="my-3">Dashboard</div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              )}
              <li className="w-full border-t border-accent/50">
                <NavigationMenuLink asChild onClick={handleLogOut}>
                  <div className="flex items-center select-none space-x-1 rounded-md text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground px-4 cursor-pointer">
                    <IconLogout2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                    <div className="my-3">Logout</div>
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;

import {
  IconBuildings,
  IconDashboard,
  IconUsers,
  IconUserBolt,
} from "@tabler/icons-react";

export const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <IconDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: (
      <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "People",
    href: "/dashboard/people",
    icon: (
      <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Companies",
    href: "/dashboard/companies",
    icon: (
      <IconBuildings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

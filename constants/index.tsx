import {
  IconBuildings,
  IconDashboard,
  IconUsers,
  IconUserBolt,
  IconHome,
  IconBlockquote,
  IconMessage,
} from "@tabler/icons-react";

export const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <IconDashboard className="text-neutral-700 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: <IconUserBolt className="text-neutral-700 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "People",
    href: "/dashboard/people",
    icon: <IconUsers className="text-neutral-700 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Companies",
    href: "/dashboard/companies",
    icon: <IconBuildings className="text-neutral-700 h-5 w-5 flex-shrink-0" />,
  },
];

export const navItems = [
  {
    label: "Home",
    href: "/",
    icon: (
      <IconHome className="h-5 w-5 text-neutral-700 hover:text-neutral-500" />
    ),
  },
  {
    label: "Blog",
    href: "/posts",
    icon: (
      <IconBlockquote className="h-5 w-5 text-neutral-700 hover:text-neutral-500" />
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <IconMessage className="h-5 w-5 text-neutral-700 hover:text-neutral-500" />
    ),
  },
];

export const menuItems = [
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: <IconUserBolt className="text-neutral-700 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <IconDashboard className="text-neutral-700 h-5 w-5 flex-shrink-0" />,
  },
];

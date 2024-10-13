"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const Sidebar = ({ user }: { user: LoggedInUser }) => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r bg-gray-100 border-gray-200 shadow-md pt-8 text-white max-md:hidden sm:p-4 xl:p-6 xl:w-[300px]">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12 cursor-pointer flex items-center gap-2 md:px-3"
        >
          <Image
            src="/assets/logo.png"
            width={1000}
            height={1000}
            alt="Gcc logo"
            className="w-36 h-auto"
          />
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.endsWith(`/${item.route}`);

          return (
            <Link
              key={item.label}
              href={`/dashboard/${item.route}`}
              className={cn(
                "flex gap-3 items-center py-1 md:p-3 rounded-lg justify-center xl:justify-start text-gray-400 w-full",
                { "bg-gray-300": isActive }
              )}
            >
              <div
                className={cn("relative size-6 text-grey-700", {
                  "text-white": isActive,
                })}
              >
                <Icon name={item.icon} />
              </div>
              <p
                className={cn(
                  "text-16 font-semibold text-black-2 max-xl:hidden",
                  {
                    "!text-white": isActive,
                  }
                )}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;

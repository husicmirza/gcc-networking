"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
const CustomProfileSheet = ({ user }: { user: User | undefined }) => {
  const [side, setSide] = useState<"bottom" | "right">("right");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setSide("bottom");
      } else {
        setSide("right");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => router.push(pathname);
  // TODO: implement sheet form here
  return (
    <Sheet open={!!user?.userId} onOpenChange={handleClose}>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-6 flex-col sm:flex-row">
            <Image
              className="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0 border-muted border"
              src="/assets/logo.png"
              alt="Avatar"
              width={500}
              height={500}
            />
            <div className="text-center sm:space-y-2 sm:text-left flex gap-6 flex-col sm:flex-row">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                  {`${user?.firstName} ${user?.lastName}`}
                </p>
                <p className="text-slate-500 font-medium">Product Engineer</p>
              </div>
              <Button variant="secondary" size="sm" className="sm:self-end">
                Save
              </Button>
            </div>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CustomProfileSheet;

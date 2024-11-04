"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Filters from "./Filters";

const FiltersWrapper = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="md:flex w-full justify-between hidden">
        <Filters />
      </div>
      <div className="block md:hidden">
        <Sheet open={open} onOpenChange={() => setOpen(!open)}>
          <SheetTrigger className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3 cursor-pointer">
            Filters
          </SheetTrigger>
          <SheetContent side="bottom" className="flex flex-col gap-4">
            <SheetTitle className="pb-2 border-b">Filters</SheetTitle>
            <Filters />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default FiltersWrapper;

"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
const categoyList = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "it",
    label: "IT",
  },
  {
    value: "test",
    label: "Test",
  },
];
const CategoryTabs = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  return (
    <section>
      <Tabs defaultValue={searchParams.get("category") || "all"}>
        <TabsList className="mx-auto w-full">
          {categoyList.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              onClick={() =>
                replace(`?category=${category.value}`, { scroll: false })
              }
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
};

export default CategoryTabs;

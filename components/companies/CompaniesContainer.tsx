"use client";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { companyItems } from "@/constants";
import CompaniesFilters from "./CompaniesFilters";
import { useSearchParams } from "next/navigation";

const CompaniesContainer = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");

  return (
    <div className="flex h-full space-y-8 flex-col max-w-4xl mx-auto">
      <div className="border-b pb-2">
        <h2 className="text-2xl font-bold tracking-tight">Hi there! 👋</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of Balkan Companies in the GCC!
        </p>
      </div>
      <CompaniesFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BentoGrid className="max-w-4xl mx-auto">
        {companyItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            badge={item.badge}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
export default CompaniesContainer;

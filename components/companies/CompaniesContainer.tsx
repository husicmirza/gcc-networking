"use client";
import React, { useState } from "react";
import { companyItems } from "@/constants";
import CompaniesFilters from "./CompaniesFilters";
import { useSearchParams } from "next/navigation";
import { CompanyGridItem, Grid } from "../ui/grid";

const CompaniesContainer = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");

  return (
    <div className="flex space-y-8 flex-col max-w-5xl mx-auto w-full">
      <div className="border-b pb-2">
        <h2 className="text-2xl font-bold tracking-tight">Hi there! 👋</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of Balkan Companies in the GCC!
        </p>
      </div>
      <CompaniesFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Grid>
        {companyItems.map((item, i) => (
          <CompanyGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            badge={item.badge}
          />
        ))}
      </Grid>
    </div>
  );
};
export default CompaniesContainer;

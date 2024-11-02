import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { companyItems } from "@/constants";

const CompaniesContainer = () => {
  return (
    <div className="flex h-full space-y-8 flex-col">
      <div className="border-b pb-2">
        <h2 className="text-2xl font-bold tracking-tight">Hi there! 👋</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of Balkan Companies in the GCC!
        </p>
      </div>
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

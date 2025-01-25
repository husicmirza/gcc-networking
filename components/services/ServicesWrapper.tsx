import React from "react";

import FiltersWrapper from "../filters/FiltersWrapper";
import { Grid, ServiceGridItem } from "../ui/grid";
import { serviceItems } from "@/constants";

const ServicesWrapper = () => {
  return (
    <div className="flex space-y-8 flex-col max-w-5xl mx-auto w-full">
      <div className="border-b pb-2">
        <h2 className="text-2xl font-bold tracking-tight">Hi there! 👋</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of Services people offer in the GCC!
        </p>
      </div>
      <FiltersWrapper />
      <Grid className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {serviceItems.map((item, i) => (
          <ServiceGridItem
            key={i}
            title={item.title}
            description={item.description}
            avatar={item.avatar}
            badge={item.badge}
            author={item.author}
            date={item.date}
          />
        ))}
      </Grid>
    </div>
  );
};
export default ServicesWrapper;

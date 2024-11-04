import React from "react";
import { Grid, PeopleGridItem } from "../ui/grid";
import FiltersWrapper from "../filters/FiltersWrapper";
import { peopleItems } from "@/constants";

const PeopleContainer = () => {
  return (
    <div className="flex space-y-8 flex-col max-w-4xl mx-auto w-full">
      <div className="border-b pb-2">
        <h2 className="text-2xl font-bold tracking-tight">Hi there! 👋</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of Balkan Residents in the GCC!
        </p>
      </div>
      <FiltersWrapper />
      <Grid>
        {peopleItems.map((item, i) => (
          <PeopleGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            badge={item.badge}
            location={item.location}
          />
        ))}
      </Grid>
    </div>
  );
};

export default PeopleContainer;

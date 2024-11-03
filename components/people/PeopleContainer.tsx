"use client";
import React, { useState } from "react";

import ProfileSheetWrapper from "./ProfileSheetWrapper";
import { Grid, PeopleGridItem } from "../ui/grid";
import CompaniesFilters from "../companies/CompaniesFilters";
import { useSearchParams } from "next/navigation";

const PeopleContainer = () => {
  // const users = await getUsers();
  // { searchParams }: SearchParamProps
  // const searchParams = useSearchParams();

  // const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");
  return (
    <div className="flex space-y-8 flex-col max-w-4xl mx-auto w-full">
      <div className="border-b pb-2">
        <h2 className="text-2xl font-bold tracking-tight">Hi there! 👋</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of Balkan Residents in the GCC!
        </p>
      </div>
      {/* <DataTable data={users} columns={columns} /> */}
      {/* <CompaniesFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <Grid>
        <PeopleGridItem />
        <PeopleGridItem />
        <PeopleGridItem />
        <PeopleGridItem />
      </Grid>
      {/* <ProfileSheetWrapper searchParams={searchParams} /> */}
    </div>
  );
};

export default PeopleContainer;

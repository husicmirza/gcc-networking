import React from "react";

import ProfileSheetWrapper from "./ProfileSheetWrapper";
import { Grid, PeopleGridItem } from "../ui/grid";

const PeopleContainer = async ({ searchParams }: SearchParamProps) => {
  // const users = await getUsers();
  return (
    <div className="flex space-y-8 flex-col max-w-4xl mx-auto w-full">
      <div className="border-b pb-2">
        <h2 className="text-2xl font-bold tracking-tight">Hi there! 👋</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of Balkan Residents in the GCC!
        </p>
      </div>
      {/* <DataTable data={users} columns={columns} /> */}
      <Grid>
        <PeopleGridItem />
        <PeopleGridItem />
        <PeopleGridItem />
        <PeopleGridItem />
      </Grid>
      <ProfileSheetWrapper searchParams={searchParams} />
    </div>
  );
};

export default PeopleContainer;

import React from "react";
import { Grid, PeopleGridItem } from "../ui/grid";
import FiltersWrapper from "../filters/FiltersWrapper";
import { getPublicUsers } from "@/lib/actions/publicUsers.actions";
import { User } from "@/types/appwrite.types";

const PeopleContainer = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const users = await getPublicUsers(searchParams);

  return (
    <div className="flex space-y-8 flex-col max-w-5xl mx-auto w-full">
      <div className="border-b pb-2">
        <h2 className="text-2xl font-bold tracking-tight">Hi there! 👋</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of Balkan Residents in the GCC!
        </p>
      </div>
      <FiltersWrapper />
      <Grid>
        {users.length > 0 &&
          users
            .filter((user: User) => user.status === "approved")
            .map((user: User) => (
              <PeopleGridItem
                key={user.$id}
                userId={user.userId}
                fullName={`${user.firstName} ${user.lastName}`}
                ocupation={user.occupation}
                company={user.company}
                image={user.image}
                industry={user.industry}
                location={`${user.city}, ${user.country}`}
              />
            ))}
      </Grid>
    </div>
  );
};

export default PeopleContainer;

import React from "react";
import { Grid, ProfileGridItem } from "../ui/grid";
import FiltersWrapper from "../filters/FiltersWrapper";
import { getPublicUsers } from "@/lib/actions/publicUsers.actions";
import { User } from "@/types/appwrite.types";
import Pagination from "../pagination/Pagination";

const ProfilesWrapper = async ({
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
        {users?.documents.length > 0 &&
          users?.documents
            .filter((user: User) => user.status === "approved")
            .map((user: User) => (
              <ProfileGridItem
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
      <div className="flex sm:justify-end">
        <Pagination totalRecords={users?.total} pageSize={8} />
      </div>
    </div>
  );
};

export default ProfilesWrapper;

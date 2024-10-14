import React from "react";
import ProfileCard from "./ProfileCard";
import { getUsers } from "@/lib/actions/user.actions";

const PeopleContainer = async () => {
  const users = await getUsers();
  return (
    <div>
      {users.map((user: User) => (
        <ProfileCard key={user.userId} user={user} />
      ))}
    </div>
  );
};

export default PeopleContainer;

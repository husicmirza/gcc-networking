"use client";
import React, { useEffect, useState } from "react";
import CustomProfileSheet from "./CustomProfileSheet";

const ProfileCard = ({ user }: { user: User }) => {
  const [side, setSide] = useState<"bottom" | "right">("right");
  const [userData, setUserData] = useState({} as User);
  const handleClose = () => setUserData({} as User);
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setSide("bottom");
      } else {
        setSide("right");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        className="border p-8 cursor-pointer"
        onClick={() => setUserData(user)}
      >
        <h1>
          {user.firstName} {user.lastName}
        </h1>
      </div>
      <CustomProfileSheet
        side={side}
        user={userData}
        handleClose={handleClose}
      />
    </>
  );
};

export default ProfileCard;

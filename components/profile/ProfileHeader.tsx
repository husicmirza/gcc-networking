import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMapPin,
} from "@tabler/icons-react";
import { Button } from "../ui/button";

const ProfileHeader = () => {
  return (
    <section className="bg-white shadow-md rounded-2xl flex flex-col">
      <div
        className="h-40 bg-neutral-300 border rounded-2xl flex justify-center lg:justify-start"
        style={{
          backgroundImage: "url('/assets/bg-profile1.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:ml-20 mt-20">
          <Image
            className="object-contain object-center w-40 h-40 rounded-full border-2 bg-white"
            src="/assets/me1.png"
            alt="Avatar"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex lg:justify-end lg:ml-8 lg:pl-8 justify-center mt-20 lg:mt-0">
        <div className="flex px-6 py-6 gap-8 flex-col lg:flex-row lg:justify-between lg:w-[75%] items-center lg:items-start">
          <div className="flex flex-col gap-y-2 justify-center items-center lg:justify-start lg:items-start w-full">
            <h1 className="text-2xl font-semibold text-neutral-700">
              Mirza Husic
            </h1>
            <p className=" text-neutral-500 ">
              Software Engineer - Techman Solutions
            </p>
            <div className="flex items-center gap-x-2">
              <IconMapPin className="text-neutral-700 h-5 w-5 flex-shrink-0" />
              <h1 className="text-sm text-neutral-600">Doha, Qatar</h1>
            </div>
            <div>
              <Badge variant="success">Information Technology/IT</Badge>
            </div>
          </div>
          <div className="flex flex-col h-full justify-between gap-y-2">
            <Button size={"sm"}>Edit profile</Button>
            <div className="flex gap-x-2">
              <IconBrandLinkedin className="text-neutral-700 h-6 w-6 flex-shrink-0" />
              <IconBrandFacebook className="text-neutral-700 h-6 w-6 flex-shrink-0" />
              <IconBrandInstagram className="text-neutral-700 h-6 w-6 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;

/* <Image
className="object-contain object-center w-40 rounded-full h-40 border-2 bg-white"
src="/assets/me1.png"
alt="Avatar"
width={500}
height={500}
/> */

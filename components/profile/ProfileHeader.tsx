import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMapPin,
} from "@tabler/icons-react";

const ProfileHeader = () => {
  return (
    <section className="bg-white shadow-md rounded-xl relative flex flex-col">
      <div className="h-40 bg-neutral-200 rounded-xl flex">
        <div className="bottom-0 ml-40 transform -translate-x-1/2 translate-y-1/2">
          <Image
            className="object-contain object-center w-40 h-40 rounded-full border-2 bg-white"
            src="/assets/me1.png"
            alt="Avatar"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex justify-end ml-8">
        <div className="flex px-6 py-6 gap-x-16 justify-between w-[75%]">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-semibold text-gray-800">
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
          <div className="flex gap-x-2">
            <IconBrandLinkedin className="text-neutral-700 h-6 w-6 flex-shrink-0" />
            <IconBrandFacebook className="text-neutral-700 h-6 w-6 flex-shrink-0" />
            <IconBrandInstagram className="text-neutral-700 h-6 w-6 flex-shrink-0" />
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

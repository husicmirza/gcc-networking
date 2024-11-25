import { getDay, getMonth, getTime } from "@/lib/utils";
import { IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const EventCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-lg">
      <Image
        width={500}
        height={500}
        src="/assets/posts/preview/cover.jpg"
        className="w-full h-48 bg-top bg-cover rounded-t-3xl"
        alt=""
      />
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex flex-row justify-around p-4 font-semibold leading-none uppercase bg-neutral-300 rounded-bl-3xl rounded-br-3xl md:rounded-br-none md:flex-col md:items-center md:justify-center md:w-1/4">
          <div className="md:text-xl">{getMonth("2024-11-25T15:30:00Z")}</div>
          <div className="md:text-3xl">{getDay("2024-11-25T15:30:00Z")}</div>
          <div className="md:text-lg text-center">
            {getTime("2024-11-25T15:30:00Z")}
          </div>
        </div>
        <div className="p-4 md:w-3/4">
          <h1 className="mb-4 text-2xl font-semibold">
            2024 National Championships
          </h1>
          <p className="text-sm md:text-md leading-relaxed mb-4 flex-grow [text-wrap:balance]">
            The College Football Playoff (CFP) determines the national champion
            of the top division of college football
          </p>
          <div className="flex items-center mt-2 gap-x-2">
            <IconMapPin className="text-neutral-700 h-5 w-5 flex-shrink-0" />
            <p className="text-xs">Lusail Internacional Circuit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

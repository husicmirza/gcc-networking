import { getDay, getMonth, getTime, truncateString } from "@/lib/utils";
import { IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard = ({
  title,
  coverImage,
  startDate,
  slug,
  location,
  city,
  country,
}: EventCardProps) => {
  return (
    <Link href={`/events/${slug}`}>
      <div className="flex flex-col bg-white rounded-3xl shadow-lg">
        <Image
          width={500}
          height={500}
          src={coverImage}
          className="w-full h-48 object-cover rounded-t-3xl"
          alt="event-image"
        />
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-row justify-around p-4 font-semibold leading-none uppercase bg-neutral-300 rounded-bl-3xl rounded-br-3xl md:rounded-br-none md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-xl">{getMonth(startDate)}</div>
            <div className="md:text-3xl">{getDay(startDate)}</div>
            <div className="md:text-lg text-center">{getTime(startDate)}</div>
          </div>
          <div className="p-4 md:w-3/4">
            <h2 className="mb-4 text-xl font-semibold">
              {truncateString(`${title}`, 56)}
            </h2>
            <div className="flex items-center mt-2 gap-x-2 whitespace-nowrap">
              <IconMapPin className="text-neutral-700 h-5 w-5 flex-shrink-0" />
              <p className="text-xs truncate">
                {location}, {city}, {country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

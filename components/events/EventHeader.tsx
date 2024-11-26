import React from "react";
import PostTitle from "../posts/PostTitle";
import CoverImage from "../posts/CoverImage";
import DateFormatter from "../posts/DateFormatter";
import { IconCalendarTime, IconCash, IconMapPin } from "@tabler/icons-react";

const EventHeader = ({
  title,
  coverImage,
  startDate,
  endDate,

  location,
  city,
  country,
  price,
  currency,
  isFreeEvent,
}: EventHeaderProps) => {
  return (
    <div>
      <PostTitle>{title}</PostTitle>
      <div className="my-6 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-3xl mx-auto flex flex-col mb-6">
        <div className="flex items-center mt-2 gap-x-2 whitespace-nowrap">
          <IconCalendarTime className="text-neutral-700 h-6 w-6 flex-shrink-0" />
          <DateFormatter dateString={startDate} /> -
          <DateFormatter dateString={endDate} />
        </div>
        <div className="flex items-center mt-2 gap-x-2 whitespace-nowrap">
          <IconMapPin className="text-neutral-700 h-6 w-6 flex-shrink-0" />
          <p className="truncate">
            {location}, {city}, {country}
          </p>
        </div>
        <div className="flex items-center mt-2 gap-x-2 whitespace-nowrap">
          <IconCash className="text-neutral-700 h-6 w-6 flex-shrink-0" />
          {isFreeEvent ? (
            <p>Free</p>
          ) : (
            <p>
              {price} {currency}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventHeader;

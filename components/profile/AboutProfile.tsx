import {
  IconCalendar,
  IconHome,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import React from "react";
import { formatDateTime } from "@/lib/utils";

const AboutProfile = ({
  dateOfBirth,
  cityOfOrigin,
  countryOfOrigin,
  email,
  phone,
  biography,
}: AboutProfileProps) => {
  return (
    <section className="bg-white shadow-md rounded-2xl flex flex-col px-6 py-8 gap-y-4">
      <h2 className="font-semibold text-neutral-700 text-xl">About Me</h2>
      <div className="flex gap-4 flex-wrap">
        {dateOfBirth && (
          <div className="flex items-center gap-x-2">
            <IconCalendar className="text-neutral-700 h-5 w-5 flex-shrink-0" />
            <h1 className="text-sm text-neutral-600">
              {/* <DateFormatter dateString={dateOfBirth.toString()} /> */}
              {formatDateTime(dateOfBirth).dateOnly}
            </h1>
          </div>
        )}
        {cityOfOrigin && countryOfOrigin && (
          <div className="flex items-center gap-x-2">
            <IconHome className="text-neutral-700 h-5 w-5 flex-shrink-0" />
            <h1 className="text-sm text-neutral-600">
              {cityOfOrigin}, {countryOfOrigin}
            </h1>
          </div>
        )}
        <div className="flex items-center gap-x-2">
          <IconMail className="text-neutral-700 h-5 w-5 flex-shrink-0" />
          <h1 className="text-sm text-neutral-600">{email}</h1>
        </div>
        <div className="flex items-center gap-x-2">
          <IconPhone className="text-neutral-700 h-5 w-5 flex-shrink-0" />
          <h1 className="text-sm text-neutral-600">{phone}</h1>
        </div>
      </div>

      {biography && (
        <div className="text-neutral-500">
          <div dangerouslySetInnerHTML={{ __html: biography }} />
        </div>
      )}
    </section>
  );
};

export default AboutProfile;

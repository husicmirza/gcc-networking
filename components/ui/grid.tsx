import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import ImageWithFallback from "../core/ImageWithFallback";
import Link from "next/link";

export const Grid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CompanyGridItem = ({
  className,
  title,
  description,
  header,
  badge,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header: string;
  badge?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-white border border-neutral-200 flex flex-col space-y-4 shadow-sm cursor-pointer",
        className
      )}
    >
      <div className="flex flex-1 w-full h-full min-h-[6rem] max-h-[6rem] rounded-xl border border-neutral-200 p-2">
        <Image src={header} width={1000} height={1000} alt="Gcc logo" />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <Badge variant="success">{badge}</Badge>
        <div className="font-sans font-bold text-neutral-600 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};

export const PeopleGridItem = ({
  className,
  fullName,
  userId,
  ocupation,
  company,
  image,
  industry,
  location,
}: {
  className?: string;
  fullName?: string | React.ReactNode;
  userId: string;
  ocupation?: string | React.ReactNode;
  company?: string | React.ReactNode;
  image: string;
  industry?: string;
  location?: string;
}) => {
  return (
    <Link href={`/dashboard/profile/${userId}`}>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white border border-neutral-200 flex flex-col shadow-sm cursor-pointer",
          className
        )}
      >
        <ImageWithFallback
          src={image}
          width={500}
          height={500}
          alt="Gcc logo"
          className="object-contain object-center w-full h-48 rounded-t-lg"
        />

        <div className="flex items-center flex-wrap gap-1 px-6 py-3 bg-neutral-100">
          <Badge variant="success">{industry}</Badge>
        </div>
        <div className="group-hover/bento:translate-x-2 transition duration-200 px-6 py-4">
          <h1 className="font-bold font-sans text-neutral-600">{fullName}</h1>
          <p className="py-2 font-sans font-normal text-neutral-600 text-xs">
            {ocupation} at {company}
          </p>
          <div className="flex items-center mt-2 gap-x-2">
            <IconMapPin className="text-neutral-700 h-5 w-5 flex-shrink-0" />
            <p className="text-xs text-neutral-600">{location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ServiceGridItem = ({
  className,
  title,
  description,
  avatar,
  badge,
  date,
  author,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  avatar: string;
  badge?: string;
  date?: string;
  author: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white border border-neutral-200 flex flex-col shadow-sm cursor-pointer",
        className
      )}
    >
      <div className="px-6 py-3 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-muted-foreground">
              {date}
            </span>
            <Badge variant="success">{badge}</Badge>
          </div>

          <div className="mt-2">
            <p className="font-bold font-sans text-neutral-600  hover:text-gray-700 hover:underline">
              {title}
            </p>
            <p className="mt-2 font-sans font-normal text-neutral-600 text-xs">
              {description}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <Image
              src={avatar}
              width={500}
              height={500}
              alt="Avatar"
              className="object-contain w-8 h-8 md:w-9 md:h-9 mr-4 rounded-full border border-neutral-200 bg-neutral-50"
            />
            <p className="font-bold text-neutral-700 cursor-pointer">
              {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

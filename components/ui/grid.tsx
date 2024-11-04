import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { IconMapPin } from "@tabler/icons-react";
import Image from "next/image";

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
  title,
  description,
  image,
  badge,
  location,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image: string;
  badge?: string;
  location?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white border border-neutral-200 flex flex-col shadow-sm cursor-pointer",
        className
      )}
    >
      <Image
        src={image}
        width={500}
        height={500}
        alt="Gcc logo"
        className="object-contain object-center w-full h-48 rounded-t-lg"
      />

      <div className="flex items-center flex-wrap gap-1 px-6 py-3 bg-neutral-100">
        <Badge variant="success">{badge}</Badge>
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 px-6 py-4">
        <h1 className="font-bold font-sans text-neutral-600">{title}</h1>
        <p className="py-2 font-sans font-normal text-neutral-600 text-xs">
          {description}
        </p>
        <div className="flex items-center mt-2 gap-x-2">
          <IconMapPin className="text-neutral-700 h-5 w-5 flex-shrink-0" />
          <h1 className="text-xs text-neutral-600">{location}</h1>
        </div>
      </div>
    </div>
  );
};

export const ServiceGridItem = ({
  className,
  title,
  description,
  image,
  badge,
  location,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  badge?: string;
  location?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white border border-neutral-200 flex flex-col shadow-sm cursor-pointer",
        className
      )}
    >
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-muted-foreground">
            Mar 10, 2019
          </span>
          <Badge variant="success">Profesional Trening</Badge>
        </div>

        <div className="mt-2">
          <p className="text-xl font-bold text-neutral-600  hover:text-gray-700 hover:underline">
            Accessibility tools for designers and developers
          </p>
          <p className="mt-2 text-neutral-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block"
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <p className="font-bold text-neutral-700 cursor-pointer">
              Khatab wedaa
            </p>
          </div>
          {/* <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            tabIndex="0"
            role="link"
          >
            Read more
          </a> */}
        </div>
      </div>
    </div>
  );
};

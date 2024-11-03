import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { IconMapPin } from "@tabler/icons-react";

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
  header?: React.ReactNode;
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
        {header}
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
  header,
  badge,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  badge?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white border border-neutral-200 flex flex-col shadow-sm cursor-pointer",
        className
      )}
    >
      <img
        className="object-cover object-center w-full h-48 rounded-t-lg"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />
      <div className="flex items-center flex-wrap gap-1 px-6 py-3 bg-neutral-100">
        <Badge variant="success">Software and Hardware</Badge>
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 px-6 py-4">
        <h1 className="font-bold font-sans text-neutral-600">
          Patterson Johnson
        </h1>

        <p className="py-2 font-sans font-normal text-neutral-600 text-xs">
          Full Stack maker & UI / UX Designer, love hip hop music. Author of
          Building UI.
        </p>

        <div className="flex items-center mt-2 gap-x-2">
          <IconMapPin className="text-neutral-700 h-5 w-5 flex-shrink-0" />
          <h1 className="text-xs text-neutral-600">Doha, Qatar</h1>
        </div>
      </div>
    </div>
  );
};

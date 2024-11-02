import { cn } from "@/lib/utils";
import { Badge } from "./badge";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
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

export const BentoGridItem2 = ({
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

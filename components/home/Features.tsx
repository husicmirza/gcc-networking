import React from "react";
import { cn } from "@/lib/utils";
import { features } from "@/constants";
import { Badge } from "../ui/badge";

const Features = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-40 px-4 border-t border-neutral-200">
      <div className="flex flex-col items-center justify-center gap-y-10 mb-4">
        <Badge variant="info" className="text-md">
          Features
        </Badge>
        <h2 className="text-2xl md:text-4xl font-semibold text-center ">
          The Ultimate Expat Hub
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl">
          Discover a world of possibilities designed specifically for expats
          like you. From seamless networking to local insights, explore tools
          and features that make your international journey extraordinary.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 w-full px-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature rounded-b-lg justify-center items-center"
      )}
    >
      <div className="absolute left-0 top-1/2 inset-y-0 h-12 group-hover/feature:h-10 w-1.5 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-[#0ea5e9] transition-all duration-200 origin-center " />
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 group-hover/feature:text-[#0ea5e9]">
        {icon}
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-700 text-center">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10 text-center group-hover/feature:translate-x-2 transition duration-200 inline-block">
        {description}
      </p>
    </div>
  );
};

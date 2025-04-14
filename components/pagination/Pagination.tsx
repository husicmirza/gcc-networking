"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

interface PaginationProps {
  totalRecords?: number;
  pageSize?: number;
  customPathname?: string;
  className?: string;
}

const Pagination = ({
  totalRecords = 0,
  pageSize = 25,
  customPathname,
  className,
}: PaginationProps) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("current_page")) || 1;

  const handlePageChange = (newPage: number) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("current_page", newPage.toString());
    const newQueryString = updatedSearchParams.toString();
    replace(`${customPathname || pathname}?${newQueryString}`);
  };

  const totalPages = Math.ceil(totalRecords / pageSize);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages || totalPages === 0;

  const startRecord = totalRecords === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endRecord = Math.min(currentPage * pageSize, totalRecords);

  return (
    <>
      <div
        className={cn(
          "flex items-center transition-all sm:w-fit w-full",
          className
        )}
      >
        <div className="flex w-full flex-wrap items-center sm:flex-nowrap sm:gap-2 md:gap-14">
          <span className="mb-2 w-full whitespace-nowrap rounded-md bg-secondary h-10 px-4 py-2.5 text-secondary-foreground text-center text-xs font-medium sm:mb-0">
            Total: {startRecord} to {endRecord} of {totalRecords}
          </span>
          <div className="flex w-full items-center justify-between gap-1 sm:w-fit sm:gap-2">
            <Button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              variant="secondary"
              disabled={isFirstPage}
            >
              Previous
            </Button>
            <Button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              variant="secondary"
              disabled={isLastPage}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;

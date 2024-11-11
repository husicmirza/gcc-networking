"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "../ui/select";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { statusOptions } from "@/constants";

const ProfileFilters = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "all");

  const updateFilterParams = (): void => {
    const params = new URLSearchParams(searchParams);
    const updateParam = (paramName: string, stateValue: string | boolean) => {
      params.set(paramName, stateValue.toString());
    };

    updateParam("status", status);

    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }

    replace(`?${params.toString()}`);
  };

  const resetFilters = (): void => {
    const isAlreadyDefault =
      searchParams.get("query") === "" &&
      status === "all" &&
      !searchParams.has("status");

    if (isAlreadyDefault) {
      return;
    }

    setStatus("all");
    setSearchTerm("");

    const params = new URLSearchParams(searchParams);
    params.delete("status");
    params.delete("query");
    replace(`?${params.toString()}`);
  };

  return (
    <>
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex flex-col gap-2">
          <Label className="text-muted-foreground">Search</Label>
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-muted-foreground">Status</Label>
          <Select
            onValueChange={(e: any) => setStatus(e)}
            value={status}
            defaultValue={status}
          >
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Select an industry" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((option) => (
                <SelectItem value={option.value} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-end items-end gap-2 pt-6 lg:ml-2 lg:pt-0">
        <Button
          variant="default"
          onClick={() => {
            updateFilterParams();
          }}
          className="w-full"
        >
          Apply
        </Button>
        <Button variant="secondary" onClick={resetFilters} className="w-full">
          Reset
        </Button>
      </div>
    </>
  );
};

export default ProfileFilters;

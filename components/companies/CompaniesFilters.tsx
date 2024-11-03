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
const industryOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "it",
    label: "IT",
  },
  {
    value: "medicine",
    label: "Medicine",
  },
];
const countryOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "qatar",
    label: "Qatar",
  },
  {
    value: "uae",
    label: "UAE",
  },
];

const CompaniesFilters = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");
  const [industry, setIndustry] = useState(
    searchParams.get("industry") || "all"
  );
  const [country, setCountry] = useState(searchParams.get("country") || "all");

  const updateFilterParams = (): void => {
    const params = new URLSearchParams(searchParams);
    console.log(params);
    const updateParam = (paramName: string, stateValue: string | boolean) => {
      params.set(paramName, stateValue.toString());
    };

    updateParam("industry", industry);
    updateParam("country", country);

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
      industry === "all" &&
      country === "all" &&
      !searchParams.has("industry") &&
      !searchParams.has("country");

    if (isAlreadyDefault) {
      return;
    }

    setIndustry("all");
    setCountry("all");
    setSearchTerm("");

    const params = new URLSearchParams(searchParams);
    params.delete("industry");
    params.delete("country");
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
          <Label className="text-muted-foreground">Industry</Label>
          <Select
            onValueChange={(e: any) => setIndustry(e)}
            value={industry}
            defaultValue={industry}
          >
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Select an industry" />
            </SelectTrigger>
            <SelectContent>
              {industryOptions.map((option) => (
                <SelectItem value={option.value} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-muted-foreground">Country</Label>
          <Select
            onValueChange={(e: any) => setCountry(e)}
            value={country}
            defaultValue={country}
          >
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {countryOptions.map((option) => (
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
          size="sm"
          onClick={() => {
            updateFilterParams();
          }}
          className="w-full"
        >
          Apply
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={resetFilters}
          className="w-full"
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default CompaniesFilters;

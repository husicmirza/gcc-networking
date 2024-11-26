/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { User } from "@/types/appwrite.types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const formatUserData = (userData: User) => ({
  userId: userData.userId,
  email: userData.email,
  firstName: userData.firstName,
  lastName: userData.lastName,
  dateOfBirth: userData.dateOfBirth,
  address1: userData.address1,
  city: userData.city,
  country: userData.country,
  zipCode: userData.zipCode ?? "",
  phone: userData.phone,
  status: userData.status,
  cancellationReason: userData.cancellationReason ?? "",
  company: userData.company ?? "",
  industry: userData.industry ?? "",
  linkedin: userData.linkedin ?? "",
  instagram: userData.instagram ?? "",
  facebook: userData.facebook ?? "",
  cityOfOrigin: userData.cityOfOrigin ?? "",
  countryOfOrigin: userData.countryOfOrigin ?? "",
  image: userData.image ?? "",
  occupation: userData.occupation ?? "",
  user: userData.$id ?? "",
});

import { parseISO, format } from "date-fns";

export const getDay = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, "d");
};

export const getMonth = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, "LLL");
};

export const getTime = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, "hh:mm a");
};

export const truncateString = (str: string, maxLength: number): string => {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

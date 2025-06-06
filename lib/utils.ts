/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { User } from "@/types/appwrite.types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

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
  biography: userData.biography ?? "",
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

export const formatDateTime = (
  dateString: Date | string,
  timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    // weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    year: "numeric", // numeric year (e.g., '2023')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false),
    timeZone: timeZone, // use the provided timezone
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    year: "numeric", // numeric year (e.g., '2023')
    month: "2-digit", // abbreviated month name (e.g., 'Oct')
    day: "2-digit", // numeric day of the month (e.g., '25')
    timeZone: timeZone, // use the provided timezone
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
    timeZone: timeZone, // use the provided timezone
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
    timeZone: timeZone, // use the provided timezone
  };
  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "en-US",
    dateTimeOptions
  );

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    "en-US",
    dateDayOptions
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    "en-US",
    dateOptions
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    "en-US",
    timeOptions
  );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

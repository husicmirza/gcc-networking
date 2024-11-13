import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { remark } from "remark";
import html from "remark-html";
import { User } from "@/types/appwrite.types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));
export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

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

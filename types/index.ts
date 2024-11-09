/* eslint-disable @typescript-eslint/no-unused-vars */

import { Models } from "node-appwrite";
export type Status = "created" | "pending" | "approved" | "cancelled";

export type SignUpParams = {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  country: string;
  zipCode: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  password: string;
};

export interface User extends Models.Document {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  state: string;
  dateOfBirth: string;
  address1: string;
  city: string;
  country: string;
  zipCode: string;
  phone: string;
  status: Status;
}

export interface ExtendedUser extends User {
  occupation: string;
  company: string;
  industry: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  cityOfOrigin: string;
  countryOfOrigin: string;
  image: string;
}

declare type Author = {
  name: string;
  picture: string;
};

declare type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};

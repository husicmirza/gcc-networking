import { Models } from "node-appwrite";

export interface User extends Models.Document {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address1: string;
  city: string;
  country: string;
  zipCode: string;
  phone: string;
  status: Status;
  cancellationReason: string;
  company: string;
  industry: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  cityOfOrigin: string;
  countryOfOrigin: string;
  image: string;
}

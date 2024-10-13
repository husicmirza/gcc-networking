/* eslint-disable @typescript-eslint/no-unused-vars */

declare type SignUpParams = {
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

declare type LoggedInUser = {
  userId: string;
  email: string;
  name: string;
};

declare type User = {
  $id: string;
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  address1: string;
  city: string;
  country: string;
  zipCode: string;
  phone: string;
};

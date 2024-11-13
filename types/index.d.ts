declare type Status = "created" | "pending" | "approved" | "cancelled";

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

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

declare type UpdateUserInfoParams = { userId: string; userData: User };

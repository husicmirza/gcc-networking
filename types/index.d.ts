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
declare type CurrentUser = {
  userId: string;
  email: string;
  name: string;
  labels: string[];
};
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
  $createdAt: string;
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  authorName: string;
  authorImage: string;
  excerpt: string;
  ogImage: string;
  content: string;
  preview?: boolean;
  category: string;
};

declare type UpdateUserInfoParams = { userId: string; userData: User };

declare type PostPreviewProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  authorName: string;
  authorImage: string;
  slug: string;
};

declare type PostGridItemProps = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  category: string;
};

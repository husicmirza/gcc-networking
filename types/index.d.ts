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
  status: Status;
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
declare type NavItemProps = {
  label: string;
  href: string;
  icon?: JSX.Element;
};

declare type EventCardProps = {
  title: string;
  coverImage: string;
  startDate: string;
  slug: string;
  location: string;
  city: string;
  country: string;
};

declare type PostHeaderProps = {
  title: string;
  coverImage: string;
  date: string;
};

declare type EventHeaderProps = {
  title: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  location: string;
  city: string;
  country: string;
  price: number;
  currency: string;
  isFreeEvent: boolean;
};

declare type ProfileHeaderProps = {
  imageSrc: string;
  fullName: string;
  occupation: string;
  company: string;
  location: string;
  industry: string;
  userId: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  isAdmin?: boolean;
  currentUserId?: string;
};

declare type AboutProfileProps = {
  dateOfBirth: string;
  cityOfOrigin: string;
  countryOfOrigin: string;
  email: string;
  phone: string;
  biography: string;
};

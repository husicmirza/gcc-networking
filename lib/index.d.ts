declare type SearchParamProps = {
  params?: { [key: string]: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

declare interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

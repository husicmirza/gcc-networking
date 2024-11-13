import PeopleContainer from "@/components/people/PeopleContainer";
import { Suspense } from "react";

const PeoplePage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PeopleContainer searchParams={searchParams} />
    </Suspense>
  );
};

export default PeoplePage;

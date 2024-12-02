import EventsWrapper from "@/components/events/EventsWrapper";
import { EventsSkeletonWrapper } from "@/components/skeletons/EventsSkeleton";
import { Suspense } from "react";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const serializedSearchParams = JSON.stringify(searchParams);

  return (
    <main className="container mx-auto px-5 mb-10 md:mb-20">
      <Suspense
        key={serializedSearchParams}
        fallback={<EventsSkeletonWrapper />}
      >
        <EventsWrapper />
      </Suspense>
    </main>
  );
}

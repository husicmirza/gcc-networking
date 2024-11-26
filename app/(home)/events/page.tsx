import EventsWrapper from "@/components/events/EventsWrapper";
import { Suspense } from "react";

export default async function EventsPage() {
  return (
    <main className="container mx-auto px-5 mb-10 md:mb-20">
      <Suspense fallback={<div>Loading...</div>}>
        <EventsWrapper />
      </Suspense>
    </main>
  );
}

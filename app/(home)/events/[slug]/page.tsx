import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import EventWrapper from "@/components/events/EventWrapper";
import { getEvent } from "@/lib/actions/events.actions";

export default async function EventsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="max-w-5xl 2xl:max-w-7xl mx-auto px-5">
      <Suspense fallback={<div>Loading...</div>}>
        <EventWrapper params={params} />
      </Suspense>
    </main>
  );
}

export async function generateMetadata({
  params: { slug },
}: SearchParamProps): Promise<Metadata> {
  const event = await getEvent(slug);

  if (!event) {
    return notFound();
  }

  const title = `${event.title} | Gcc Networking`;

  return {
    title,
    openGraph: {
      title,
      images: [event.ogImage],
    },
  };
}

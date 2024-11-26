import { getEvent } from "@/lib/actions/events.actions";
import React from "react";
import ContentBody from "../posts/ContentBody";
import EventHeader from "./EventHeader";
import Avatar from "../posts/Avatar";

const EventWrapper = async ({ params }: { params: { slug: string } }) => {
  const event = await getEvent(params.slug);
  return (
    <article className="mb-32">
      <EventHeader
        title={event.title}
        coverImage={event.coverImage}
        location={event.location}
        city={event.city}
        country={event.country}
        price={event.price}
        currency={event.currency}
        isFreeEvent={event.isFreeEvent}
        startDate={event.startDate}
        endDate={event.endDate}
      />
      <ContentBody content={event.content} />
      <div className="max-w-3xl mx-auto mt-6">
        <Avatar name={event.authorName} picture={event.authorImage} />
      </div>
    </article>
  );
};

export default EventWrapper;

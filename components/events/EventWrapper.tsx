import { getEvent } from "@/lib/actions/events.actions";
import React from "react";

const EventWrapper = async ({ params }: { params: { slug: string } }) => {
  const event = await getEvent(params.slug);
  return <div>{event.title}</div>;
};

export default EventWrapper;

import { getEvents } from "@/lib/actions/events.actions";
import React from "react";
import { Grid } from "../ui/grid";
import EventCard from "./EventCard";

const EventsWrapper = async () => {
  const events = await getEvents();
  return (
    <Grid className="md:grid-cols-2 lg:grid-cols-3 gap-y-8">
      {events.map((event: EventCardProps) => (
        <EventCard
          key={event.slug}
          title={event.title}
          coverImage={event.coverImage}
          startDate={event.startDate}
          slug={event.slug}
          location={event.location}
          city={event.city}
          country={event.country}
        />
      ))}
    </Grid>
  );
};

export default EventsWrapper;

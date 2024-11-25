import EventCard from "@/components/events/EventCard";
import { Grid } from "@/components/ui/grid";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="container mx-auto px-5 mb-10 md:mb-20">
      <Grid className="md:grid-cols-2 lg:grid-cols-3">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Grid>
    </main>
  );
}

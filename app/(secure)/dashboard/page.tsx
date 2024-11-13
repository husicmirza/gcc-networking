import AdminPanel from "@/components/admin/AdminPanel";
import { Suspense } from "react";

export default function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminPanel searchParams={searchParams} />
    </Suspense>
  );
}

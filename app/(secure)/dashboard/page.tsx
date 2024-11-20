import AdminPanel from "@/components/admin/AdminPanel";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const user = await getCurrentUser();
  if (!user.isAdmin) {
    redirect("/");
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminPanel searchParams={searchParams} />
    </Suspense>
  );
}

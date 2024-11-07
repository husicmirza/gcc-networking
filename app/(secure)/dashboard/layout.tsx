import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getLoggedInUser();
  return (
    <main className="flex w-full">
      <DashboardSidebar user={user}>{children}</DashboardSidebar>
    </main>
  );
}

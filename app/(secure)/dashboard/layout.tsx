import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full">
      <DashboardSidebar>{children}</DashboardSidebar>
    </main>
  );
}

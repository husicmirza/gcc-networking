import DashboardSidebar from "@/components/DashboardSidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full">
      <DashboardSidebar>{children}</DashboardSidebar>
    </main>
  );
}

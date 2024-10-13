import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getLoggedInUser();
  if (!user) redirect("/login");
  return (
    <main className="flex h-screen w-full">
      <Sidebar user={user} />
      <div>{children}</div>
    </main>
  );
}

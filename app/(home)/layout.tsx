import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants";
import { getCurrentUser } from "@/lib/actions/user.actions";

export const metadata: Metadata = {
  title: "Home",
  description: "Gcc Network",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <main className="flex flex-col min-h-screen">
      <FloatingNav navItems={navItems} user={user} />
      <div className="flex-grow mt-12 md:mt-36">{children}</div>
      <Footer />
    </main>
  );
}

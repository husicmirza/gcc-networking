import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full lg:grid lg:grid-cols-2 min-h-screen">
      {children}
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/images/bg-login.jpg"
          alt="Image"
          width={1920}
          height={1080}
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </main>
  );
}

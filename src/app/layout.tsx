import type { Metadata } from "next";

import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import SideNavbar from "@/components/SideNavbar";

export const metadata: Metadata = {
  title: "Movie App",
  description: "An app for meeting friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased relative`}>
        <main className=" flex flex-col">
          <TopNavbar />
          <section className="flex">
            <SideNavbar />
            <section className="flex flex-row items-center justify-center h-full w-full pt-10">
              {children}
            </section>
          </section>
        </main>
      </body>
    </html>
  );
}

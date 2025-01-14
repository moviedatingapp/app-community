import type { Metadata } from "next";

import "./globals.css";
import TopNavbar from "@/components/TopNavbar";

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
      <body className={` antialiased`}>
        <TopNavbar />
        {children}
      </body>
    </html>
  );
}

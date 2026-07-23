import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sergio Gómez Martín | AI / ML Engineer",
  description:
    "Personal portfolio and interactive CV for Sergio Gómez Martín, AI / ML Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

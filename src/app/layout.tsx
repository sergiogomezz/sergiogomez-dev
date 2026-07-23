import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sergio Gómez Martín | AI / ML Engineer",
  description:
    "AI / ML Engineer building LLM agent systems and scalable data pipelines for industrial and enterprise problems.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM agents",
    "Multi-agent systems",
    "Data pipelines",
    "LangGraph",
  ],
  authors: [{ name: "Sergio Gómez Martín" }],
  creator: "Sergio Gómez Martín",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sergio Gómez Martín | AI / ML Engineer",
    description:
      "LLM agent systems, applied AI and scalable data pipelines for real-world problems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Gómez Martín | AI / ML Engineer",
    description:
      "LLM agent systems, applied AI and scalable data pipelines for real-world problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
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

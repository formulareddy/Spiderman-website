import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#DC2626",
};

export const metadata: Metadata = {
  title: "Spider-Man: Miles Morales | Experience the Power",
  description:
    "Dive into the immersive world of Spider-Man Miles Morales. Discover his unique abilities, story, and the vibrant universe he protects.",
  keywords: ["Spider-Man", "Miles Morales", "PlayStation", "Marvel", "Game"],
  authors: [{ name: "Sony Interactive Entertainment" }],
  openGraph: {
    title: "Spider-Man: Miles Morales",
    description: "Experience the power. Embrace the responsibility.",
    type: "website",
    locale: "en_US",
    siteName: "Spider-Man: Miles Morales",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spider-Man: Miles Morales",
    description: "Experience the power. Embrace the responsibility.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🕷️</text></svg>" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

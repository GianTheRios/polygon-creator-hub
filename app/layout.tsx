import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polygon Creator Hub",
  description: "Create content that shapes Web3 — by Polygon Labs",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Polygon Creator Hub",
    description: "Create content that shapes Web3 — by Polygon Labs",
    url: "https://example.com",
    siteName: "Polygon Creator Hub",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polygon Creator Hub",
    description: "Create content that shapes Web3 — by Polygon Labs",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <link rel="preload" as="image" href="/brand/polygon-wordmark.svg" />
        <link rel="preload" as="image" href="/brand/polygon-wordmark-dark.svg" />
        {children}
      </body>
    </html>
  );
}

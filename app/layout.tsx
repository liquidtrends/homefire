import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homefire Consulting | Indigenous-Led Workforce & Community Solutions",
  description:
    "Homefire Consulting is an Indigenous woman-owned family business dedicated to strengthening communities, organizations, and workforce development with culturally grounded solutions.",
  keywords: [
    "Indigenous consulting",
    "workforce development",
    "community solutions",
    "strategic planning",
    "capacity building",
    "reconciliation",
    "construction management",
    "Homefire Consulting",
  ],
  authors: [{ name: "Homefire Consulting" }],
  openGraph: {
    title: "Homefire Consulting | Indigenous-Led Workforce & Community Solutions",
    description:
      "Homefire Consulting is an Indigenous woman-owned family business dedicated to strengthening communities, organizations, and workforce development with culturally grounded solutions.",
    url: "https://homefireconsultingltd.com",
    siteName: "Homefire Consulting",
    images: [
      {
        url: "/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Homefire Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homefire Consulting | Indigenous-Led Workforce & Community Solutions",
    description:
      "Homefire Consulting is an Indigenous woman-owned family business dedicated to strengthening communities, organizations, and workforce development with culturally grounded solutions.",
    creator: "@HomefireConsulting", // Replace with your Twitter handle if you have one
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

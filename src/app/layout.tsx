import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { PostHogWrapper } from "@/components/PostHogWrapper";
import Tag from "@/tag/Tag";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Premium Coffee Mugs - Custom Designs & Fast Shipping",
  description: "Shop our collection of high-quality coffee mugs with custom design options. Fast shipping, affordable prices, and 30-day satisfaction guarantee.",
  keywords: "coffee mugs, custom mugs, personalized mugs, ceramic mugs, bulk mugs, corporate gifts",
  openGraph: {
    title: "Premium Coffee Mugs - Custom Designs & Fast Shipping",
    description: "Shop our collection of high-quality coffee mugs with custom design options.",
    siteName: "Coffee Mugs Co",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};
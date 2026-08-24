import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorEffect from "@/components/animations/CursorEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grey-zen.github.io"),

  title: {
    default: "Grey Space | Website Developer & Digital Growth Specialist",
    template: "%s | Grey Space",
  },

  description:
    "Grey Space helps businesses grow online through premium website development, SEO, Google Ads, Meta Ads, AI automation and digital marketing.",

  keywords: [
    "Grey Space",
    "Website Developer",
    "Web Designer",
    "Next.js Developer",
    "React Developer",
    "WordPress Developer",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "AI Automation",
    "Digital Marketing",
    "Business Website",
    "Website Development",
  ],

  authors: [
    {
      name: "Grey",
    },
  ],

  creator: "Grey",

  publisher: "Grey Space",

  applicationName: "Grey Space",

  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://grey-zen.github.io",
  },

  openGraph: {
    title: "Grey Space | Website Developer & Digital Growth Specialist",

    description:
      "Premium website development, SEO, Google Ads, Meta Ads, AI automation and digital marketing for businesses that want to grow online.",

    url: "https://grey-zen.github.io",

    siteName: "Grey Space",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/Grey.png",
        width: 588,
        height: 581,
        alt: "Grey Space",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Grey Space | Website Developer & Digital Growth Specialist",

    description:
      "Premium website development, SEO, Google Ads, Meta Ads, AI automation and digital marketing.",

    images: ["/images/Grey.png"],
  },

  icons: {
    icon: [
      {
        url: "/images/Grey.png",
        type: "image/png",
      },
    ],

    shortcut: "/images/Grey.png",

    apple: [
      {
        url: "/images/Grey.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[#050816] text-white antialiased`}
      >
        {/* Global Cursor Effect */}
        <CursorEffect />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen pt-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

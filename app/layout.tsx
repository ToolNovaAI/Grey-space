import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Grey Studio | Website Developer & Digital Growth Specialist",
    template: "%s | Grey Studio",
  },

  description:
    "Premium Website Development, SEO, Google Ads, Meta Ads, Automation and Digital Marketing solutions for businesses looking to grow online.",

  keywords: [
    "Website Developer",
    "Web Designer",
    "Next.js Developer",
    "WordPress Developer",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Automation",
    "Digital Marketing",
    "Business Website",
    "Portfolio",
  ],

  authors: [
    {
      name: "Grey",
    },
  ],

  creator: "Grey",

  publisher: "Grey Studio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Grey Studio",

    description:
      "Modern websites, SEO, Automation & Digital Marketing that help businesses grow.",

    url: "https://your-domain.com",

    siteName: "Grey Studio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Grey Studio",

    description:
      "Premium Website Development, SEO, Automation & Digital Marketing.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050816] text-white`}
      >
        <Navbar />

        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}

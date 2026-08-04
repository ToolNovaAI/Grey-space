import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Grey Studio | Website Developer & Digital Growth Specialist",
    template: "%s | Grey Studio",
  },

  description:
    "Premium Website Development, SEO, Google Ads, Meta Ads, AI Automation and Digital Marketing services for businesses that want to grow online.",

  keywords: [
    "Website Developer",
    "Web Designer",
    "Next.js",
    "React",
    "WordPress",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "AI Automation",
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
      "Premium Website Development, SEO, Google Ads, Meta Ads and AI Automation.",

    url: "https://your-domain.com",

    siteName: "Grey Studio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Grey Studio",

    description:
      "Premium Website Development, SEO, Google Ads, Meta Ads and AI Automation.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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

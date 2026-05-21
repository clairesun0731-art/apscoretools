import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  metadataBase: new URL("https://www.apscoretools.com"),
  title: {
    default: "AP Score Tools | Free AP Score Calculators and Exam Tools",
    template: "%s | AP Score Tools",
  },
  description:
    "AP Score Tools provides free, unofficial AP score calculators and exam tools for students. Start with the AP Environmental Science score calculator.",
  openGraph: {
    title: "AP Score Tools",
    description:
      "Free, unofficial AP score calculators and exam tools for students.",
    url: "https://www.apscoretools.com",
    siteName: "AP Score Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AP Score Tools",
    description:
      "Free, unofficial AP score calculators and exam tools for students.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}

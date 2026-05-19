import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
  metadataBase: new URL("https://apscoretools.com"),
  title: {
    default: "AP Score Calculator",
    template: "%s | AP Score Calculator",
  },
  description:
    "Free, unofficial AP score calculators and exam tools for students.",
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
        <header className="site-header">
          <nav className="nav container" aria-label="Main navigation">
            <Link className="logo" href="/">
              <Image
                alt="AP Score Calculator"
                height={44}
                priority
                src="/logo-ap-score-calculator-horizontal.png"
                width={132}
              />
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/ap-environmental-science-score-calculator/">
                APES Calculator
              </Link>
              <Link href="/about/">About</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-inner">
            <Image
              alt=""
              aria-hidden="true"
              className="footer-icon"
              height={32}
              src="/logo-ap-score-calculator-square.png"
              width={32}
            />
            <p>
              AP Score Calculator is unofficial and is not affiliated with or
              endorsed by the College Board. Predicted AP scores are estimates
              only.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

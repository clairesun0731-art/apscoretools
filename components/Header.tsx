"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="logo" href="/">
          <Image
            alt="AP Score Tools"
            className="logo-horizontal"
            height={144}
            priority
            src="/logo-ap-score-calculator-horizontal.png"
            width={433}
          />
        </Link>
        <div className="desktop-nav-links">
          <TrackedLink
            eventName="calculator_hub_click"
            eventParams={{ source: "header" }}
            href="/ap-score-calculators/"
          >
            AP Score Calculators
          </TrackedLink>
          <Link href="/how-ap-environmental-science-is-scored/">
            Scoring Guides
          </Link>
          <Link href="/about/">About</Link>
        </div>

        <button
          aria-controls="mobile-site-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen((menuOpen) => !menuOpen)}
          type="button"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {isMenuOpen && (
          <div className="mobile-nav-panel" id="mobile-site-menu">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/ap-score-calculators/" onClick={closeMenu}>
              AP Score Calculators
            </Link>
            <Link
              href="/how-ap-environmental-science-is-scored/"
              onClick={closeMenu}
            >
              Scoring Guides
            </Link>
            <Link href="/about/" onClick={closeMenu}>
              About
            </Link>
            <Link href="/privacy-policy/" onClick={closeMenu}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-use/" onClick={closeMenu}>
              Terms of Use
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

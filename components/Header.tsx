"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";

const liveCalculatorLinks = [
  {
    href: "/ap-environmental-science-score-calculator/",
    label: "AP Environmental Science",
  },
  {
    href: "/ap-chemistry-score-calculator/",
    label: "AP Chemistry",
  },
  {
    href: "/ap-human-geography-score-calculator/",
    label: "AP Human Geography",
  },
];

const betaCalculatorLinks = [
  {
    href: "/ap-macroeconomics-score-calculator/",
    label: "AP Macroeconomics",
  },
  {
    href: "/ap-world-history-score-calculator/",
    label: "AP World History",
  },
];

const comingSoonLinks = [
  {
    href: "/ap-biology-score-calculator/",
    label: "AP Biology",
  },
  {
    href: "/ap-calculus-ab-score-calculator/",
    label: "AP Calculus AB",
  },
  {
    href: "/ap-lang-score-calculator/",
    label: "AP English Language",
  },
  {
    href: "/apush-score-calculator/",
    label: "APUSH",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalculatorMenuOpen, setIsCalculatorMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const closeCalculatorMenu = () => setIsCalculatorMenuOpen(false);

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
          <div className="nav-dropdown-wrap">
            <button
              aria-expanded={isCalculatorMenuOpen}
              className="nav-dropdown-trigger"
              onClick={() =>
                setIsCalculatorMenuOpen((menuOpen) => !menuOpen)
              }
              type="button"
            >
              Calculators
            </button>
            {isCalculatorMenuOpen && (
              <div className="nav-dropdown" onMouseLeave={closeCalculatorMenu}>
                <div className="nav-dropdown-section">
                  <strong>Live Calculators</strong>
                  {liveCalculatorLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      onClick={closeCalculatorMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="nav-dropdown-section">
                  <strong>Beta / Under Review</strong>
                  {betaCalculatorLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      onClick={closeCalculatorMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="nav-dropdown-section">
                  <strong>Coming Soon</strong>
                  {comingSoonLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      onClick={closeCalculatorMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <TrackedLink
                  className="nav-dropdown-cta"
                  eventName="calculator_hub_click"
                  eventParams={{ source: "header_dropdown" }}
                  href="/ap-score-calculators/"
                  onClick={closeCalculatorMenu}
                >
                  View All AP Score Calculators →
                </TrackedLink>
              </div>
            )}
          </div>
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
            <div className="mobile-nav-group">
              <strong>Live Calculators</strong>
              {liveCalculatorLinks.map((link) => (
                <Link href={link.href} key={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mobile-nav-group">
              <strong>Beta / Under Review</strong>
              {betaCalculatorLinks.map((link) => (
                <Link href={link.href} key={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mobile-nav-group">
              <strong>Coming Soon</strong>
              {comingSoonLinks.map((link) => (
                <Link href={link.href} key={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </div>
            <TrackedLink
              eventName="calculator_hub_click"
              eventParams={{ source: "mobile_header" }}
              href="/ap-score-calculators/"
              onClick={closeMenu}
            >
              View All AP Score Calculators →
            </TrackedLink>
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

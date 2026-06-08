"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import {
  getComingSoonCalculators,
  getPopularCalculators,
} from "@/lib/apCalculatorDirectory";

const liveCalculatorLinks = getPopularCalculators();
const comingSoonNavLinks = getComingSoonCalculators().filter((calculator) =>
  [
    "ap_physics_1",
    "ap_physics_2",
    "ap_european_history",
    "ap_comparative_government",
    "ap_english_literature",
  ].includes(calculator.subjectId),
);

const guideLinks = [
  {
    href: "/guides/",
    label: "All AP Score Guides",
  },
  {
    href: "/guides/ap-score-release/",
    label: "AP Score Release",
  },
  {
    href: "/guides/ap-score-meaning/",
    label: "AP Score Meaning",
  },
  {
    href: "/guides/ap-scoring-guides/",
    label: "AP Scoring Guides",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalculatorMenuOpen, setIsCalculatorMenuOpen] = useState(false);
  const [isGuidesMenuOpen, setIsGuidesMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const closeCalculatorMenu = () => setIsCalculatorMenuOpen(false);
  const closeGuidesMenu = () => setIsGuidesMenuOpen(false);

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
              onClick={() => {
                setIsCalculatorMenuOpen((menuOpen) => !menuOpen);
                setIsGuidesMenuOpen(false);
              }}
              type="button"
            >
              Calculators
            </button>
            {isCalculatorMenuOpen && (
              <div className="nav-dropdown" onMouseLeave={closeCalculatorMenu}>
                <div className="nav-dropdown-section">
                  <strong>Live Calculators</strong>
                  <TrackedLink
                    eventName="calculator_hub_click"
                    eventParams={{ source: "header_dropdown_group" }}
                    href="/ap-score-calculators/"
                    onClick={closeCalculatorMenu}
                  >
                    All AP Score Calculators
                  </TrackedLink>
                  {liveCalculatorLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      onClick={closeCalculatorMenu}
                    >
                      {link.shortTitle}
                    </Link>
                  ))}
                </div>
                <div className="nav-dropdown-section">
                  <strong>Coming Soon</strong>
                  {comingSoonNavLinks.map((link) => (
                    <Link
                      href="/ap-score-calculators/"
                      key={link.href}
                      onClick={closeCalculatorMenu}
                    >
                      {link.shortTitle}
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
          <div className="nav-dropdown-wrap">
            <button
              aria-expanded={isGuidesMenuOpen}
              className="nav-dropdown-trigger"
              onClick={() => {
                setIsGuidesMenuOpen((menuOpen) => !menuOpen);
                setIsCalculatorMenuOpen(false);
              }}
              type="button"
            >
              Guides
            </button>
            {isGuidesMenuOpen && (
              <div
                className="nav-dropdown guides-nav-dropdown"
                onMouseLeave={closeGuidesMenu}
              >
                <div className="nav-dropdown-section">
                  <strong>AP Score Guides</strong>
                  {guideLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      onClick={closeGuidesMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
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
              <TrackedLink
                eventName="calculator_hub_click"
                eventParams={{ source: "mobile_header_group" }}
                href="/ap-score-calculators/"
                onClick={closeMenu}
              >
                All AP Score Calculators
              </TrackedLink>
              {liveCalculatorLinks.map((link) => (
                <Link href={link.href} key={link.href} onClick={closeMenu}>
                  {link.shortTitle}
                </Link>
              ))}
            </div>
            <div className="mobile-nav-group">
              <strong>Coming Soon</strong>
              {comingSoonNavLinks.map((link) => (
                <Link href="/ap-score-calculators/" key={link.href} onClick={closeMenu}>
                  {link.shortTitle}
                </Link>
              ))}
            </div>
            <div className="mobile-nav-group">
              <strong>Guides</strong>
              {guideLinks.map((link) => (
                <Link href={link.href} key={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </div>
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { liveApCalculators, comingSoonApCalculators } from "@/lib/apCalculatorDirectory";

const headerTopToolHrefs = [
  "/ap-environmental-science-score-calculator/",
  "/ap-chemistry-score-calculator/",
];
const headerTopTools = liveApCalculators.filter((calculator) =>
  headerTopToolHrefs.includes(calculator.href),
);
const headerComingSoonTools = comingSoonApCalculators.slice(0, 2);

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
              <div
                className="nav-dropdown calculator-nav-dropdown"
                onMouseLeave={closeCalculatorMenu}
              >
                <div className="nav-dropdown-top">
                  <TrackedLink
                    eventName="calculator_hub_click"
                    eventParams={{ source: "header_dropdown_top" }}
                    href="/ap-score-calculators/"
                    onClick={closeCalculatorMenu}
                  >
                    AP Score Calculators Hub
                  </TrackedLink>
                </div>
                <div className="nav-dropdown-section">
                  <strong>Live tools</strong>
                  {headerTopTools.map((calculator) => (
                    <Link
                      href={calculator.href}
                      key={calculator.href}
                      onClick={closeCalculatorMenu}
                    >
                      {calculator.navTitle}
                    </Link>
                  ))}
                </div>
                <div className="nav-dropdown-section subtle">
                  <strong>More calculators</strong>
                  <p>
                    Browse additional unofficial AP score calculators and
                    planned tools in the hub.
                  </p>
                  <TrackedLink
                    className="nav-dropdown-cta"
                    eventName="calculator_hub_click"
                    eventParams={{ source: "header_dropdown" }}
                    href="/ap-score-calculators/"
                    onClick={closeCalculatorMenu}
                  >
                    View all AP score calculators →
                  </TrackedLink>
                </div>
                <div className="nav-dropdown-section">
                  <strong>Coming Soon</strong>
                  <p className="nav-soon-note">
                    Planned tools are shown in the hub so students can discover
                    upcoming subjects.
                  </p>
                  {headerComingSoonTools.map((calculator) => (
                    <span className="nav-soon-item" key={calculator.href}>
                      <span>{calculator.navTitle}</span>
                      <span className="nav-soon-badge">Coming Soon</span>
                    </span>
                  ))}
                </div>
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
              <strong>Calculators</strong>
              <TrackedLink
                eventName="calculator_hub_click"
                eventParams={{ source: "mobile_header_group" }}
                href="/ap-score-calculators/"
                onClick={closeMenu}
              >
                AP Score Calculators
              </TrackedLink>
              {headerTopTools.map((calculator) => (
                <Link
                  href={calculator.href}
                  key={calculator.href}
                  onClick={closeMenu}
                >
                  {calculator.navTitle}
                </Link>
              ))}
              <span className="mobile-soon-note">
                More live calculators and planned tools are available in the hub.
              </span>
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

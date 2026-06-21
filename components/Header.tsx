"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import {
  comingSoonApCalculators,
  getPrimaryCalculatorNavGroups,
} from "@/lib/apCalculatorDirectory";

const liveCalculatorGroups = getPrimaryCalculatorNavGroups()
  .map((group) => ({
    ...group,
    items: group.items.filter((calculator) => calculator.status === "live"),
  }))
  .filter((group) => group.items.length > 0);

const mobileLiveCalculatorLinks = liveCalculatorGroups.flatMap((group) => group.items);

const comingSoonLinks = comingSoonApCalculators.slice(0, 8);

const guideLinks = [
  {
    href: "/how-ap-environmental-science-is-scored/",
    label: "How AP Environmental Science Is Scored",
  },
  {
    href: "/when-do-ap-scores-come-out/",
    label: "When Do AP Scores Come Out?",
  },
  {
    href: "/how-to-check-ap-scores/",
    label: "How to Check AP Scores",
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
                <div className="calculator-nav-grid">
                  {liveCalculatorGroups.map((group) => (
                    <div className="nav-dropdown-section" key={group.category}>
                      <strong>{group.displayName}</strong>
                      {group.items.map((calculator) => (
                        <Link
                          href={calculator.href}
                          key={calculator.href}
                          onClick={closeCalculatorMenu}
                        >
                          {calculator.navTitle ?? calculator.shortTitle}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="nav-dropdown-section nav-dropdown-section-muted">
                    <strong>Coming Soon</strong>
                    {comingSoonLinks.map((calculator) => (
                      <span className="nav-soon-item" key={calculator.href}>
                        <span>{calculator.navTitle ?? calculator.shortTitle}</span>
                        <span className="nav-soon-badge">Soon</span>
                      </span>
                    ))}
                  </div>
                </div>
                <TrackedLink
                  className="nav-dropdown-cta"
                  eventName="calculator_hub_click"
                  eventParams={{ source: "header_dropdown" }}
                  href="/ap-score-calculators/"
                  onClick={closeCalculatorMenu}
                >
                  Browse AP Score Calculators →
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
              <strong>Calculators</strong>
              <TrackedLink
                eventName="calculator_hub_click"
                eventParams={{ source: "mobile_header_group" }}
                href="/ap-score-calculators/"
                onClick={closeMenu}
              >
                AP Score Calculators Hub
              </TrackedLink>
              {mobileLiveCalculatorLinks.map((calculator) => (
                <Link
                  href={calculator.href}
                  key={calculator.href}
                  onClick={closeMenu}
                >
                  {calculator.navTitle ?? calculator.shortTitle}
                </Link>
              ))}
              <details className="mobile-calculator-group">
                <summary>Coming Soon</summary>
                <div className="mobile-calculator-links">
                  {comingSoonLinks.map((calculator) => (
                    <span className="mobile-soon-item" key={calculator.href}>
                      <span>{calculator.navTitle ?? calculator.shortTitle}</span>
                      <span className="nav-soon-badge">Soon</span>
                    </span>
                  ))}
                </div>
              </details>
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

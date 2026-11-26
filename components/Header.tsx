"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SubjectBrowser from "./SubjectBrowser";
import TrackedLink from "./TrackedLink";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function outside(event: Event) {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("focusin", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("focusin", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return <header className="site-header atlas-header">
    <nav ref={nav} className="container atlas-nav" aria-label="Main navigation"
      onClick={event => { if (event.target instanceof Element && event.target.closest("a")) setOpen(false); }}>
      <Link href="/" className="logo"><Image alt="AP Score Tools" width={433} height={144} priority
        className="logo-horizontal" src="/logo-ap-score-calculator-horizontal.png" /></Link>
      <div className="atlas-actions">
        <button ref={trigger} aria-expanded={open} aria-controls="subjects-menu" onClick={() => setOpen(!open)}>
          <span className="wide-label">Calculators</span><span className="small-label">Menu</span>
          <span aria-hidden="true" className="menu-chevron" />
        </button>
        <Link href="/guides/">Score guides</Link><Link href="/ap-score-distributions/">Distributions</Link><Link href="/about/">About</Link>
      </div>
      {open && <div id="subjects-menu" className="atlas-popover">
        <div className="atlas-popover-top"><strong>AP score calculators</strong>
          <TrackedLink href="/ap-score-calculators/" eventName="calculator_hub_click" eventParams={{ source: "header_dropdown" }}>Full directory →</TrackedLink></div>
        <div className="mobile-shortcuts"><Link href="/guides/">Guides</Link><Link href="/ap-score-distributions/">Distributions</Link><Link href="/about/">About</Link></div>
        <SubjectBrowser compact />
      </div>}
    </nav>
  </header>;
}

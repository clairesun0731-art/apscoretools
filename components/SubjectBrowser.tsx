"use client";

import Link from "next/link";
import { useState } from "react";
import { calculatorCategoryOrder, liveApCalculators, type CalculatorCategory } from "@/lib/apCalculatorDirectory";

const categories = calculatorCategoryOrder.filter(category => liveApCalculators.some(item => item.category === category));
const marks: Record<CalculatorCategory, string> = {
  Science: "Δ", "Math & Computer Science": "ƒ", "History & Social Science": "§", English: "Aa",
  Arts: "♪", Capstone: "◇", "World Languages": "文",
};

function normalize(text: string) {
  return text.toLowerCase().replaceAll("&", "and").replace(/[^a-z0-9]/g, "");
}

export default function SubjectBrowser({ compact = false }: { compact?: boolean }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const matches = liveApCalculators.filter(item => {
    const names = [item.title, item.navTitle, ...(item.aliases ?? [])];
    return (category === "All" || item.category === category) &&
      names.some(name => name && normalize(name).includes(normalize(query)));
  });

  return <div className={compact ? "subject-browser compact-browser" : "subject-browser"}>
    <div className="subject-controls">
      {!compact && <div role="group" aria-label="Filter by subject area" className="subject-filters">
        {["All", ...categories].map(name => <button type="button" key={name}
          aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}
      </div>}
      <label className="subject-search">
        <span aria-hidden="true" className="magnifier" />
        <input type="search" aria-label="Search AP subjects" placeholder="Search AP subjects" value={query}
          onChange={event => setQuery(event.target.value)} />
      </label>
    </div>
    <p className="subject-count" aria-live="polite">{matches.length} {matches.length === 1 ? "calculator" : "calculators"}</p>
    <div className="subject-groups">
      {categories.map(group => {
        const items = matches.filter(item => item.category === group);
        if (!items.length) return null;
        return <section className="subject-group" data-area={group} key={group}>
          <h3><span aria-hidden="true" className="subject-mark">{marks[group]}</span>{group}</h3>
          <div className="subject-links">{items.map(item => <Link key={item.href} href={item.href} aria-label={item.title}>
            <span>{item.navTitle ?? item.shortTitle}</span><span aria-hidden="true" className="subject-arrow">↗</span>
          </Link>)}</div>
        </section>;
      })}
    </div>
    {matches.length === 0 && <p>No matching subjects. <button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button></p>}
  </div>;
}

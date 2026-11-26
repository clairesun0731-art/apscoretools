"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/gtag";
import {
  apScoreDistributionCategories,
  type APScoreDistribution,
  type APScoreDistributionCategory,
} from "@/lib/apScoreDistributions";

type SortOption =
  | "subject"
  | "highest-5-rate"
  | "highest-pass-rate"
  | "lowest-pass-rate";

const sortOptions: { label: string; value: SortOption }[] = [
  { label: "Subject", value: "subject" },
  { label: "Highest 5 Rate", value: "highest-5-rate" },
  { label: "Highest 3+ Rate", value: "highest-pass-rate" },
  { label: "Lowest 3+ Rate", value: "lowest-pass-rate" },
];

type ApScoreDistributionsTableProps = {
  distributions: APScoreDistribution[];
};

export default function ApScoreDistributionsTable({
  distributions,
}: ApScoreDistributionsTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<APScoreDistributionCategory>("All");
  const [sortOption, setSortOption] = useState<SortOption>("subject");
  const hasTrackedSearchRef = useRef(false);

  const filteredDistributions = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return distributions
      .filter((distribution) => {
        const matchesSearch =
          normalizedSearch.length === 0 ||
          distribution.subject.toLowerCase().includes(normalizedSearch);
        const matchesCategory =
          selectedCategory === "All" || distribution.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((first, second) => {
        if (sortOption === "highest-5-rate") {
          return second.score5 - first.score5 || first.subject.localeCompare(second.subject);
        }

        if (sortOption === "highest-pass-rate") {
          return (
            second.passRate - first.passRate ||
            first.subject.localeCompare(second.subject)
          );
        }

        if (sortOption === "lowest-pass-rate") {
          return (
            first.passRate - second.passRate ||
            first.subject.localeCompare(second.subject)
          );
        }

        return first.subject.localeCompare(second.subject);
      });
  }, [distributions, searchQuery, selectedCategory, sortOption]);

  return (
    <div className="distribution-tool-card card">
      <div className="distribution-controls">
        <div className="distribution-search-field">
          <label htmlFor="ap-distribution-search">Search AP subject</label>
          <input
            id="ap-distribution-search"
            onBlur={() => {
              if (searchQuery.trim().length > 0 && !hasTrackedSearchRef.current) {
                trackEvent("score_distribution_subject_search", {
                  search_term: searchQuery.trim(),
                });
                hasTrackedSearchRef.current = true;
              }
            }}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              if (event.target.value.trim().length === 0) {
                hasTrackedSearchRef.current = false;
              }
            }}
            placeholder="Search AP subject..."
            type="search"
            value={searchQuery}
          />
        </div>

        <div className="distribution-sort-field">
          <label htmlFor="ap-distribution-sort">Sort by</label>
          <select
            id="ap-distribution-sort"
            onChange={(event) => setSortOption(event.target.value as SortOption)}
            value={sortOption}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="distribution-filter-group" aria-label="Filter AP exams by category">
        {apScoreDistributionCategories.map((category) => (
          <button
            aria-pressed={selectedCategory === category}
            className={selectedCategory === category ? "tab active" : "tab"}
            key={category}
            onClick={() => setSelectedCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="distribution-table-meta" aria-live="polite">
        Showing {filteredDistributions.length} of {distributions.length} AP exams
      </div>

      {filteredDistributions.length > 0 ? (
        <div className="table-wrap distribution-table-wrap">
          <table className="distribution-table">
            <caption className="sr-only">
              2026 AP score distributions by subject, including 5, 4, 3, 2, 1,
              and 3+ rates.
            </caption>
            <thead>
              <tr>
                <th className="distribution-subject-cell" scope="col">
                  AP Exam
                </th>
                <th scope="col">5</th>
                <th scope="col">4</th>
                <th scope="col">3</th>
                <th scope="col">2</th>
                <th scope="col">1</th>
                <th className="distribution-pass-cell" scope="col">
                  3+
                </th>
                <th scope="col">Calculator</th>
              </tr>
            </thead>
            <tbody>
              {filteredDistributions.map((distribution) => (
                <tr key={distribution.subject}>
                  <th className="distribution-subject-cell" scope="row">
                    <span>{distribution.subject}</span>
                    <small>{distribution.category}</small>
                  </th>
                  <td>{distribution.score5}%</td>
                  <td>{distribution.score4}%</td>
                  <td>{distribution.score3}%</td>
                  <td>{distribution.score2}%</td>
                  <td>{distribution.score1}%</td>
                  <td className="distribution-pass-cell">
                    <strong>{distribution.passRate}%</strong>
                  </td>
                  <td>
                    {distribution.calculatorUrl ? (
                      <Link
                        className="distribution-calculator-link"
                        href={distribution.calculatorUrl}
                        aria-label={`Open the ${distribution.subject} score calculator`}
                        onClick={() =>
                          trackEvent("distribution_calculator_click", {
                            subject: distribution.subject,
                            calculator_url: distribution.calculatorUrl,
                          })
                        }
                      >
                        Calculator →
                      </Link>
                    ) : (
                      <span className="distribution-empty-cell">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="distribution-empty-state">
          <h3>No AP subjects found</h3>
          <p>
            Try a broader search, choose All categories, or search by a shorter
            subject name like chem, calc, or history.
          </p>
        </div>
      )}
    </div>
  );
}

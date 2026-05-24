"use client";

import { useState } from "react";
import ApesCalculator from "@/app/ap-environmental-science-score-calculator/ApesCalculator";
import APChemCalculator from "@/components/APChemCalculator";
import { trackEvent } from "@/lib/gtag";

type LiveCalculator = "apes" | "ap_chemistry";

const calculators: Array<{
  id: LiveCalculator;
  label: string;
  trackingName: "apes_score_calculator" | "ap_chemistry_score_calculator";
}> = [
  {
    id: "apes",
    label: "AP Environmental Science",
    trackingName: "apes_score_calculator",
  },
  {
    id: "ap_chemistry",
    label: "AP Chemistry",
    trackingName: "ap_chemistry_score_calculator",
  },
];

export default function HomeCalculatorSwitcher() {
  const [selectedCalculator, setSelectedCalculator] =
    useState<LiveCalculator>("apes");

  function handleSwitch(calculator: (typeof calculators)[number]) {
    setSelectedCalculator(calculator.id);
    trackEvent("homepage_calculator_switch", {
      selected_calculator: calculator.trackingName,
      source: "homepage",
    });
  }

  return (
    <div className="home-calculator-switcher">
      <div className="switcher-header">
        <span className="switcher-label">Choose a live calculator</span>
        <div
          aria-label="Live calculators"
          className="calculator-tabs"
          role="tablist"
        >
          {calculators.map((calculator) => (
            <button
              aria-selected={selectedCalculator === calculator.id}
              className={
                selectedCalculator === calculator.id ? "tab active" : "tab"
              }
              key={calculator.id}
              onClick={() => handleSwitch(calculator)}
              role="tab"
              type="button"
            >
              {calculator.label}
            </button>
          ))}
        </div>
      </div>

      {selectedCalculator === "apes" ? (
        <ApesCalculator mode="compact" />
      ) : (
        <APChemCalculator mode="compact" />
      )}
    </div>
  );
}

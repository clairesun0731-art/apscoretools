"use client";

import { useMemo, useRef, useState } from "react";
import {
  calculateScoreResult,
  clampScore,
  createDefaultInputValues,
  ensureSubjectInputValues,
  scoreCalculatorConfigs,
  type CalculatorField,
  type CalculatorSubject,
  type ScoreCalculatorConfig,
} from "@/lib/scoreCalculatorConfigs";
import { trackEvent } from "@/lib/gtag";

const calculators: Array<{
  id: CalculatorSubject;
  label: string;
}> = [
  {
    id: "apes",
    label: "AP Environmental Science",
  },
  {
    id: "ap_chemistry",
    label: "AP Chemistry",
  },
];

function formatScore(value: number, max: number) {
  return Math.min(value, max).toFixed(1);
}

function ScoreField({
  field,
  inputId,
  onChange,
  value,
}: {
  field: CalculatorField;
  inputId: string;
  onChange: (value: number) => void;
  value: number;
}) {
  return (
    <div className="field">
      <label htmlFor={inputId}>{field.label}</label>
      <div className="input-row">
        <input
          id={inputId}
          inputMode="numeric"
          max={field.max}
          min={field.min}
          onChange={(event) =>
            onChange(clampScore(event.target.valueAsNumber, field.min, field.max))
          }
          type="number"
          value={value}
        />
        <span className="raw-score">{value}</span>
      </div>
      <span className="helper">{field.helper}</span>
    </div>
  );
}

export default function HomeCalculatorSwitcher() {
  const [activeSubject, setActiveSubject] = useState<CalculatorSubject>("apes");
  const activeConfig = scoreCalculatorConfigs[activeSubject];
  const [inputValues, setInputValues] = useState<Record<string, number>>(() =>
    createDefaultInputValues(activeConfig),
  );
  const hasStartedRef = useRef(false);
  const safeInputValues = useMemo(
    () => ensureSubjectInputValues(activeConfig, inputValues),
    [activeConfig, inputValues],
  );
  const result = useMemo(
    () => calculateScoreResult(activeConfig, safeInputValues),
    [activeConfig, safeInputValues],
  );

  function handleSwitch(subject: CalculatorSubject) {
    if (subject === activeSubject) {
      return;
    }

    const nextConfig = scoreCalculatorConfigs[subject];

    hasStartedRef.current = false;
    setInputValues(createDefaultInputValues(nextConfig));
    setActiveSubject(subject);
    trackEvent("homepage_calculator_switch", {
      selected_calculator: nextConfig.trackingName,
      source: "homepage",
    });
  }

  function handleInputChange(
    config: ScoreCalculatorConfig,
    field: CalculatorField,
    nextValue: number,
  ) {
    setInputValues((currentValues) => ({
      ...ensureSubjectInputValues(config, currentValues),
      [field.id]: nextValue,
    }));

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("calculator_start", {
        calculator_name: config.trackingName,
        page_type: "homepage",
      });
    }

    trackEvent("calculator_input_change", {
      calculator_name: config.trackingName,
      input_field: field.id,
      page_type: "homepage",
    });
  }

  return (
    <div className="home-calculator-switcher">
      <div className="switcher-header">
        <span className="switcher-label">Try a featured live calculator</span>
        <div
          aria-label="Live calculators"
          className="calculator-tabs"
          role="tablist"
        >
          {calculators.map((calculator) => (
            <button
              aria-selected={activeSubject === calculator.id}
              className={activeSubject === calculator.id ? "tab active" : "tab"}
              key={calculator.id}
              onClick={() => handleSwitch(calculator.id)}
              role="tab"
              type="button"
            >
              {calculator.label}
            </button>
          ))}
        </div>
      </div>

      <section
        aria-label={activeConfig.ariaLabel}
        className="calculator-card calculator-card-compact"
        key={activeConfig.id}
      >
        <div className="calculator-card-header">
          <div>
            <span className="kicker">Live calculator</span>
            <h2>{activeConfig.heading}</h2>
          </div>
          <span className="score-chip">{activeConfig.scoreChip}</span>
        </div>

        <div className="calculator-body">
          <form
            className="input-card home-dynamic-input-card"
            onSubmit={(event) => event.preventDefault()}
          >
            {activeConfig.fields.map((field) => (
              <ScoreField
                field={field}
                inputId={`homepage-${activeConfig.id}-${field.id}`}
                key={field.id}
                onChange={(value) =>
                  handleInputChange(activeConfig, field, value)
                }
                value={safeInputValues[field.id] ?? field.min}
              />
            ))}
          </form>

          <aside aria-live="polite" className="result-card">
            <div className="result-top">
              <p>Estimated AP score</p>
              <strong className="score-number">{result.score}</strong>
            </div>
            <div className="result-details">
              <div className="metric">
                <span>MCQ Scaled Score</span>
                <strong>
                  {formatScore(result.mcqScaled, activeConfig.mcqScaledMax)} /{" "}
                  {activeConfig.mcqScaledMax}
                </strong>
              </div>
              <div className="metric">
                <span>FRQ Scaled Score</span>
                <strong>
                  {formatScore(result.frqScaled, activeConfig.frqScaledMax)} /{" "}
                  {activeConfig.frqScaledMax}
                </strong>
              </div>
              <div className="metric">
                <span>FRQ Raw Total</span>
                <strong>
                  {result.frqRawTotal} / {activeConfig.frqRawMax}
                </strong>
              </div>
              <div className="metric">
                <span>Composite Score</span>
                <strong>
                  {formatScore(result.composite, activeConfig.compositeMax)} /{" "}
                  {activeConfig.compositeMax}
                </strong>
              </div>
              <div className="metric">
                <span>Score Band</span>
                <strong>{result.scoreBandLabel}</strong>
              </div>
              <div className="metric">
                <span>Points to next band</span>
                <strong>{result.pointsToNextBand}</strong>
              </div>
              <p className="feedback compact-feedback">
                Unofficial estimate based on current inputs.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

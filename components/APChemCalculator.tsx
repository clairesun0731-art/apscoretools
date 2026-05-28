"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { getScoreMessage } from "@/lib/scoreMessages";

type ScoreBand = 1 | 2 | 3 | 4 | 5;

type ScoreFieldProps = {
  helper: string;
  id: string;
  label: string;
  max: number;
  min: number;
  onChange: (value: number) => void;
  step?: number;
  value: number;
};

type APChemCalculatorProps = {
  mode?: "compact" | "full";
};

type InputField =
  | "mcq"
  | "frq_total"
  | "long_frq_1"
  | "long_frq_2"
  | "long_frq_3"
  | "short_frq_4"
  | "short_frq_5"
  | "short_frq_6"
  | "short_frq_7";

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

function getPredictedAPScore(composite: number): ScoreBand {
  if (composite >= 75) return 5;
  if (composite >= 60) return 4;
  if (composite >= 45) return 3;
  if (composite >= 30) return 2;
  return 1;
}

function formatScore(value: number, max: number) {
  return Math.min(value, max).toFixed(1);
}

function formatComposite(value: number) {
  return Math.round(value).toString();
}

function ScoreField({
  helper,
  id,
  label,
  max,
  min,
  onChange,
  step = 1,
  value,
}: ScoreFieldProps) {
  const decrease = () => onChange(clamp(value - step, min, max));
  const increase = () => onChange(clamp(value + step, min, max));

  return (
    <div className="field chem-score-field">
      <div className="chem-field-heading">
        <label htmlFor={id}>{label}</label>
        <span className="raw-score">
          {value} / {max}
        </span>
      </div>
      <div className="chem-slider-row">
        <button
          aria-label={`Decrease ${label}`}
          className="stepper-button"
          onClick={decrease}
          type="button"
        >
          -
        </button>
        <input
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={value}
          className="score-slider"
          id={id}
          max={max}
          min={min}
          onChange={(event) =>
            onChange(clamp(event.target.valueAsNumber, min, max))
          }
          step={step}
          type="range"
          value={value}
        />
        <button
          aria-label={`Increase ${label}`}
          className="stepper-button"
          onClick={increase}
          type="button"
        >
          +
        </button>
      </div>
      <span className="helper">{helper}</span>
    </div>
  );
}

export default function APChemCalculator({
  mode = "full",
}: APChemCalculatorProps) {
  const [mcqRaw, setMcqRaw] = useState(42);
  const [long1, setLong1] = useState(7);
  const [long2, setLong2] = useState(7);
  const [long3, setLong3] = useState(7);
  const [short4, setShort4] = useState(3);
  const [short5, setShort5] = useState(3);
  const [short6, setShort6] = useState(3);
  const [short7, setShort7] = useState(3);
  const [frqTotalCompact, setFrqTotalCompact] = useState(33);
  const isCompact = mode === "compact";
  const pageType = isCompact ? "homepage" : "tool_page";
  const hasStartedRef = useRef(false);
  const hasInteractedRef = useRef(false);

  const result = useMemo(() => {
    const mcqWeighted = Math.min((mcqRaw / 60) * 50, 50);
    const frqRawTotal = isCompact
      ? frqTotalCompact
      : long1 + long2 + long3 + short4 + short5 + short6 + short7;
    const frqWeighted = Math.min((frqRawTotal / 46) * 50, 50);
    const composite = Math.round(Math.min(mcqWeighted + frqWeighted, 100));
    const score = getPredictedAPScore(composite);

    return {
      composite,
      frqRawTotal,
      frqWeighted,
      mcqWeighted,
      score,
      scoreMessage: getScoreMessage(score),
    };
  }, [
    frqTotalCompact,
    isCompact,
    long1,
    long2,
    long3,
    mcqRaw,
    short4,
    short5,
    short6,
    short7,
  ]);

  function handleInputChange(
    inputField: InputField,
    nextValue: number,
    setValue: (value: number) => void,
  ) {
    setValue(nextValue);
    hasInteractedRef.current = true;

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("calculator_start", {
        calculator_name: "ap_chemistry_score_calculator",
        page_type: pageType,
      });
    }

    trackEvent("calculator_input_change", {
      calculator_name: "ap_chemistry_score_calculator",
      input_field: inputField,
      page_type: pageType,
    });
  }

  useEffect(() => {
    if (!hasInteractedRef.current) return;

    const timeoutId = window.setTimeout(() => {
      trackEvent("calculator_result_view", {
        calculator_name: "ap_chemistry_score_calculator",
        composite_score: Number(result.composite.toFixed(1)),
        page_type: pageType,
        predicted_score: result.score,
      });
    }, 800);

    return () => window.clearTimeout(timeoutId);
  }, [pageType, result.composite, result.score]);

  return (
    <section
      aria-label="AP Chemistry score calculator"
      className={`calculator-card ${isCompact ? "calculator-card-compact" : ""}`}
    >
      <div className="calculator-card-header">
        <div>
          <span className="kicker">Live calculator</span>
          <h2>AP Chemistry Score Calculator</h2>
        </div>
        {!isCompact && <span className="score-chip">100-point composite</span>}
      </div>

      <div className="calculator-body chemistry-calculator-body">
        <form
          className="input-card chemistry-input-card"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="chem-input-section">
            <div className="chem-input-section-heading">
              <span>Section I</span>
              <h3>Multiple Choice</h3>
            </div>
            <ScoreField
              helper="Raw score out of 60 multiple-choice questions"
              id="chemistry-mcq"
              label="Multiple Choice"
              max={60}
              min={0}
              onChange={(value) => handleInputChange("mcq", value, setMcqRaw)}
              value={mcqRaw}
            />
          </div>
          {isCompact ? (
            <div className="chem-input-section">
              <div className="chem-input-section-heading">
                <span>Section II</span>
                <h3>Free Response</h3>
              </div>
              <ScoreField
                helper="Total FRQ raw score out of 46. Use the full calculator page to enter each FRQ separately."
                id="chemistry-frq-total"
                label="Total FRQ Score"
                max={46}
                min={0}
                onChange={(value) =>
                  handleInputChange("frq_total", value, setFrqTotalCompact)
                }
                value={frqTotalCompact}
              />
            </div>
          ) : (
            <div className="chem-input-section">
              <div className="chem-input-section-heading">
                <span>Section II</span>
                <h3>Free Response</h3>
              </div>
              <ScoreField
                helper="Raw score out of 10"
                id="chemistry-long-frq-1"
                label="Question 1 - Long Answer"
                max={10}
                min={0}
                onChange={(value) =>
                  handleInputChange("long_frq_1", value, setLong1)
                }
                value={long1}
              />
              <ScoreField
                helper="Raw score out of 10"
                id="chemistry-long-frq-2"
                label="Question 2 - Long Answer"
                max={10}
                min={0}
                onChange={(value) =>
                  handleInputChange("long_frq_2", value, setLong2)
                }
                value={long2}
              />
              <ScoreField
                helper="Raw score out of 10"
                id="chemistry-long-frq-3"
                label="Question 3 - Long Answer"
                max={10}
                min={0}
                onChange={(value) =>
                  handleInputChange("long_frq_3", value, setLong3)
                }
                value={long3}
              />
              <ScoreField
                helper="Raw score out of 4"
                id="chemistry-short-frq-4"
                label="Question 4 - Short Answer"
                max={4}
                min={0}
                onChange={(value) =>
                  handleInputChange("short_frq_4", value, setShort4)
                }
                value={short4}
              />
              <ScoreField
                helper="Raw score out of 4"
                id="chemistry-short-frq-5"
                label="Question 5 - Short Answer"
                max={4}
                min={0}
                onChange={(value) =>
                  handleInputChange("short_frq_5", value, setShort5)
                }
                value={short5}
              />
              <ScoreField
                helper="Raw score out of 4"
                id="chemistry-short-frq-6"
                label="Question 6 - Short Answer"
                max={4}
                min={0}
                onChange={(value) =>
                  handleInputChange("short_frq_6", value, setShort6)
                }
                value={short6}
              />
              <ScoreField
                helper="Raw score out of 4"
                id="chemistry-short-frq-7"
                label="Question 7 - Short Answer"
                max={4}
                min={0}
                onChange={(value) =>
                  handleInputChange("short_frq_7", value, setShort7)
                }
                value={short7}
              />
            </div>
          )}
        </form>

        <aside aria-live="polite" className="chem-result-card">
          <div className="chem-result-header">
            <span className="kicker">Results</span>
            <span className="score-chip">100-point composite</span>
          </div>

          <div className="chem-score-panel">
            <p>Estimated AP Score</p>
            <div className="chem-score-line">
              <strong>{result.score}</strong>
              <span>/5</span>
            </div>
            <div className="chem-result-message">
              <strong>{result.scoreMessage.title}</strong>
              <p>{result.scoreMessage.body}</p>
            </div>
          </div>

          <div className="chem-breakdown-card">
            <h3>Score Breakdown</h3>
            <div className="chem-breakdown-row">
              <span>MCQ Weighted Score</span>
              <strong>{formatScore(result.mcqWeighted, 50)} / 50</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>FRQ Raw Score</span>
              <strong>{result.frqRawTotal} / 46</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>FRQ Weighted Score</span>
              <strong>{formatScore(result.frqWeighted, 50)} / 50</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>Composite Score</span>
              <strong>{formatComposite(result.composite)} / 100</strong>
            </div>
          </div>

          <div className="chem-result-actions">
            <a className="button secondary" href="/ap-score-calculators/">
              View All AP Score Calculators
            </a>
            {isCompact && (
              <a
                className="button"
                href="/ap-chemistry-score-calculator/"
                onClick={() =>
                  trackEvent("view_detailed_breakdown", {
                    calculator_name: "ap_chemistry_score_calculator",
                    source: "homepage_compact_calculator",
                  })
                }
              >
                Try Another Calculator
              </a>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}

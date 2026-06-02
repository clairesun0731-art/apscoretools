"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { getScoreMessage } from "@/lib/scoreMessages";

type ScoreBand = 1 | 2 | 3 | 4 | 5;

type InputField = "mcq" | "long_frq" | "short_frq_2" | "short_frq_3";

type ScoreFieldProps = {
  helper: string;
  id: string;
  label: string;
  max: number;
  min: number;
  onChange: (value: number) => void;
  value: number;
};

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

function getPredictedAPScore(composite: number): ScoreBand {
  if (composite >= 75) return 5;
  if (composite >= 62) return 4;
  if (composite >= 50) return 3;
  if (composite >= 38) return 2;
  return 1;
}

function formatWeightedScore(value: number) {
  return value.toFixed(1);
}

function ScoreField({
  helper,
  id,
  label,
  max,
  min,
  onChange,
  value,
}: ScoreFieldProps) {
  const decrease = () => onChange(clamp(value - 1, min, max));
  const increase = () => onChange(clamp(value + 1, min, max));

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
          step={1}
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

export default function ApMacroeconomicsCalculator() {
  const [mcqRaw, setMcqRaw] = useState(30);
  const [longFrq, setLongFrq] = useState(6);
  const [shortFrq2, setShortFrq2] = useState(3);
  const [shortFrq3, setShortFrq3] = useState(3);
  const hasStartedRef = useRef(false);
  const hasInteractedRef = useRef(false);

  const result = useMemo(() => {
    const mcqWeighted = (mcqRaw / 60) * 66;
    const frqRaw = longFrq + shortFrq2 + shortFrq3;
    const frqWeighted = (frqRaw / 20) * 34;
    const composite = Math.round(mcqWeighted + frqWeighted);
    const score = getPredictedAPScore(composite);

    return {
      composite,
      frqRaw,
      frqWeighted,
      mcqWeighted,
      score,
      scoreMessage: getScoreMessage(score),
    };
  }, [longFrq, mcqRaw, shortFrq2, shortFrq3]);

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
        calculator_name: "ap_macroeconomics_score_calculator",
        page_type: "tool_page",
      });
    }

    trackEvent("calculator_input_change", {
      calculator_name: "ap_macroeconomics_score_calculator",
      input_field: inputField,
      page_type: "tool_page",
    });
  }

  useEffect(() => {
    if (!hasInteractedRef.current) return;

    const timeoutId = window.setTimeout(() => {
      trackEvent("calculator_result_view", {
        calculator_name: "ap_macroeconomics_score_calculator",
        composite_score: result.composite,
        page_type: "tool_page",
        predicted_score: result.score,
      });
    }, 800);

    return () => window.clearTimeout(timeoutId);
  }, [result.composite, result.score]);

  return (
    <section
      aria-label="AP Macroeconomics score calculator"
      className="calculator-card"
    >
      <div className="chem-calculator-header">
        <div className="chem-calculator-meta">
          <span>Live calculator</span>
          <span>100-point composite</span>
          <span>MCQ + FRQ breakdown</span>
        </div>

        <h2>
          <span className="block sm:inline">Enter your AP</span>{" "}
          <span className="block sm:inline">Macroeconomics section scores</span>
        </h2>

        <p>
          Use your MCQ score, one long FRQ score, and two short FRQ scores to
          estimate your composite score and AP score range.
        </p>

        <p className="calculator-helper-copy">
          Score ranges are approximate and may vary from the official AP score
          conversion.
        </p>
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
              id="ap-macro-mcq"
              label="Multiple Choice"
              max={60}
              min={0}
              onChange={(value) => handleInputChange("mcq", value, setMcqRaw)}
              value={mcqRaw}
            />
          </div>

          <div className="chem-input-section">
            <div className="chem-input-section-heading">
              <span>Section II</span>
              <h3>Free Response</h3>
            </div>
            <ScoreField
              helper="Raw score out of 10"
              id="ap-macro-long-frq"
              label="Question 1 - Long Free Response"
              max={10}
              min={0}
              onChange={(value) =>
                handleInputChange("long_frq", value, setLongFrq)
              }
              value={longFrq}
            />
            <ScoreField
              helper="Raw score out of 5"
              id="ap-macro-short-frq-2"
              label="Question 2 - Short Free Response"
              max={5}
              min={0}
              onChange={(value) =>
                handleInputChange("short_frq_2", value, setShortFrq2)
              }
              value={shortFrq2}
            />
            <ScoreField
              helper="Raw score out of 5"
              id="ap-macro-short-frq-3"
              label="Question 3 - Short Free Response"
              max={5}
              min={0}
              onChange={(value) =>
                handleInputChange("short_frq_3", value, setShortFrq3)
              }
              value={shortFrq3}
            />
          </div>
        </form>

        <aside
          aria-live="polite"
          className="chem-result-card self-start lg:sticky lg:top-24"
        >
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
              <strong>{formatWeightedScore(result.mcqWeighted)} / 66</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>FRQ Raw Score</span>
              <strong>{result.frqRaw} / 20</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>FRQ Weighted Score</span>
              <strong>{formatWeightedScore(result.frqWeighted)} / 34</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>Composite Score</span>
              <strong>{result.composite} / 100</strong>
            </div>
          </div>

          <div className="chem-result-actions">
            <Link className="button secondary" href="/ap-score-calculators/">
              View All AP Score Calculators
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

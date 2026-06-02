"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { getScoreMessage } from "@/lib/scoreMessages";

type ScoreBand = 1 | 2 | 3 | 4 | 5;

type InputField = "mcq" | "saq_1" | "saq_2" | "saq_3_or_4" | "dbq" | "leq";

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

export default function ApWorldHistoryCalculator() {
  const [mcqRaw, setMcqRaw] = useState(28);
  const [saq1, setSaq1] = useState(2);
  const [saq2, setSaq2] = useState(2);
  const [saq3, setSaq3] = useState(1);
  const [dbqRaw, setDbqRaw] = useState(4);
  const [leqRaw, setLeqRaw] = useState(3);
  const hasStartedRef = useRef(false);
  const hasInteractedRef = useRef(false);

  const result = useMemo(() => {
    const mcqWeighted = (mcqRaw / 55) * 40;
    const saqRaw = saq1 + saq2 + saq3;
    const saqWeighted = (saqRaw / 9) * 20;
    const dbqWeighted = (dbqRaw / 7) * 25;
    const leqWeighted = (leqRaw / 6) * 15;
    const composite = Math.round(
      mcqWeighted + saqWeighted + dbqWeighted + leqWeighted,
    );
    const score = getPredictedAPScore(composite);

    return {
      composite,
      dbqWeighted,
      leqWeighted,
      mcqWeighted,
      saqRaw,
      saqWeighted,
      score,
      scoreMessage: getScoreMessage(score),
    };
  }, [dbqRaw, leqRaw, mcqRaw, saq1, saq2, saq3]);

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
        calculator_name: "ap_world_history_score_calculator",
        page_type: "tool_page",
      });
    }

    trackEvent("calculator_input_change", {
      calculator_name: "ap_world_history_score_calculator",
      input_field: inputField,
      page_type: "tool_page",
    });
  }

  useEffect(() => {
    if (!hasInteractedRef.current) return;

    const timeoutId = window.setTimeout(() => {
      trackEvent("calculator_result_view", {
        calculator_name: "ap_world_history_score_calculator",
        composite_score: result.composite,
        page_type: "tool_page",
        predicted_score: result.score,
      });
    }, 800);

    return () => window.clearTimeout(timeoutId);
  }, [result.composite, result.score]);

  return (
    <section
      aria-label="AP World History score calculator"
      className="calculator-card"
    >
      <div className="chem-calculator-header">
        <div className="chem-calculator-meta">
          <span>Live calculator</span>
          <span>100-point composite</span>
          <span>MCQ + SAQ + DBQ + LEQ</span>
        </div>

        <h2>
          <span className="block sm:inline">Enter your AP</span>{" "}
          <span className="block sm:inline">World History section scores</span>
        </h2>

        <p>
          Use your multiple-choice, short-answer, DBQ, and LEQ scores to
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
              <span>Section I, Part A</span>
              <h3>Multiple Choice</h3>
            </div>
            <ScoreField
              helper="Raw score out of 55 multiple-choice questions"
              id="ap-world-mcq"
              label="Multiple Choice"
              max={55}
              min={0}
              onChange={(value) => handleInputChange("mcq", value, setMcqRaw)}
              value={mcqRaw}
            />
          </div>

          <div className="chem-input-section">
            <div className="chem-input-section-heading">
              <span>Section I, Part B</span>
              <h3>Short Answer</h3>
            </div>
            <ScoreField
              helper="Raw score out of 3"
              id="ap-world-saq-1"
              label="Short Answer Question 1"
              max={3}
              min={0}
              onChange={(value) => handleInputChange("saq_1", value, setSaq1)}
              value={saq1}
            />
            <ScoreField
              helper="Raw score out of 3"
              id="ap-world-saq-2"
              label="Short Answer Question 2"
              max={3}
              min={0}
              onChange={(value) => handleInputChange("saq_2", value, setSaq2)}
              value={saq2}
            />
            <ScoreField
              helper="Raw score out of 3"
              id="ap-world-saq-3-or-4"
              label="Short Answer Question 3 or 4"
              max={3}
              min={0}
              onChange={(value) =>
                handleInputChange("saq_3_or_4", value, setSaq3)
              }
              value={saq3}
            />
          </div>

          <div className="chem-input-section">
            <div className="chem-input-section-heading">
              <span>Section II, Part A</span>
              <h3>Document-Based Question</h3>
            </div>
            <ScoreField
              helper="Raw score out of 7"
              id="ap-world-dbq"
              label="Document-Based Question"
              max={7}
              min={0}
              onChange={(value) => handleInputChange("dbq", value, setDbqRaw)}
              value={dbqRaw}
            />
          </div>

          <div className="chem-input-section">
            <div className="chem-input-section-heading">
              <span>Section II, Part B</span>
              <h3>Long Essay Question</h3>
            </div>
            <ScoreField
              helper="Raw score out of 6"
              id="ap-world-leq"
              label="Long Essay Question"
              max={6}
              min={0}
              onChange={(value) => handleInputChange("leq", value, setLeqRaw)}
              value={leqRaw}
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
              <strong>{formatWeightedScore(result.mcqWeighted)} / 40</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>SAQ Raw Score</span>
              <strong>{result.saqRaw} / 9</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>SAQ Weighted Score</span>
              <strong>{formatWeightedScore(result.saqWeighted)} / 20</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>DBQ Weighted Score</span>
              <strong>{formatWeightedScore(result.dbqWeighted)} / 25</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>LEQ Weighted Score</span>
              <strong>{formatWeightedScore(result.leqWeighted)} / 15</strong>
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

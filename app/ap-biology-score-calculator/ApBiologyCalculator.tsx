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
  value: number;
};

type InputField =
  | "mcq"
  | "frq1"
  | "frq2"
  | "frq3"
  | "frq4"
  | "frq5"
  | "frq6";

const calculatorName = "ap_biology_score_calculator";
const subject = "ap_biology";

const scoreRangeByScore: Record<ScoreBand, string> = {
  1: "0-35",
  2: "36-53",
  3: "54-62",
  4: "63-77",
  5: "78-100",
};

const nextThresholdByScore: Record<Exclude<ScoreBand, 5>, number> = {
  1: 36,
  2: 54,
  3: 63,
  4: 78,
};

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

function getPredictedAPScore(composite: number): ScoreBand {
  if (composite >= 78) return 5;
  if (composite >= 63) return 4;
  if (composite >= 54) return 3;
  if (composite >= 36) return 2;
  return 1;
}

function formatScore(value: number, max: number) {
  return Math.min(value, max).toFixed(1);
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
  const updateValue = (nextValue: number) => onChange(clamp(nextValue, min, max));
  const decrease = () => updateValue(value - 1);
  const increase = () => updateValue(value + 1);

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
          onChange={(event) => updateValue(event.target.valueAsNumber)}
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

export default function ApBiologyCalculator() {
  const [mcqRaw, setMcqRaw] = useState(45);
  const [frq1, setFrq1] = useState(7);
  const [frq2, setFrq2] = useState(7);
  const [frq3, setFrq3] = useState(3);
  const [frq4, setFrq4] = useState(3);
  const [frq5, setFrq5] = useState(3);
  const [frq6, setFrq6] = useState(3);
  const hasStartedRef = useRef(false);
  const hasInteractedRef = useRef(false);

  const result = useMemo(() => {
    const frqRawTotal = frq1 + frq2 + frq3 + frq4 + frq5 + frq6;
    const mcqWeighted = Math.min((mcqRaw / 60) * 50, 50);
    const frqWeighted = Math.min((frqRawTotal / 34) * 50, 50);
    const composite = Math.min(mcqWeighted + frqWeighted, 100);
    const score = getPredictedAPScore(composite);
    const nextThreshold = score === 5 ? null : nextThresholdByScore[score];
    const pointsAway =
      nextThreshold === null ? 0 : Math.max(0, nextThreshold - composite);

    return {
      composite,
      frqRawTotal,
      frqWeighted,
      mcqWeighted,
      pointsToNextBand:
        score === 5
          ? "Top estimated band"
          : `${pointsAway.toFixed(1)} points to AP Score ${score + 1}`,
      score,
      scoreBand: `AP Score ${score} (${scoreRangeByScore[score]} composite)`,
      scoreMessage: getScoreMessage(score),
    };
  }, [frq1, frq2, frq3, frq4, frq5, frq6, mcqRaw]);

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
        calculator_name: calculatorName,
        page_type: "tool_page",
        subject,
      });
    }

    trackEvent("calculator_input_change", {
      calculator_name: calculatorName,
      input_field: inputField,
      page_type: "tool_page",
      subject,
    });
  }

  useEffect(() => {
    if (!hasInteractedRef.current) return;

    const timeoutId = window.setTimeout(() => {
      trackEvent("calculator_result_view", {
        calculator_name: calculatorName,
        composite_score: Number(result.composite.toFixed(1)),
        page_type: "tool_page",
        predicted_score: result.score,
        subject,
      });
    }, 800);

    return () => window.clearTimeout(timeoutId);
  }, [result.composite, result.score]);

  return (
    <section
      aria-label="AP Biology score calculator"
      className="calculator-card"
    >
      <div className="chem-calculator-header">
        <div className="chem-calculator-meta">
          <span>Live calculator</span>
          <span>100-point composite</span>
        </div>
        <h2>Enter your AP Biology section scores</h2>
        <p>
          Use your multiple-choice score and six free-response question scores
          to estimate your AP Biology composite score and AP score range.
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
              helper="MCQ correct answers out of 60"
              id="biology-mcq"
              label="MCQ correct answers"
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
              helper="Raw score out of 9"
              id="biology-frq-1"
              label="FRQ 1 Long Question"
              max={9}
              min={0}
              onChange={(value) => handleInputChange("frq1", value, setFrq1)}
              value={frq1}
            />
            <ScoreField
              helper="Raw score out of 9"
              id="biology-frq-2"
              label="FRQ 2 Long Question"
              max={9}
              min={0}
              onChange={(value) => handleInputChange("frq2", value, setFrq2)}
              value={frq2}
            />
            <ScoreField
              helper="Raw score out of 4"
              id="biology-frq-3"
              label="FRQ 3 Short Question"
              max={4}
              min={0}
              onChange={(value) => handleInputChange("frq3", value, setFrq3)}
              value={frq3}
            />
            <ScoreField
              helper="Raw score out of 4"
              id="biology-frq-4"
              label="FRQ 4 Short Question"
              max={4}
              min={0}
              onChange={(value) => handleInputChange("frq4", value, setFrq4)}
              value={frq4}
            />
            <ScoreField
              helper="Raw score out of 4"
              id="biology-frq-5"
              label="FRQ 5 Short Question"
              max={4}
              min={0}
              onChange={(value) => handleInputChange("frq5", value, setFrq5)}
              value={frq5}
            />
            <ScoreField
              helper="Raw score out of 4"
              id="biology-frq-6"
              label="FRQ 6 Short Question"
              max={4}
              min={0}
              onChange={(value) => handleInputChange("frq6", value, setFrq6)}
              value={frq6}
            />
          </div>
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
              <strong>{result.frqRawTotal} / 34</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>FRQ Weighted Score</span>
              <strong>{formatScore(result.frqWeighted, 50)} / 50</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>Composite Score</span>
              <strong>{formatScore(result.composite, 100)} / 100</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>Score Range</span>
              <strong>{result.scoreBand}</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>Next Band</span>
              <strong>{result.pointsToNextBand}</strong>
            </div>
          </div>

          <div className="chem-result-actions">
            <a className="button secondary" href="/ap-score-calculators/">
              View All AP Score Calculators
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

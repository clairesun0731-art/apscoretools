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
  | "mcq_part_a"
  | "mcq_part_b"
  | "frq1"
  | "frq2"
  | "frq3"
  | "frq4"
  | "frq5"
  | "frq6";

const calculatorName = "ap_calculus_ab_score_calculator";
const subject = "ap_calculus_ab";

const scoreRangeByScore: Record<ScoreBand, string> = {
  1: "0-34",
  2: "35-48",
  3: "49-61",
  4: "62-75",
  5: "76-108",
};

const nextThresholdByScore: Record<Exclude<ScoreBand, 5>, number> = {
  1: 35,
  2: 49,
  3: 62,
  4: 76,
};

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

function getPredictedAPScore(composite: number): ScoreBand {
  if (composite >= 76) return 5;
  if (composite >= 62) return 4;
  if (composite >= 49) return 3;
  if (composite >= 35) return 2;
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

export default function ApCalculusAbCalculator() {
  const [mcqPartA, setMcqPartA] = useState(22);
  const [mcqPartB, setMcqPartB] = useState(11);
  const [frq1, setFrq1] = useState(6);
  const [frq2, setFrq2] = useState(6);
  const [frq3, setFrq3] = useState(6);
  const [frq4, setFrq4] = useState(6);
  const [frq5, setFrq5] = useState(6);
  const [frq6, setFrq6] = useState(6);
  const hasStartedRef = useRef(false);
  const hasInteractedRef = useRef(false);

  const result = useMemo(() => {
    const mcqRawTotal = mcqPartA + mcqPartB;
    const mcqScaled = Math.min(mcqRawTotal * 1.2, 54);
    const frqRawTotal = frq1 + frq2 + frq3 + frq4 + frq5 + frq6;
    const composite = Math.min(mcqScaled + frqRawTotal, 108);
    const score = getPredictedAPScore(composite);
    const nextThreshold = score === 5 ? null : nextThresholdByScore[score];
    const pointsAway =
      nextThreshold === null ? 0 : Math.max(0, nextThreshold - composite);

    return {
      composite,
      frqRawTotal,
      mcqRawTotal,
      mcqScaled,
      pointsToNextBand:
        score === 5
          ? "Top estimated band"
          : `${pointsAway.toFixed(1)} points to AP Score ${score + 1}`,
      score,
      scoreBand: `AP Score ${score} (${scoreRangeByScore[score]} composite)`,
      scoreMessage: getScoreMessage(score),
    };
  }, [frq1, frq2, frq3, frq4, frq5, frq6, mcqPartA, mcqPartB]);

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
      aria-label="AP Calculus AB score calculator"
      className="calculator-card"
    >
      <div className="chem-calculator-header">
        <div className="chem-calculator-meta">
          <span>Live calculator</span>
          <span>108-point composite</span>
        </div>
        <h2>Enter your AP Calculus AB section scores</h2>
        <p>
          Use your no-calculator MCQ score, calculator MCQ score, and six FRQ
          scores to estimate your AP Calculus AB composite score and AP score
          range.
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
              helper="No-calculator questions correct out of 30"
              id="calc-ab-mcq-part-a"
              label="MCQ Part A No Calculator"
              max={30}
              min={0}
              onChange={(value) =>
                handleInputChange("mcq_part_a", value, setMcqPartA)
              }
              value={mcqPartA}
            />
            <ScoreField
              helper="Calculator-allowed questions correct out of 15"
              id="calc-ab-mcq-part-b"
              label="MCQ Part B Calculator"
              max={15}
              min={0}
              onChange={(value) =>
                handleInputChange("mcq_part_b", value, setMcqPartB)
              }
              value={mcqPartB}
            />
          </div>

          <div className="chem-input-section">
            <div className="chem-input-section-heading">
              <span>Section II</span>
              <h3>Free Response</h3>
            </div>
            <ScoreField
              helper="Raw score out of 9"
              id="calc-ab-frq-1"
              label="FRQ 1"
              max={9}
              min={0}
              onChange={(value) => handleInputChange("frq1", value, setFrq1)}
              value={frq1}
            />
            <ScoreField
              helper="Raw score out of 9"
              id="calc-ab-frq-2"
              label="FRQ 2"
              max={9}
              min={0}
              onChange={(value) => handleInputChange("frq2", value, setFrq2)}
              value={frq2}
            />
            <ScoreField
              helper="Raw score out of 9"
              id="calc-ab-frq-3"
              label="FRQ 3"
              max={9}
              min={0}
              onChange={(value) => handleInputChange("frq3", value, setFrq3)}
              value={frq3}
            />
            <ScoreField
              helper="Raw score out of 9"
              id="calc-ab-frq-4"
              label="FRQ 4"
              max={9}
              min={0}
              onChange={(value) => handleInputChange("frq4", value, setFrq4)}
              value={frq4}
            />
            <ScoreField
              helper="Raw score out of 9"
              id="calc-ab-frq-5"
              label="FRQ 5"
              max={9}
              min={0}
              onChange={(value) => handleInputChange("frq5", value, setFrq5)}
              value={frq5}
            />
            <ScoreField
              helper="Raw score out of 9"
              id="calc-ab-frq-6"
              label="FRQ 6"
              max={9}
              min={0}
              onChange={(value) => handleInputChange("frq6", value, setFrq6)}
              value={frq6}
            />
          </div>
        </form>

        <aside aria-live="polite" className="chem-result-card">
          <div className="chem-result-header">
            <span className="kicker">Results</span>
            <span className="score-chip">108-point composite</span>
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
              <span>MCQ Raw Score</span>
              <strong>{result.mcqRawTotal} / 45</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>MCQ Scaled Score</span>
              <strong>{formatScore(result.mcqScaled, 54)} / 54</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>FRQ Raw Score</span>
              <strong>{result.frqRawTotal} / 54</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>Composite Score</span>
              <strong>{formatScore(result.composite, 108)} / 108</strong>
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

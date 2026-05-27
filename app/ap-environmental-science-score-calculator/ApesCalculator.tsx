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

type ApesCalculatorProps = {
  mode?: "compact" | "full";
};

type InputField = "mcq" | "frq1" | "frq2" | "frq3";

const nextThresholdByScore: Record<Exclude<ScoreBand, 5>, number> = {
  1: 50,
  2: 68,
  3: 77,
  4: 96,
};

const scoreRangeByScore: Record<ScoreBand, string> = {
  1: "0-49",
  2: "50-67",
  3: "68-76",
  4: "77-95",
  5: "96-130",
};

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

function getPredictedAPScore(composite: number): ScoreBand {
  if (composite >= 96) return 5;
  if (composite >= 77) return 4;
  if (composite >= 68) return 3;
  if (composite >= 50) return 2;
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

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className="input-row">
        <input
          id={id}
          inputMode="numeric"
          max={max}
          min={min}
          onChange={(event) => updateValue(event.target.valueAsNumber)}
          type="number"
          value={value}
        />
        <span className="raw-score">{value}</span>
      </div>
      <input
        aria-label={`${label} slider`}
        className="score-slider"
        max={max}
        min={min}
        onChange={(event) => updateValue(event.target.valueAsNumber)}
        type="range"
        value={value}
      />
      <span className="helper">{helper}</span>
    </div>
  );
}

export default function ApesCalculator({ mode = "full" }: ApesCalculatorProps) {
  const [mcqRaw, setMcqRaw] = useState(60);
  const [frq1, setFrq1] = useState(8);
  const [frq2, setFrq2] = useState(8);
  const [frq3, setFrq3] = useState(8);
  const isCompact = mode === "compact";
  const pageType = isCompact ? "homepage" : "tool_page";
  const hasStartedRef = useRef(false);
  const hasInteractedRef = useRef(false);

  const result = useMemo(() => {
    const mcqScaled = Math.min((mcqRaw / 80) * 78, 78);
    const frqRawTotal = frq1 + frq2 + frq3;
    const frqScaled = Math.min((frqRawTotal / 30) * 52, 52);
    const composite = Math.min(mcqScaled + frqScaled, 130);
    const score = getPredictedAPScore(composite);
    const nextThreshold = score === 5 ? null : nextThresholdByScore[score];
    const nextScore = score === 5 ? null : ((score + 1) as ScoreBand);
    const pointsAway =
      nextThreshold === null ? 0 : Math.max(0, nextThreshold - composite);
    const pointsToNextBand =
      score === 5
        ? "Top estimated band"
        : `${pointsAway.toFixed(1)} points to AP Score ${nextScore}`;
    return {
      composite,
      frqRawTotal,
      frqScaled,
      mcqScaled,
      pointsToNextBand,
      score,
      scoreBand: `AP Score ${score} (${scoreRangeByScore[score]} composite)`,
      scoreMessage: getScoreMessage(score),
    };
  }, [frq1, frq2, frq3, mcqRaw]);

  useEffect(() => {
    trackEvent("apes_calculator_view", {
      calculator_name: "apes_score_calculator",
      page_type: pageType,
    });
  }, [pageType]);

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
        calculator_name: "apes_score_calculator",
        page_type: pageType,
      });
    }

    trackEvent("calculator_input_change", {
      calculator_name: "apes_score_calculator",
      input_field: inputField,
      page_type: pageType,
    });

    trackEvent("apes_calculator_input_change", {
      calculator_name: "apes_score_calculator",
      input_field: inputField,
      page_type: pageType,
    });
  }

  useEffect(() => {
    if (!hasInteractedRef.current) return;

    const timeoutId = window.setTimeout(() => {
      trackEvent("calculator_result_view", {
        calculator_name: "apes_score_calculator",
        predicted_score: result.score,
        composite_score: Number(result.composite.toFixed(1)),
        page_type: pageType,
      });

      trackEvent("apes_result_view", {
        calculator_name: "apes_score_calculator",
        predicted_score: result.score,
        composite_score: Number(result.composite.toFixed(1)),
        score_band: result.scoreBand,
        page_type: pageType,
      });
    }, 800);

    return () => window.clearTimeout(timeoutId);
  }, [pageType, result.composite, result.score, result.scoreBand]);

  return (
    <section
      className={`calculator-card ${isCompact ? "calculator-card-compact" : ""}`}
      aria-label="APES score calculator"
    >
      <div className="calculator-card-header">
        <div>
          <span className="kicker">
            {isCompact ? "Live calculator" : "First available tool"}
          </span>
          <h2>
            {isCompact
              ? "AP Environmental Science Score Calculator"
              : "Calculate Your APES Score"}
          </h2>
        </div>
        {!isCompact && <span className="score-chip">130-point composite</span>}
      </div>

      <div className="calculator-body">
        <form className="input-card" onSubmit={(event) => event.preventDefault()}>
          {!isCompact && (
            <p className="calculator-helper-copy">
              Enter your MCQ and FRQ raw scores below. You can use practice test
              results or your best estimate after the exam.
            </p>
          )}

          <ScoreField
            helper="Raw score out of 80 questions"
            id="mcq"
            label="Section I: Multiple Choice"
            max={80}
            min={0}
            onChange={(value) => handleInputChange("mcq", value, setMcqRaw)}
            value={mcqRaw}
          />

          <ScoreField
            helper="Raw score out of 10"
            id="frq1"
            label="Question 1: Design an Investigation"
            max={10}
            min={0}
            onChange={(value) => handleInputChange("frq1", value, setFrq1)}
            value={frq1}
          />

          <ScoreField
            helper="Raw score out of 10"
            id="frq2"
            label="Question 2: Analyze an Environmental Problem and Propose a Solution"
            max={10}
            min={0}
            onChange={(value) => handleInputChange("frq2", value, setFrq2)}
            value={frq2}
          />

          <ScoreField
            helper="Raw score out of 10"
            id="frq3"
            label="Question 3: Analyze an Environmental Problem and Propose a Solution Doing Calculations"
            max={10}
            min={0}
            onChange={(value) => handleInputChange("frq3", value, setFrq3)}
            value={frq3}
          />
        </form>

        <aside className="result-card" aria-live="polite">
          <div className="result-top">
            <p>{isCompact ? "Estimated AP score" : "Predicted AP Score"}</p>
            <strong className="score-number">{result.score}</strong>
          </div>
          <div className="result-details">
            {!isCompact && (
              <>
                <div className="metric">
                  <span>MCQ Scaled Score</span>
                  <strong>{formatScore(result.mcqScaled, 78)} / 78</strong>
                </div>
                <div className="metric">
                  <span>FRQ Scaled Score</span>
                  <strong>
                    {formatScore(result.frqScaled, 52)} / 52
                    <small> ({result.frqRawTotal} raw)</small>
                  </strong>
                </div>
              </>
            )}
            <div className="metric">
              <span>Composite Score</span>
              <strong>{formatScore(result.composite, 130)} / 130</strong>
            </div>
            {!isCompact && (
              <>
                <div className="metric">
                  <span>Score Band</span>
                  <strong>{result.scoreBand}</strong>
                </div>
                <div className="metric">
                  <span>Points to next band</span>
                  <strong>{result.pointsToNextBand}</strong>
                </div>
              </>
            )}
            {isCompact ? (
              <>
                <div className="result-message compact-feedback">
                  <strong>{result.scoreMessage.title}</strong>
                  <p>{result.scoreMessage.body}</p>
                </div>
                <a
                  className="result-link"
                  href="/ap-environmental-science-score-calculator/"
                  onClick={() =>
                    trackEvent("view_detailed_breakdown", {
                      calculator_name: "apes_score_calculator",
                      source: "homepage_compact_calculator",
                    })
                  }
                >
                  View detailed score breakdown
                </a>
              </>
            ) : (
              <div className="result-message">
                <strong>{result.scoreMessage.title}</strong>
                <p>{result.scoreMessage.body}</p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}

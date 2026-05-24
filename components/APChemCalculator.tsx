"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/gtag";

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

const nextThresholdByScore: Record<Exclude<ScoreBand, 5>, number> = {
  1: 30,
  2: 45,
  3: 60,
  4: 75,
};

const feedbackByScore: Record<ScoreBand, string> = {
  5: "Strong AP Chemistry 5 range based on this estimate.",
  4: "You are in the estimated 4 range. Improve your MCQ or FRQ score to move closer to a 5.",
  3: "You are in the estimated passing range. A few more raw points could move you closer to a 4.",
  2: "You may need more AP Chemistry review to reach the passing range.",
  1: "You may need more AP Chemistry review to reach the passing range.",
};

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

function ScoreField({
  helper,
  id,
  label,
  max,
  min,
  onChange,
  value,
}: ScoreFieldProps) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className="input-row">
        <input
          id={id}
          inputMode="numeric"
          max={max}
          min={min}
          onChange={(event) =>
            onChange(clamp(event.target.valueAsNumber, min, max))
          }
          type="number"
          value={value}
        />
        <span className="raw-score">{value}</span>
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
    const mcqScaled = Math.min((mcqRaw / 60) * 50, 50);
    const frqRawTotal = isCompact
      ? frqTotalCompact
      : long1 + long2 + long3 + short4 + short5 + short6 + short7;
    const frqScaled = Math.min((frqRawTotal / 46) * 50, 50);
    const composite = Math.min(mcqScaled + frqScaled, 100);
    const score = getPredictedAPScore(composite);
    const nextThreshold = score === 5 ? null : nextThresholdByScore[score];
    const nextScore = score === 5 ? null : ((score + 1) as ScoreBand);
    const pointsAway =
      nextThreshold === null ? 0 : Math.max(0, nextThreshold - composite);
    const nextBandMessage =
      score === 5
        ? "You are in the estimated AP Score 5 range."
        : `You are about ${pointsAway.toFixed(
            1,
          )} composite points away from the estimated AP Score ${nextScore} range.`;

    return {
      composite,
      feedback: feedbackByScore[score],
      frqRawTotal,
      frqScaled,
      mcqScaled,
      nextBandMessage,
      score,
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

      <div className="calculator-body">
        <form
          className="input-card chemistry-input-card"
          onSubmit={(event) => event.preventDefault()}
        >
          <ScoreField
            helper="Raw score out of 60 questions"
            id="chemistry-mcq"
            label="Section I: Multiple Choice"
            max={60}
            min={0}
            onChange={(value) => handleInputChange("mcq", value, setMcqRaw)}
            value={mcqRaw}
          />
          {isCompact ? (
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
          ) : (
            <>
              <ScoreField
                helper="Raw score out of 10"
                id="chemistry-long-frq-1"
                label="Long FRQ 1"
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
                label="Long FRQ 2"
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
                label="Long FRQ 3"
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
                label="Short FRQ 4"
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
                label="Short FRQ 5"
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
                label="Short FRQ 6"
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
                label="Short FRQ 7"
                max={4}
                min={0}
                onChange={(value) =>
                  handleInputChange("short_frq_7", value, setShort7)
                }
                value={short7}
              />
            </>
          )}
        </form>

        <aside aria-live="polite" className="result-card">
          <div className="result-top">
            <p>{isCompact ? "Estimated AP score" : "Predicted AP Score"}</p>
            <strong className="score-number">{result.score}</strong>
          </div>
          <div className="result-details">
            <div className="metric">
              <span>MCQ Score</span>
              <strong>{formatScore(result.mcqScaled, 50)} / 50</strong>
            </div>
            <div className="metric">
              <span>FRQ Score</span>
              <strong>{formatScore(result.frqScaled, 50)} / 50</strong>
            </div>
            <div className="metric">
              <span>Composite Score</span>
              <strong>{formatScore(result.composite, 100)} / 100</strong>
            </div>
            <div className="metric">
              <span>FRQ raw total</span>
              <strong>{result.frqRawTotal} / 46</strong>
            </div>
            <div className="metric">
              <span>Points to next score band</span>
              <strong>{result.nextBandMessage}</strong>
            </div>
            {isCompact ? (
              <>
                <p className="feedback compact-feedback">
                  Unofficial estimate based on current inputs.
                </p>
                <a
                  className="result-link"
                  href="/ap-chemistry-score-calculator/"
                  onClick={() =>
                    trackEvent("view_detailed_breakdown", {
                      calculator_name: "ap_chemistry_score_calculator",
                      source: "homepage_compact_calculator",
                    })
                  }
                >
                  View detailed score breakdown
                </a>
              </>
            ) : (
              <p className="feedback">{result.feedback}</p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}

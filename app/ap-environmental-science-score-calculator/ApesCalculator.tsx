"use client";

import { useMemo, useState } from "react";

type ScoreBand = 1 | 2 | 3 | 4 | 5;

const scoreThresholds: Record<ScoreBand, number> = {
  1: 0,
  2: 30,
  3: 45,
  4: 60,
  5: 75,
};

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

function getScore(composite: number): ScoreBand {
  if (composite >= 75) return 5;
  if (composite >= 60) return 4;
  if (composite >= 45) return 3;
  if (composite >= 30) return 2;
  return 1;
}

function getFeedback(score: ScoreBand) {
  if (score === 5) return "Strong 5 range based on this estimate.";
  if (score === 4) {
    return "You are in the estimated 4 range. Improve your MCQ or FRQ score to move closer to a 5.";
  }
  if (score === 3) {
    return "You are in the estimated passing range. A few more raw points could move you closer to a 4.";
  }

  return "You may need more review to reach the passing range.";
}

function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

export default function ApesCalculator() {
  const [mcq, setMcq] = useState(60);
  const [frq1, setFrq1] = useState(7);
  const [frq2, setFrq2] = useState(7);
  const [frq3, setFrq3] = useState(7);

  const result = useMemo(() => {
    const mcqContribution = (mcq / 80) * 60;
    const frqContribution = ((frq1 + frq2 + frq3) / 30) * 40;
    const composite = mcqContribution + frqContribution;
    const score = getScore(composite);
    const nextThreshold = score === 5 ? null : scoreThresholds[(score + 1) as ScoreBand];
    const pointsAway =
      nextThreshold === null ? 0 : Math.max(0, nextThreshold - composite);

    return {
      composite,
      feedback: getFeedback(score),
      frqContribution,
      mcqContribution,
      pointsAway,
      score,
    };
  }, [frq1, frq2, frq3, mcq]);

  return (
    <section className="calculator-card" aria-label="APES score calculator">
      <div className="calculator-card-header">
        <div>
          <span className="kicker">First calculator</span>
          <h2>AP Environmental Science</h2>
        </div>
        <span className="score-chip">MCQ + FRQ</span>
      </div>

      <div className="calculator-body">
        <form className="input-card" onSubmit={(event) => event.preventDefault()}>
          <div className="field">
            <label htmlFor="mcq">Multiple Choice Score</label>
            <input
              id="mcq"
              inputMode="numeric"
              max={80}
              min={0}
              onChange={(event) =>
                setMcq(clamp(event.target.valueAsNumber, 0, 80))
              }
              type="number"
              value={mcq}
            />
            <span className="helper">0-80 questions</span>
          </div>

          <div className="field-grid">
            <div className="field">
              <label htmlFor="frq1">FRQ 1 Score</label>
              <input
                id="frq1"
                inputMode="numeric"
                max={10}
                min={0}
                onChange={(event) =>
                  setFrq1(clamp(event.target.valueAsNumber, 0, 10))
                }
                type="number"
                value={frq1}
              />
            </div>

            <div className="field">
              <label htmlFor="frq2">FRQ 2 Score</label>
              <input
                id="frq2"
                inputMode="numeric"
                max={10}
                min={0}
                onChange={(event) =>
                  setFrq2(clamp(event.target.valueAsNumber, 0, 10))
                }
                type="number"
                value={frq2}
              />
            </div>

            <div className="field">
              <label htmlFor="frq3">FRQ 3 Score</label>
              <input
                id="frq3"
                inputMode="numeric"
                max={10}
                min={0}
                onChange={(event) =>
                  setFrq3(clamp(event.target.valueAsNumber, 0, 10))
                }
                type="number"
                value={frq3}
              />
            </div>
          </div>
        </form>

        <aside className="result-card" aria-live="polite">
          <div className="result-top">
            <p>Predicted AP Score</p>
            <strong className="score-number">{result.score}</strong>
          </div>
          <div className="result-details">
            <div className="metric">
              <span>Composite</span>
              <strong>{formatPercent(result.composite)}</strong>
            </div>
            <div className="metric">
              <span>MCQ contribution</span>
              <strong>{formatPercent(result.mcqContribution)}</strong>
            </div>
            <div className="metric">
              <span>FRQ contribution</span>
              <strong>{formatPercent(result.frqContribution)}</strong>
            </div>
            <div className="metric">
              <span>Next band</span>
              <strong>
                {result.score === 5
                  ? "Already in 5 range"
                  : `${result.pointsAway.toFixed(1)} points away`}
              </strong>
            </div>
            <p className="feedback">{result.feedback}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

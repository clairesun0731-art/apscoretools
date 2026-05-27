export type ScoreMessage = {
  body: string;
  title: string;
};

export function getScoreMessage(score: 1 | 2 | 3 | 4 | 5): ScoreMessage {
  switch (score) {
    case 5:
      return {
        title: "Excellent estimated result",
        body: "Your estimated score is in the 5 range. This usually suggests very strong performance across the exam sections, but official score conversions can still vary by year.",
      };
    case 4:
      return {
        title: "Strong estimated result",
        body: "Your estimated score is in the 4 range. This is generally a solid AP performance, though the final official score depends on the exam's yearly scoring conversion.",
      };
    case 3:
      return {
        title: "Likely passing-range estimate",
        body: "Your estimated score is in the 3 range. Many colleges may consider a 3 for credit or placement, but policies vary by school and subject.",
      };
    case 2:
      return {
        title: "Below the common credit range",
        body: "Your estimated score is in the 2 range. Review the sections with the most missed points and focus on improving your raw score before the exam.",
      };
    case 1:
      return {
        title: "Needs more practice",
        body: "Your estimated score is in the 1 range. Use the section breakdown to identify weak areas and build a more focused study plan.",
      };
  }
}

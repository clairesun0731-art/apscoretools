import Link from "next/link";
import ScoringArticle, { scoringMetadata } from "@/components/ScoringArticle";
import { practiceGuides } from "@/lib/practiceGuides";

const guide = practiceGuides.find(item => item.href === "/how-ap-physics-frqs-are-scored/")!;
export const metadata = scoringMetadata(guide);

export default function Page() {
  return (
    <ScoringArticle guide={guide} quickAnswer="Score each free-response question with its own College Board rubric. A correct setup can earn credit even if your final number is wrong. For May 2027, the four FRQs together count for 50% on each AP Physics exam. Enter each question’s earned points separately to estimate your overall score." intro={<> A wrong final velocity can sit beside a perfectly good momentum equation. To score an AP Physics free-response question (FRQ), open the scoring guidelines for that exact question and match each point to something you actually wrote or drew. Keep the points for each question separate. You’ll need all four subtotals to estimate a full practice exam score. </>} sections={[
  {
    "id": "can-i-get-partial-credit-if-my-final-answer-is-wrong",
    "title": "Can I get partial credit if my final answer is wrong?"
  },
  {
    "id": "four-question-types",
    "title": "What evidence should I look for on each type of FRQ?"
  },
  {
    "id": "second-chance",
    "title": "If my graph is wrong, should I cross out the explanation too?"
  },
  {
    "id": "how-do-i-turn-four-marked-questions-into-a-section-score",
    "title": "How do I turn four marked questions into a section score?"
  },
  {
    "id": "which-calculator-matches-my-practice-exam",
    "title": "Which calculator matches my practice exam?"
  },
  {
    "id": "what-difference-would-one-more-frq-point-make",
    "title": "What difference would one more FRQ point make?"
  }
]}>
<section className="card prose-card" id="can-i-get-partial-credit-if-my-final-answer-is-wrong">
<h2>Can I get partial credit if my final answer is wrong?</h2>
<p>Try Question 1 from the 2025 AP Physics 1 exam. In part A(ii), a moving cart picks up a stationary block whose mass is one-fifth of the cart’s. Two points concern momentum. The first rewards an equation expressing conservation of momentum. The second asks you to connect the cart’s initial momentum to the combined system’s momentum after the collision. <a href="https://apcentral.collegeboard.org/media/pdf/ap25-apc-physics-1-q1.pdf">College Board scoring guidelines and student samples, Question 1</a></p>
<p>Suppose a practice answer reads:</p>
<blockquote>
<p>My system is the cart and block. Its horizontal momentum is conserved. I wrote initial momentum = final momentum, so the final velocity must equal the cart’s original velocity.</p>
</blockquote>
<p>Our practice mark is <strong>1 of the 2 points</strong>. The conservation equation earns the first. The claim about velocity overlooks the extra mass traveling with the cart, and the answer never sets the original momentum equal to the combined mass times the final velocity.</p>
<p>Now replace the last step with <span><em>m</em><sub><em>c</em></sub><em>v</em><sub><em>c</em></sub> = (<em>m</em><sub><em>c</em></sub> + <em>m</em><sub><em>c</em></sub>/5)<em>v</em><sub><em>f</em></sub></span>. Dividing by the combined mass gives a final speed of <span>5<em>v</em><sub><em>c</em></sub>/6</span>. The extra line shows exactly where the block enters the calculation. For this particular part, the published scoring note also accepts the correct isolated final expression for both points. Read the notes for the problem you actually attempted before marking your next answer.</p>
</section>

<section className="card prose-card" id="four-question-types">
<h2>What evidence should I look for on each type of FRQ?</h2>
<p>Put the problem, your original work, and the matching rubric side by side. For each row you award, underline the equation, feature of the graph, or sentence that earned it. Here is how that looks across the four question types. These are practice checks. The decision about each point comes from the question in front of you.</p>
<ul><li><strong>Mathematical routines.</strong> Circle the quantity the prompt asks you to derive. Follow your equations forward until you reach it. In the cart example, assigning the final speed to the combined mass is the step that connects conservation to the requested result.</li>
<li><strong>Translation between representations.</strong> Say what each axis measures and choose one feature to translate. A horizontal momentum–time graph means momentum stays constant. A horizontal position–time graph describes an object staying in place. The same line can support entirely different claims.</li>
<li><strong>Experimental design and analysis.</strong> Identify what you change, what you measure, and how the measurements answer the question. If your plan ends with “plot the data,” add the two axes and explain how you would use the slope or intercept to find the unknown.</li>
<li><strong>Qualitative/quantitative translation.</strong> Make a prediction in words. Then identify the term in your equation that must increase, decrease, or stay fixed for that prediction to hold. Check the conditions under which your comparison works.</li></ul>
</section>

<section className="card prose-card" id="second-chance">
<h2>If my graph is wrong, should I cross out the explanation too?</h2>
<p>In 2025 Physics 1 Question 1, part B includes a point that readers score independently of the earlier momentum sketch. Cover your sketch and read the explanation on its own. Did you identify both objects as the system? Can you explain why friction between those objects changes the individual momenta while their combined horizontal momentum stays constant when there is no net external horizontal force? That reasoning is still worth checking against the part B rows.</p>
<p>An older paper can be useful for this exercise. The 2024 Physics 1 opening question, for example, uses energy bars and is worth seven points. Mark those bars with the 2024 guide. Keep the seven-point subtotal beside that problem so you can revisit it later. The newer four-question worksheet expects different maxima. <a href="https://apcentral.collegeboard.org/media/pdf/ap25-sg-physics-1.pdf">2025 scoring notes</a> · <a href="https://apcentral.collegeboard.org/media/pdf/ap24-sg-physics-1.pdf">2024 energy-bar rubric</a></p>
</section>
<section className="card prose-card" id="how-do-i-turn-four-marked-questions-into-a-section-score">
<h2>How do I turn four marked questions into a section score?</h2>
<p>Write each subtotal at the top of its question. In the AP Score Tools model, a sample sheet might read <strong>6/10</strong> for mathematical routines, <strong>7/12</strong> for translation between representations, <strong>5/10</strong> for experimental design and analysis, and <strong>4/8</strong> for qualitative/quantitative translation. That gives <strong>22/40</strong>. If you practiced only the cart question, keep its subtotal for later. Zeros in the other fields would describe three unanswered questions on a whole exam.</p>
</section>
<section className="card prose-card" id="which-calculator-matches-my-practice-exam">
<h2>Which calculator matches my practice exam?</h2>
<p>The May 2027 format uses 42 multiple-choice questions and four FRQs, with each section worth half the score. Match the course printed on your paper to the tool below. Check the MCQ denominator when using an older practice test. For example, 30 correct on a 40-question paper is 75%, while entering 30 in a field marked /42 represents about 71%. <a href="https://apcentral.collegeboard.org/courses/ap-physics-1/exam">Physics 1 exam</a> · <a href="https://apcentral.collegeboard.org/courses/ap-physics-2/exam">Physics 2 exam</a> · <a href="https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics/exam">Mechanics exam</a> · <a href="https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism/exam">Electricity and Magnetism exam</a></p>
<div className="table-wrap"><table>

<thead>
<tr>
<th>Practice paper</th>
<th>Enter your scores</th>
</tr>
</thead>
<tbody>
<tr>
<td>Physics 1, algebra-based</td>
<td><Link href="/ap-physics-1-score-calculator/">AP Physics 1 score calculator</Link></td>
</tr>
<tr>
<td>Physics 2, algebra-based</td>
<td><Link href="/ap-physics-2-score-calculator/">AP Physics 2 score calculator</Link></td>
</tr>
<tr>
<td>Physics C, Mechanics</td>
<td><Link href="/ap-physics-c-mechanics-score-calculator/">AP Physics C: Mechanics score calculator</Link></td>
</tr>
<tr>
<td>Physics C, Electricity and Magnetism</td>
<td><Link href="/ap-physics-c-electricity-and-magnetism-score-calculator/">AP Physics C: E&amp;M score calculator</Link></td>
</tr>
</tbody>
</table></div>
</section>
<section className="card prose-card" id="what-difference-would-one-more-frq-point-make">
<h2>What difference would one more FRQ point make?</h2>
<p>With 28/42 MCQs and 22/40 FRQ points, the tool estimates a weighted total of <strong>60.83/100</strong>. Raise the FRQ total to 23 and keep the MCQs fixed. The total becomes <strong>62.08/100</strong>. That extra 1.25 can leave the estimated AP grade unchanged. Look back at the missed rubric point to decide what to practice next. For the cart response, that means writing out the mass and velocity of the system on both sides of the collision.</p>
</section>
    </ScoringArticle>
  );
}

import Link from "next/link";
import ScoringArticle, { scoringMetadata } from "@/components/ScoringArticle";
import { practiceGuides } from "@/lib/practiceGuides";

const guide = practiceGuides.find(item => item.href === "/how-to-score-ap-computer-science-a-frqs/")!;
export const metadata = scoringMetadata(guide);

export default function Page() {
  return (
    <ScoringArticle guide={guide} quickAnswer="Mark each Java response against the rubric for its year and question. A failing test case can cost an algorithm point while leaving narrower criteria intact. On the revised exam, four FRQs supply 45% of the score. The current calculator uses 25 possible FRQ points, split 7, 7, 5, and 6." intro={<> A method can fail a test case and still show several of the skills a reader is looking for. Start with the scoring guidelines for your exact Java question. Beside each scoring row, write the line of your code that meets it. For a row that assesses the whole algorithm, trace the required cases before awarding the point. <a href="https://apcentral.collegeboard.org/media/pdf/ap26-sg-computer-science-a.pdf">College Board’s 2026 CSA scoring guidelines</a> </>} sections={[
  {
    "id": "grade-a-real-constructor-question",
    "title": "Grade a real constructor question"
  },
  {
    "id": "trace-three-inputs",
    "title": "Which test cases would expose the constructor bug?"
  },
  {
    "id": "mark-before-revising",
    "title": "How do I grade a solution that looks different from the sample?"
  },
  {
    "id": "what-if-my-code-has-a-syntax-mistake",
    "title": "What if my code has a syntax mistake?"
  },
  {
    "id": "how-do-the-four-frqs-affect-my-estimate",
    "title": "How do the four FRQs affect my estimate?"
  }
]}>
<section className="card prose-card" id="grade-a-real-constructor-question">
<h2>Grade a real constructor question</h2>
<p>In 2026 Question 1(a), an account needs a username. If the requested name is available, the account uses it. Otherwise, the constructor searches numbered alternatives. Here’s an original practice attempt at the constructor body:</p>
<pre><code>String candidate = requestedName;
int suffix = 1;
while (!isAvailable(candidate)) &#123;
    candidate = requestedName + suffix;
    suffix++;
&#125;
username = requestedName;</code></pre>
<p>Trace it with a requested name of “Kai.” Suppose “Kai” is taken and “Kai1” is free. The loop correctly finds “Kai1.” The last line then stores “Kai.” Now you can mark the four rows separately.</p>
<div className="table-wrap"><table>

<thead>
<tr>
<th>Row</th>
<th>Evidence in the practice answer</th>
<th>Mark</th>
</tr>
</thead>
<tbody>
<tr>
<td>A1</td>
<td>The availability check receives a string candidate.</td>
<td>1</td>
</tr>
<tr>
<td>A2</td>
<td>The loop updates the candidate and tests availability again.</td>
<td>1</td>
</tr>
<tr>
<td>A3</td>
<td>The numeric suffix increases inside the loop.</td>
<td>1</td>
</tr>
<tr>
<td>A4</td>
<td>The field receives the original name even when that name was taken.</td>
<td>0</td>
</tr>
</tbody>
</table></div>
<p><strong>Practice subtotal: 3/4 for part (a).</strong> Change the assignment to <code>username = candidate;</code> and trace two cases: a free name and a taken name. Both now store the available candidate. Part (b) has its own three points. Carry the sum of both parts into the Question 1 field.</p>
</section>

<section className="card prose-card" id="trace-three-inputs">
<h2>Which test cases would expose the constructor bug?</h2>
<p>Test the smallest inputs that force different decisions. Use the same requested name in each case so you can see exactly what changes. Assume Kai2 is free in the last row.</p>
<div className="table-wrap"><table><thead><tr><th>Names already taken</th><th>Expected field value</th><th>What the original code stores</th></tr></thead><tbody>
<tr><td>None</td><td>Kai</td><td>Kai. The loop never runs, so the bug is hidden.</td></tr>
<tr><td>Kai</td><td>Kai1</td><td>Kai. The search succeeds but the assignment discards its result.</td></tr>
<tr><td>Kai and Kai1</td><td>Kai2</td><td>Kai. The loop tests two alternatives and still stores the original.</td></tr>
</tbody></table></div>
<p>Three tests expose one underlying mistake. On this constructor, mark the affected scoring row once. Giving the program one-third credit because it passes one of three tests would produce an entirely different score from the published rubric. Record the repair beside row A4: store the candidate that the successful search left behind.</p>
</section>

<section className="card prose-card" id="mark-before-revising">
<h2>How do I grade a solution that looks different from the sample?</h2>
<p>Take your first attempt before you read the model solution. Keep a copy, then annotate it in a second color. For a narrowly defined criterion, find the statement that does the required work. For an algorithm criterion, read the surrounding statements too. A perfectly placed loop can still produce the wrong result if a later assignment undoes it.</p>
<p>Suppose your constructor uses a different local variable name or tests availability in a different order. Trace what gets stored when the base name is free and when several suffixes are taken. Compare that behavior with the scoring row and its exceptions. Matching the model solution line for line is unnecessary. If the answer depends on an assumption you cannot find in the question, flag that row and ask your teacher about that specific case.</p>
<p>Keep 2025 papers in a separate practice folder. Their guidelines include year-specific penalties and four nine-point questions. You can still use them to practice reading Java, but mark each with its original criteria. Use a revised-format set when you want a whole-exam estimate. <a href="https://apcentral.collegeboard.org/media/pdf/ap25-sg-computer-science-a.pdf">2025 guidelines</a> · <a href="https://apcentral.collegeboard.org/media/pdf/ap26-sg-computer-science-a.pdf">2026 guidelines</a></p>
</section>
<section className="card prose-card" id="what-if-my-code-has-a-syntax-mistake">
<h2>What if my code has a syntax mistake?</h2>
<p>Use the decision rules at the front of that year’s guidelines. The 2026 guide allows some minor slips, including an omitted semicolon when the intended structure is clear. By contrast, the last line of the example is valid Java and still loses the algorithm point. Running the code and checking the scoring rows answer different questions. Both can help you find what to fix.</p>
</section>
<section className="card prose-card" id="how-do-the-four-frqs-affect-my-estimate">
<h2>How do the four FRQs affect my estimate?</h2>
<p>The revised format gives 55% to the 42 MCQs and 45% to four FRQs. In the current tool, the four inputs are methods and control structures <strong>/7</strong>, class design <strong>/7</strong>, ArrayList data analysis <strong>/5</strong>, and a 2D array question <strong>/6</strong>. An older paper with four nine-point questions uses a different scale. Keep those results with their original worksheet. <a href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam">College Board exam format</a></p>
<p>For example, scores of <strong>5, 4, 3, and 4</strong> add to <strong>16/25</strong>, contributing <strong>28.8</strong> of the 45 weighted FRQ points. With 30/42 MCQs, the estimated composite is <strong>68.09/100</strong>. Recover the assignment point above and it rises to <strong>69.89/100</strong>. <Link href="/ap-computer-science-a-score-calculator/">AP Computer Science A score calculator</Link></p>
</section>
    </ScoringArticle>
  );
}

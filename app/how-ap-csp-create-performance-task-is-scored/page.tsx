import Link from "next/link";
import ScoringArticle, { scoringMetadata } from "@/components/ScoringArticle";
import { practiceGuides } from "@/lib/practiceGuides";

const guide = practiceGuides.find(item => item.href === "/how-ap-csp-create-performance-task-is-scored/")!;
export const metadata = scoringMetadata(guide);

export default function Page() {
  return (
    <ScoringArticle guide={guide} quickAnswer="For May 2027, Create and the exam-day written responses together count for 30% of AP CSP. In the released 2025 Set 1 rubric, the video and program requirements earn up to one point each, and the four written prompts earn up to four more. A working program alone cannot establish a six-point score." intro={<> Your app runs, the demo plays, and your code is ready to submit. How much of your AP Computer Science Principles score can you count on? For the May 2027 exam, <strong>the Create task and the exam-day written responses together account for 30%</strong>. The 70 multiple-choice questions account for the other 70%. To estimate that first component, you need evidence from the project and from your answers about it. <a href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam">College Board exam format</a> </>} sections={[
  {
    "id": "what-do-i-submit-and-what-do-i-write-on-exam-day",
    "title": "What do I submit, and what do I write on exam day?"
  },
  {
    "id": "six-rubric-rows",
    "title": "Where can the six Create points come from?"
  },
  {
    "id": "test-your-reference",
    "title": "Can I explain my program using only my project reference?"
  },
  {
    "id": "a-worked-example-with-a-playlist",
    "title": "A worked example with a playlist"
  },
  {
    "id": "how-do-i-enter-a-realistic-practice-score",
    "title": "How do I enter a realistic practice score?"
  }
]}>
<section className="card prose-card" id="what-do-i-submit-and-what-do-i-write-on-exam-day">
<h2>What do I submit, and what do I write on exam day?</h2>
<div className="table-wrap"><table>

<thead>
<tr>
<th>When</th>
<th>What you produce</th>
<th>How to practice</th>
</tr>
</thead>
<tbody>
<tr>
<td>Before the exam</td>
<td>Program code, a video showing the program running, and a Personalized Project Reference (PPR)</td>
<td>Find the code segment behind the behavior you show in the video. Trace it once with a real input.</td>
</tr>
<tr>
<td>During the exam</td>
<td>Two written-response questions with four prompts in total. You have 60 minutes and access to your PPR.</td>
<td>Use a released prompt and your own PPR. Write a response before opening the scoring guidelines.</td>
</tr>
</tbody>
</table></div>
<p>A useful test is to give a classmate your written explanation and the relevant code segment. Can they point to the exact line that makes your explanation true? A sentence like “the app uses a list to store songs” says what the list contains. It leaves open how the program uses those songs.</p>
</section>

<section className="card prose-card" id="six-rubric-rows">
<h2>Where can the six Create points come from?</h2>
<p>Use the 2025 Set 1 scoring sheet for a practice run. Each of the six rows is worth one point. Mark a row only after finding all the evidence that its decision rule asks for. Three uploaded files are three deliverables, not three automatic points. <a href="https://apcentral.collegeboard.org/media/pdf/ap25-sg-computer-science-principles-set-1.pdf">2025 Set 1 scoring sheet</a></p>
<div className="table-wrap"><table><thead><tr><th>Row</th><th>What to inspect during practice</th></tr></thead><tbody>
<tr><td>Video</td><td>Play it from the start. Can you see input, the running feature, and the resulting output in the demonstration?</td></tr>
<tr><td>Program requirements</td><td>Locate the procedure you developed and its call. Trace where a collection is used, where a condition changes the path, and where code repeats.</td></tr>
<tr><td>Written Response 1</td><td>For this set, identify an output and explain what it demonstrates about the program.</td></tr>
<tr><td>2(a) · Algorithm development</td><td>Trace the specific code identified by the prompt. Describe the behavior in terms of your program.</td></tr>
<tr><td>2(b) · Errors and testing</td><td>Find the code in your reference that makes your answer testable. Check your explanation against this set’s decision rules.</td></tr>
<tr><td>2(c) · Data and procedural abstraction</td><td>Use the list and access code in your own reference to reason about a change. The playlist example below shows how.</td></tr>
</tbody></table></div>
</section>

<section className="card prose-card" id="test-your-reference">
<h2>Can I explain my program using only my project reference?</h2>
<p>Try a two-minute rehearsal. Close the editor, open your Personalized Project Reference, and find the procedure call you want to discuss. Write down an input, predict the output, and trace the branch or loop that connects them. Then reopen the editor and check. If the output surprises you, you have found a useful practice question before exam day.</p>
<p>For instance, a search for “jazz” displays two titles. “It displays music” identifies little about the feature. “The screen shows the two songs tagged jazz because the search checks each song’s genre against my selected filter” connects visible output with functionality. Use wording that fits your own code and the actual question you receive.</p>
<p>Try the same project against a second released set. In 2024 Set 1, one prompt asks what an iteration accomplishes, and another asks about calls that take different paths through a procedure. Prepare to read unfamiliar questions about familiar code. <a href="https://apcentral.collegeboard.org/media/pdf/ap24-sg-computer-science-principles-set-1.pdf">2024 Set 1 practice rubric</a></p>
</section>
<section className="card prose-card" id="a-worked-example-with-a-playlist">
<h2>A worked example with a playlist</h2>
<p>In 2025 Set 1, Written Response 2(c) asked students to reason about adding elements to their list. The scoring guidance allows an explanation of the changes needed or an explanation of why the existing code already works. The reasoning has to fit the code in the student’s reference. <a href="https://apcentral.collegeboard.org/media/pdf/ap25-apc-csp-q2-set-1.pdf">Released scoring guidance for Written Response 2(c)</a></p>
<p>Imagine your own playlist app searches the list from the first item through its current length. An original practice answer might read, “The loop checks the length of songs each time I run the search. If I add two songs at the end, the loop visits those positions too, so the search code can stay the same.” Now look at your PPR. If the loop actually stops after item 5, that answer describes a different program. A stronger response for <em>your</em> code would identify the fixed limit and explain why using the list’s current length would include the new entries.</p>
</section>
<section className="card prose-card" id="how-do-i-enter-a-realistic-practice-score">
<h2>How do I enter a realistic practice score?</h2>
<p>The tool asks for MCQs correct out of 70 and a combined practice rubric score out of 6. After grading a matching released set, suppose you’re confident in three points and unsure about a fourth. Enter <strong>49 MCQs and 3/6</strong> for a weighted total of <strong>64/100</strong>. Change only the rubric input to <strong>4/6</strong> and the estimate becomes <strong>69/100</strong>. The five-point spread tells you exactly how much that uncertain judgment affects this model. <Link href="/ap-computer-science-principles-score-calculator/">Estimate your AP CSP score</Link></p>
<p>If you’ve only finished the program, leave the Create subtotal open in your practice notes. Try one timed written-response set with your PPR, then come back with a defensible range.</p>
</section>
    </ScoringArticle>
  );
}

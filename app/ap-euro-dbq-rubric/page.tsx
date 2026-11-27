import Link from "next/link";
import ScoringArticle, { scoringMetadata } from "@/components/ScoringArticle";
import { practiceGuides } from "@/lib/practiceGuides";

const guide = practiceGuides.find(item => item.href === "/ap-euro-dbq-rubric/")!;
export const metadata = scoringMetadata(guide);

export default function Page() {
  return (
    <ScoringArticle guide={guide} quickAnswer="The AP Euro DBQ is worth seven rubric points and 25% of the exam. You can earn one point each for thesis and context, three for evidence, and two for analysis and reasoning. For document evidence, accurately describe at least three relevant documents for one point, or use at least four to support an argument for both." intro={<> A document-based question (DBQ) is scored out of seven points. If your draft stalls at four, count how many documents actually support a claim. Then look for sentences explaining why a source’s author, purpose, audience, or historical setting matters to that claim. The two checks address different parts of the rubric. </>} sections={[
  {
    "id": "where-did-a-real-four-point-essay-earn-its-marks",
    "title": "Where did a real four-point essay earn its marks?"
  },
  {
    "id": "what-does-it-sound-like-to-use-a-document-as-evidence",
    "title": "What does it sound like to use a document as evidence?"
  },
  {
    "id": "source-the-letter",
    "title": "How do I earn sourcing credit with the same document?"
  },
  {
    "id": "reading-period",
    "title": "How should I use the 15-minute reading period?"
  },
  {
    "id": "which-revision-should-i-make-first",
    "title": "Which revision should I make first?"
  },
  {
    "id": "what-difference-does-one-dbq-point-make",
    "title": "What difference does one DBQ point make?"
  }
]}>
<section className="card prose-card" id="where-did-a-real-four-point-essay-earn-its-marks">
<h2>Where did a real four-point essay earn its marks?</h2>
<p>The 2025 AP European History Set 1 DBQ asked students to evaluate how far the French government upheld revolutionary ideals. College Board’s Sample 1B earned <strong>4/7</strong>. Here’s the breakdown and what a student reviewing a similar draft could look for. <a href="https://apcentral.collegeboard.org/media/pdf/ap25-apc-european-history-dbq-set-1.pdf">College Board’s annotated DBQ samples, Set 1</a></p>
<div className="table-wrap"><table>

<thead>
<tr>
<th>Rubric area</th>
<th>Sample 1B</th>
<th>What the reader credited</th>
</tr>
</thead>
<tbody>
<tr>
<td>Thesis</td>
<td>1/1</td>
<td>A defensible argument about the government’s treatment of dissent.</td>
</tr>
<tr>
<td>Historical context</td>
<td>1/1</td>
<td>Relevant background on Enlightenment ideas and American independence.</td>
</tr>
<tr>
<td>Evidence from documents</td>
<td>1/2</td>
<td>The essay accurately used three documents. The second point required at least four supporting an argument.</td>
</tr>
<tr>
<td>Evidence beyond the documents</td>
<td>1/1</td>
<td>Specific additional evidence about the Jacobins.</td>
</tr>
<tr>
<td>Sourcing</td>
<td>0/1</td>
<td>The essay did not explain how a sourcing feature mattered to its argument for two documents.</td>
</tr>
<tr>
<td>Complexity</td>
<td>0/1</td>
<td>The reader found insufficient development of a complex argument.</td>
</tr>
</tbody>
</table></div>
</section>
<section className="card prose-card" id="what-does-it-sound-like-to-use-a-document-as-evidence">
<h2>What does it sound like to use a document as evidence?</h2>
<p>Consider Document 4 from the same set. These are two original practice sentences about Berr Isaac Berr’s 1791 letter to fellow Jews.</p>
<p><strong>Description:</strong> “Berr welcomes the recognition of Jews as French citizens.”</p>
<p><strong>Evidence for a claim:</strong> “Berr’s celebration of equal citizenship shows one concrete way the Revolution extended equality: members of a religious minority could now claim membership in the French political community.”</p>
<p>The second version makes a claim a reader could question and shows why this document supports it. One sentence is a useful revision, but the document-evidence point depends on what the whole essay does across the required documents. For sourcing, ask a further question: who needed to hear this message, and why does that audience affect how you interpret it? Use details supplied with the document to answer.</p>
</section>

<section className="card prose-card" id="source-the-letter">
<h2>How do I earn sourcing credit with the same document?</h2>
<p>Start with the author’s position, then explain what that position helps a historian understand. Berr was writing to fellow Jews after the extension of civic rights. His audience helps explain why celebration sits alongside advice about acting for the good of France. A member of the newly enfranchised community had reason both to welcome equality and to think carefully about how others would receive it.</p>
<p>That observation can support a more precise claim: the change in legal status was meaningful, even as some beneficiaries felt pressure to demonstrate belonging. “The audience was Jewish” identifies an audience. The extra sentence shows why the audience matters to the interpretation. To earn the sourcing point, do that work for at least two documents. The relevant feature can differ for each. <a href="https://apcentral.collegeboard.org/media/pdf/ap25-sg-european-history-set-1.pdf">College Board’s document notes and rubric</a></p>
</section>

<section className="card prose-card" id="reading-period">
<h2>How should I use the 15-minute reading period?</h2>
<p>College Board recommends an hour for the DBQ, including 15 minutes for reading. You receive seven documents. On a practice paper, divide your notes into three columns: document, claim it supports, and a source detail that changes how you read it. Leave a space for one document that complicates the claim you expected to make. <a href="https://apcentral.collegeboard.org/courses/ap-european-history/exam">AP European History exam format</a></p>
<p>For the French Revolution set, try grouping the 1791 letter about civic inclusion with a document that sets out rights. Then read the 1793 speech criticizing political intimidation. Could an argument about the growth of legal equality also explain the narrowing of political dissent? That tension gives you something specific to investigate across the documents. Naming a counterargument alone does not establish complexity. Carry it through the paragraph with evidence and explain how it changes your judgment.</p>
<p>Finally, check your outside evidence. Can you name a specific development beyond the documents and explain how it advances the argument? If you have used the same detail as background in the introduction, choose a different example for this row. That gives a reader a distinct reason to credit each part of the rubric. <a href="https://www.tomrichey.net/uploads/3/2/1/0/32100773/ap_euro_dbq_rubric.pdf">Tom Richey’s one-page rubric</a></p>
</section>
<section className="card prose-card" id="which-revision-should-i-make-first">
<h2>Which revision should I make first?</h2>
<p>Write your paragraph claim in the margin. Underline the words in each document sentence that help establish it. If three documents have a clear job and a fourth appears only in parentheses, start with the fourth. Explain what it shows and why that strengthens or qualifies the claim. Then read the paragraph without the document numbers. A reader should still be able to follow the argument.</p>
</section>
<section className="card prose-card" id="what-difference-does-one-dbq-point-make">
<h2>What difference does one DBQ point make?</h2>
<p>The DBQ carries 25% of the AP European History score. In the site’s model, <strong>4/7</strong> contributes about <strong>14.29</strong> weighted points out of 100. <strong>5/7</strong> contributes about <strong>17.86</strong>. With the MCQ, SAQ, and LEQ scores held fixed, the difference is about <strong>3.57 composite points</strong>. Enter the DBQ subtotal in its own field to see whether that revision would move your estimated AP grade. <a href="https://apcentral.collegeboard.org/courses/ap-european-history/exam">College Board exam format</a> · <Link href="/ap-european-history-score-calculator/">AP European History score calculator</Link></p>
</section>
    </ScoringArticle>
  );
}

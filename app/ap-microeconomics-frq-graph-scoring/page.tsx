import Image from "next/image";
import Link from "next/link";
import ScoringArticle, { scoringMetadata } from "@/components/ScoringArticle";
import { practiceGuides } from "@/lib/practiceGuides";

const guide = practiceGuides.find(item => item.href === "/ap-microeconomics-frq-graph-scoring/")!;
export const metadata = scoringMetadata(guide);

export default function Page() {
  return (
    <ScoringArticle guide={guide} quickAnswer="Identify the market, label the axes, and check each feature against the question’s rubric. For a single-price monopoly, find profit-maximizing output where MR meets rising MC, then read price from demand at that output. In the 2025 Set 1 example, the quantity and price are separate scoring points." intro={<> If you marked a monopoly price at the intersection of marginal revenue and marginal cost, you’ve found the quantity decision but read the price from the wrong curve. How many points does that cost? In the 2025 Set 1 long question, the quantity and price appear in separate scoring rows. You can check one without throwing out the other. <a href="https://apcentral.collegeboard.org/media/pdf/ap25-sg-microeconomics-set-1.pdf">College Board’s 2025 Set 1 scoring guidelines, Question 1</a> </>} sections={[
  {
    "id": "choose-the-model",
    "title": "Which graph does the FRQ actually ask for?"
  },
  {
    "id": "shading",
    "title": "How do I tell profit, tax revenue, and deadweight loss apart?"
  },
  {
    "id": "find-the-quantity-first-then-read-the-price",
    "title": "Find the quantity first, then read the price"
  },
  {
    "id": "how-do-i-combine-the-long-and-short-frqs",
    "title": "How do I combine the long and short FRQs?"
  }
]}>

<section className="card prose-card" id="choose-the-model">
<h2>Which graph does the FRQ actually ask for?</h2>
<p>Start by circling the decision-maker. A market chooses an equilibrium through the interaction of buyers and sellers. A firm takes its demand and cost conditions as given and chooses an output. A labor-market question changes the units on both axes. Choosing the right picture early makes the labels and intersections much easier to check.</p>
<div className="table-wrap"><table><thead><tr><th>Clue in the prompt</th><th>What to draw first</th><th>What to check before moving on</th></tr></thead><tbody>
<tr><td>Market for a good</td><td>Price against quantity, with supply and demand.</td><td>If a determinant changes, shift the affected curve and label the new equilibrium.</td></tr>
<tr><td>Individual price-taking firm</td><td>Price and cost against the firm’s output, with a horizontal market-price line.</td><td>The market determines the price. Use the firm’s costs to identify the output it supplies if it operates.</td></tr>
<tr><td>Single-price monopoly</td><td>Demand, marginal revenue, and marginal cost.</td><td>Mark the chosen quantity before finding the corresponding price. See the worked graph below.</td></tr>
<tr><td>Competitive labor market</td><td>Wage against the quantity of labor, with labor supply and demand.</td><td>Employment belongs on the horizontal axis. The units tell you whether you drew a labor or product market.</td></tr>
</tbody></table></div>
<p>Practice with a blank page. Read only the prompt, sketch the axes, and predict which intersection will answer it. Then uncover the reference graph and check. <a href="https://www.reviewecon.com/microeconomics-graphs">ReviewEcon graph reference</a></p>
</section>

<section className="card prose-card" id="shading">
<h2>How do I tell profit, tax revenue, and deadweight loss apart?</h2>
<p>Ask what the shaded area measures before drawing its boundary. <strong>Economic profit</strong> at a positive output is quantity times the difference between price and average total cost. If price is $8, ATC is $6, and the firm sells four units, the profit rectangle is four units wide and $2 high, for $8 total. The demand, MR and MC curves alone do not give you ATC.</p>
<p><strong>Tax revenue</strong> uses the tax per unit and the quantity actually sold after the tax. With a $2 tax and six units traded, the government receives $12. <strong>Deadweight loss</strong> concerns the surplus lost on trades that no longer happen. On a standard linear supply-and-demand graph without externalities, look between the post-tax and efficient quantities for that triangle. Shading everything between the two prices includes revenue from trades that still occur.</p>
<p>To test recall, cover the labels on a diagram and describe the area in one sentence before naming it. Then uncover the axes and check that its height times width has the right units. Apply the actual FRQ rubric to decide which features earn credit. <a href="https://ungerecon.weebly.com/uploads/2/0/8/8/2088048/essentialgraphsformicroeconomics.pdf">Essential Graphs for Microeconomics</a></p>
</section>
<section className="card prose-card" id="find-the-quantity-first-then-read-the-price">
<h2>Find the quantity first, then read the price</h2>
<p>The original practice graph below uses simple numbers so you can trace each move. At a quantity of 4, marginal revenue and marginal cost meet at $4. That intersection gives the monopolist’s profit-maximizing output. Keep your finger at 4 on the quantity axis and move straight up to demand. Buyers will pay $8** per unit for that output.</p>
<p><Image className="article-image" src="/images/guides/ap-micro-monopoly.png" width={1320} height={792} alt="Monopoly graph with output 4 where MR meets MC and price 8 on demand." /></p>
<p>Original monopoly practice graph. MR and MC meet at quantity 4 and marginal value 4. At the same quantity, demand gives a price of 8.</p>
<p>Now imagine that you drew these same curves but labeled $4 as the monopoly price. Here’s how to grade the first three graph points in the released question.</p>
<div className="table-wrap"><table>

<thead>
<tr>
<th>What to inspect</th>
<th>What is on your practice graph?</th>
<th>Practice mark</th>
</tr>
</thead>
<tbody>
<tr>
<td>Axes, demand and marginal revenue</td>
<td>Both axes are labeled. Demand and MR slope down, with MR below demand at positive quantities.</td>
<td>1/1</td>
</tr>
<tr>
<td>Profit-maximizing output</td>
<td>MC slopes up and the output label is directly below the MR–MC intersection.</td>
<td>1/1</td>
</tr>
<tr>
<td>Price at that output</td>
<td>The price label sits level with MR. The point on demand is higher.</td>
<td>0/1</td>
</tr>
</tbody>
</table></div>
<p>That’s <strong>2 of the first 3 points</strong>. The full long question is worth 10. Continue through the remaining rows, including the other features requested on the graph, before recording a total. If you redraw the price guide, you can see the correction immediately: the quantity stays put while the price label moves up.</p>
</section>
<section className="card prose-card" id="how-do-i-combine-the-long-and-short-frqs">
<h2>How do I combine the long and short FRQs?</h2>
<p>One long question makes up half the FRQ section. Each of the two short questions makes up a quarter. AP Score Tools uses three separate fields worth 10, 5, and 5 raw points. Suppose your finished paper earns <strong>7/10, 3/5, and 4/5</strong>. That adds to <strong>14/20</strong>, which contributes <strong>21 of 30</strong> weighted FRQ points in the tool’s 90-point model. <a href="https://apcentral.collegeboard.org/courses/ap-microeconomics/exam">College Board exam format</a></p>
<p>With <strong>42/60 MCQs</strong>, your estimated composite is <strong>63/90</strong>. If correcting that price earns one additional long-question point, enter 8 instead of 7. The estimate becomes <strong>64.5/90</strong>. That gives you a specific practice target for your next monopoly problem: mark the output on the horizontal axis before drawing the price guide. <Link href="/ap-microeconomics-score-calculator/">Estimate your AP Microeconomics score</Link></p>
</section>
    </ScoringArticle>
  );
}

# AGENTS.md — AP Score Tools

## Project Overview

AP Score Tools is a free, unofficial educational tool website for U.S. AP students.

Domain:
- https://www.apscoretools.com/

Core positioning:
- AP score calculator cluster
- Subject-specific AP score estimators
- Student-friendly AP scoring guides
- AP exam date / score release informational pages

The brand name is always:

AP Score Tools

Do not write the brand as:
- APES Score Calculator
- AP Score Calculator
- AP Calculator Tools

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GitHub
- Vercel
- Cloudflare DNS

Local project directory:
- `/Users/sunyuyang/Documents/apscoretools`

GitHub repo:
- `apscoretools`

Vercel project:
- `apscoretools`

## Compliance Requirements

AP Score Tools is unofficial.

Never claim:
- official
- guaranteed
- exact score
- endorsed by College Board
- affiliated with College Board

Use compliant wording:
- estimated
- unofficial
- approximate
- may vary by year
- based on available scoring structure
- official score conversions may differ

Required disclaimer language:

AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board. AP, Advanced Placement, and related exam names are trademarks of their respective owners. Calculator results are estimates only.

Do not overuse the disclaimer. It should appear once globally near the page bottom or footer. Avoid repeating the same disclaimer inside calculator result cards.

## Current Live Tools

Live calculator pages:

1. AP Environmental Science Score Calculator
   URL:
   `/ap-environmental-science-score-calculator/`

   Scoring model:
   - MCQ raw score: 0–80
   - FRQ total: 0–30
   - MCQ scaled: /78
   - FRQ scaled: /52
   - Composite score: /130

   Estimated AP score ranges:
   - 5: 96–130
   - 4: 77–95
   - 3: 68–76
   - 2: 50–67
   - 1: 0–49

2. AP Chemistry Score Calculator
   URL:
   `/ap-chemistry-score-calculator/`

   Scoring model:
   - MCQ raw score: 0–60
   - FRQ total raw score: 0–46
   - MCQ scaled: /50
   - FRQ scaled: /50
   - Composite score: /100

   Estimated AP score ranges:
   - 5: 75–100
   - 4: 60–74
   - 3: 45–59
   - 2: 30–44
   - 1: 0–29

3. AP Human Geography Score Calculator
   URL:
   `/ap-human-geography-score-calculator/`

4. AP Macroeconomics Score Calculator
   URL:
   `/ap-macroeconomics-score-calculator/`

5. AP World History Score Calculator
   URL:
   `/ap-world-history-score-calculator/`

The last three were recently added and should be verified carefully before being treated as fully stable.

## Coming Soon Tools

Coming Soon pages must be clearly labeled. Do not make them appear like live calculators.

Current Coming Soon pages include:

- AP Biology Score Calculator
- AP Calculus AB Score Calculator
- AP English Language / AP Lang Score Calculator
- APUSH Score Calculator

Coming Soon pages may include:
- short description
- expected calculator purpose
- related live tools
- email/waitlist CTA if available

They must not include fake interactive calculators unless the real scoring logic is implemented.

## Existing Important Pages

- Homepage:
  `/`

- AP Score Calculators Hub:
  `/ap-score-calculators/`

- AP Environmental Science Score Calculator:
  `/ap-environmental-science-score-calculator/`

- AP Chemistry Score Calculator:
  `/ap-chemistry-score-calculator/`

- AP Human Geography Score Calculator:
  `/ap-human-geography-score-calculator/`

- AP Macroeconomics Score Calculator:
  `/ap-macroeconomics-score-calculator/`

- AP World History Score Calculator:
  `/ap-world-history-score-calculator/`

- How AP Environmental Science Is Scored:
  `/how-ap-environmental-science-is-scored/`

- About:
  `/about/`

- Privacy Policy:
  `/privacy-policy/`

- Terms of Use:
  `/terms-of-use/`

## Current SEO Strategy

Primary cluster:
- AP score calculator
- AP score calculators
- AP score calculator by subject
- AP Environmental Science score calculator
- APES score calculator
- AP Chemistry score calculator
- AP Human Geography score calculator
- AP Macroeconomics score calculator
- AP World History score calculator

Secondary seasonal clusters:
- AP exam schedule 2026
- AP test dates 2026
- AP testing dates 2026
- AP score release date 2026
- when do AP scores come out 2026
- what time do AP scores come out
- how to check AP scores
- AP scores not showing

Do not chase unrelated “AP” keywords that refer to non-U.S. Advanced Placement exams.

Avoid:
- AP EAMCET counselling dates
- AP EAMCET result
- AP Inter results
- unrelated Indian state exam queries
- SAT pages for now unless the site intentionally expands beyond AP

## Current SEO Status

Known ranking / discovery signals include:
- homepage indexed
- APES page indexed
- GSC has recorded clicks
- SEMrush has found Top 100 keywords

Known keyword appearances:
- ap score calculator
- ap enviro calculator
- apes score calculator
- apes score calculator 2026
- ap chem score calculator
- calculating ap scores
- aphug calculator
- apwh score calculator

Current strategy:
- Do not blindly generate dozens of thin AP subject pages.
- Prioritize improving existing live tools and the AP calculators hub.
- Use APES and AP Chemistry as quality benchmarks.
- Expand subject pages only when the calculator logic is real or clearly marked Coming Soon.
- Use seasonal AP score release pages to capture June–July demand and route users back to calculators.

## Current UX / UI Priorities

Before adding many new pages, improve the existing site.

### 1. AP Score Calculators Hub

Page:
`/ap-score-calculators/`

Fix:
- Hero title and description should be centered.
- Eyebrow, H1, description, and note should use consistent max-width and centered layout.
- Avoid left-heavy or visually uneven sections.

Recommended hero style:
- wrapper: `mx-auto max-w-5xl px-4 pt-16 pb-10 text-center sm:px-6 lg:px-8`
- H1: `mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl`
- description: `mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600`
- note: `mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500`

### 2. Browse Calculators by Category

The current section should not look like a mixed plain list.

Redesign it into category cards.

Recommended categories:
- Science
- History & Social Science
- Math & Computer Science
- English

Each category card should include:
- category title
- short description
- calculator links
- clear status badge: Live or Coming Soon

Live tools:
- AP Environmental Science
- AP Chemistry
- AP Human Geography
- AP Macroeconomics
- AP World History

Coming Soon:
- AP Biology
- AP Calculus AB
- AP English Language
- APUSH

Use clean cards:
- rounded corners
- subtle border
- light shadow
- clear spacing
- separate rows for each tool

### 3. Header Navigation

The `Calculators` nav item should have a dropdown menu.

Desktop dropdown:
- Group 1: Live Calculators
- Group 2: Coming Soon
- Bottom CTA: View All AP Score Calculators →

Mobile menu:
- Show the same grouped structure.
- Do not rely on hover behavior on mobile.

Keep dropdown:
- clean
- rounded
- readable
- accessible
- not too crowded

### 4. Homepage “Why Students Use AP Score Tools”

Current issue:
- section feels left-heavy
- empty space makes the layout look unfinished

Update to:
- centered heading
- short centered description
- 3 feature cards

Suggested cards:
1. Subject-specific calculators
2. Clear 1–5 score estimates
3. Unofficial, student-friendly guidance

Use:
- `max-w-6xl`
- centered section intro
- `grid gap-5 md:grid-cols-3`
- rounded cards with subtle border and shadow

### 5. Calculator Result UX

Problem:
The text below appears twice on calculator pages:

“This is an unofficial estimate. Official AP score conversions may vary by year based on exam difficulty and official scoring.”

Fix:
- Keep global disclaimer once near footer/page bottom.
- Remove duplicate generic disclaimer from calculator result cards.
- Replace calculator result message with score-specific guidance.

Reusable function:

```ts
export function getScoreMessage(score: number) {
  switch (score) {
    case 5:
      return {
        title: "Excellent estimated result",
        body: "Your estimated score is in the 5 range. This usually suggests very strong performance across the exam sections, but official score conversions can still vary by year.",
      };
    case 4:
      return {
        title: "Strong estimated result",
        body: "Your estimated score is in the 4 range. This is generally a solid AP performance, though the final official score depends on the exam’s yearly scoring conversion.",
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
    default:
      return {
        title: "Needs more practice",
        body: "Your estimated score is in the 1 range. Use the section breakdown to identify weak areas and build a more focused study plan.",
      };
  }
}

Apply this to all live calculators:

AP Environmental Science
AP Chemistry
AP Human Geography
AP Macroeconomics
AP World History
Page Style Standards

Use consistent site-wide visual language.

Preferred style:

clean
student-friendly
lightweight
modern
not over-designed
calculator-first where appropriate

Layout standards:

most informational pages should have centered hero sections
calculator pages may use calculator-first sections, but the title and intro should still feel balanced
avoid large empty left/right gaps
avoid overly dense button clusters
use clear card separation instead of mixed list blocks

Recommended Tailwind patterns:

outer container: mx-auto max-w-6xl px-4 sm:px-6 lg:px-8
small content container: mx-auto max-w-3xl
page hero: text-center
cards: rounded-3xl border border-slate-200 bg-white p-6 shadow-sm
live badge: emerald tone
coming soon badge: slate tone
primary CTA: dark slate or brand accent
secondary CTA: light bordered button
Internal Linking Rules

Every major informational page should link back to:

/ap-score-calculators/
relevant live calculator pages
related AP guide/date/release pages

Every live calculator page should link to:

AP Score Calculators Hub
at least 2 related calculators
at least 1 relevant guide page if available

Every Coming Soon page should link to:

AP Score Calculators Hub
live alternatives
related AP content

Do not create orphan pages.

Seasonal Page Planning

After existing UI and calculator pages are improved, build the AP score release cluster.

Priority pages:

/when-do-ap-scores-come-out-2026/
Main keyword:

when do AP scores come out 2026

Also target:

when do AP scores come out
when are AP scores released 2026
AP scores 2026
AP score release date

/ap-score-release-date-2026/
Main keyword:

AP score release date 2026

Page angle:

timeline
release date
what students should do before scores are released

/how-to-check-ap-scores/
Main keyword:

how to check AP scores

Evergreen page.
Must clearly point users to College Board for official score checking and AP Score Tools for unofficial estimation.

/what-time-do-ap-scores-come-out/
Main keyword:

what time do AP scores come out

Be careful:

do not invent a specific release hour
say exact access time may vary
direct users to their College Board account

/ap-scores-not-showing/
Main keyword:

AP scores not showing

Page angle:

score delay
login issue
late testing
missing score
what to do next

/ap-score-send-deadline-2026/
Main keyword:

AP score send deadline 2026

Page angle:

free score send
sending scores to colleges
what happens after deadline

Later subject release pages:

/ap-environmental-science-score-release-2026/
/ap-chemistry-score-release-2026/
/ap-human-geography-score-release-2026/
/ap-macroeconomics-score-release-2026/
/ap-world-history-score-release-2026/

Only create subject pages when they are connected to real live tools or clearly marked as informational.

Content Rules

Use concise, student-friendly English.

Tone:

clear
helpful
calm
not too promotional
not overly academic

Avoid:

keyword stuffing
exaggerated claims
fake precision
thin pages
pretending to be official
overusing “College Board” in a way that suggests affiliation

Preferred CTA language:

Estimate Your AP Score
Try an AP Score Calculator
View All AP Score Calculators
Estimate Your Score Before Results Come Out
See Available AP Score Calculators

Avoid CTA language:

Check Official AP Scores Here
Get Your Exact AP Score
Guaranteed AP Score Prediction
Metadata Rules

Each page should have:

unique title
unique meta description
canonical URL if applicable
clear H1
structured headings

Do not duplicate title/meta across pages.

For calculator pages:
Title pattern:
AP [Subject] Score Calculator | AP Score Tools

Meta description pattern:
Use this free, unofficial AP [Subject] Score Calculator to estimate your AP score from raw section scores and review a simple score breakdown.

For score release pages:
Title pattern:
When Do AP Scores Come Out in 2026? | AP Score Tools

Meta description pattern:
Find out when AP scores come out in 2026, how to check your AP results, and how to estimate your AP score before official scores are released.

Analytics

GA4 Measurement ID:

G-GYGCPYW88K

GA4 still needs verification.

Target events:

calculator_start
calculator_input_change
calculator_result_view
homepage_calculator_switch
view_detailed_breakdown
scoring_guide_click
calculator_hub_click
coming_soon_subject_click

When modifying calculators, avoid breaking event tracking.

QA Checklist

Before pushing changes:

Run build.
Run lint if configured.
Check all live calculator pages manually.
Confirm no calculator page repeats the same unofficial disclaimer twice.
Confirm calculator result message changes based on estimated score.
Confirm header dropdown works on desktop.
Confirm mobile menu shows Live and Coming Soon groups.
Confirm /ap-score-calculators/ hero is centered.
Confirm Browse Calculators by Category is card-based and readable.
Confirm homepage Why Students section is balanced and no longer left-heavy.
Confirm Coming Soon pages are clearly labeled.
Confirm all internal links work.
Confirm no AP EAMCET / unrelated AP exam pages are introduced.
Confirm sitemap includes new pages if pages are added.
Confirm robots settings do not block important pages.
Current Priority

Do not add many new SEO pages before fixing existing UI consistency.

Current priority order:

Fix existing page styles and layout consistency.
Improve header calculator navigation.
Fix duplicate calculator disclaimer.
Add score-specific result messages.
Verify all live calculators work.
Then create AP score release / July demand pages.
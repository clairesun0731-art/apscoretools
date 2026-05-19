# AGENTS.md — AP Score Tools

## Project Overview

This project is a Next.js App Router website for **AP Score Tools**.

Production domain:

https://www.apscoretools.com

Brand name:

**AP Score Tools**

Core positioning:

AP Score Tools provides free, unofficial AP score calculators and exam tools for students.

The first live tool is:

**AP Environmental Science Score Calculator**

Important: APES is only the first calculator tool. The overall website brand is **AP Score Tools**, not **APES Score Calculator** and not **AP Score Calculator**.

The site should eventually expand into a cluster of AP score calculators and AP exam tools.

---

## Current Site Architecture

Current live routes:

```text
/
Homepage / AP Score Tools hub

/ap-environmental-science-score-calculator/
Dedicated AP Environmental Science Score Calculator page

/about/
About and disclaimer page

/sitemap.xml
Generated sitemap

/robots.txt
Generated robots file

Future planned routes:

/ap-biology-score-calculator/
/ap-chemistry-score-calculator/
/ap-psychology-score-calculator/
/ap-statistics-score-calculator/
/ap-calculus-ab-score-calculator/
/ap-english-language-score-calculator/
/apush-score-calculator/
/ap-world-history-score-calculator/

Do not create all future pages unless explicitly asked. If shown on the homepage, mark them clearly as Coming soon.

Brand Logic

Use this hierarchy:

Brand: AP Score Tools
Homepage: AP score tools hub
First live tool: AP Environmental Science Score Calculator
Future: more AP score calculators and AP exam tools

Avoid misleading copy such as:

Estimate any AP exam score
All AP score calculators are available
Choose from every AP subject
AP Score Calculator 2026 as the main homepage H1

Preferred homepage positioning:

Free AP Score Tools for Students
Start with our AP Environmental Science score calculator. More AP score calculators are coming soon.

Acceptable phrases:

AP score tools
AP exam score tools
Start with AP Environmental Science
More AP score calculators are coming soon
First live tool: APES
Legal and Disclaimer Requirements

This site must always be positioned as unofficial.

Do not imply affiliation with College Board.

Required disclaimer language, or close variation:

AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board. AP, Advanced Placement, and related exam names are trademarks of their respective owners. Calculator results are estimates only.

For calculator pages, include:

This AP Environmental Science score calculator is unofficial. It uses estimated score boundaries based on publicly available AP exam structures and past scoring patterns. Official AP scores are determined by the College Board and may vary by year.

Do not use phrases such as:

Official AP score calculator
College Board calculator
Guaranteed AP score
Exact AP score prediction

Use:

unofficial
estimated
predicted
score estimate
estimated score boundaries
Homepage Requirements

The homepage should be tool-first, but not misleading.

The homepage should directly show the first available calculator instead of forcing users to click a CTA button.

Above the fold should include:

Header with AP Score Tools branding
H1: Free AP Score Tools for Students
Short subtitle
Trust/disclaimer line
Badges
Direct AP Environmental Science Score Calculator component
Disclaimer

Recommended homepage H1:

Free AP Score Tools for Students

Recommended homepage subtitle:

Start with our AP Environmental Science score calculator. Enter your MCQ and FRQ raw scores to get an unofficial AP score estimate from 1 to 5. More AP score calculators are coming soon.

Recommended trust line:

Unofficial AP score estimates · Built for students · Not affiliated with the College Board

Recommended badges:

First live tool: APES
MCQ + FRQ
Free to use
2026 estimate

The homepage calculator card should be titled:

AP Environmental Science Score Calculator

Add supporting copy:

This is our first live AP score calculator. More subjects, including AP Biology, AP Chemistry, AP Psychology, and AP Statistics, are planned.

Do not make users click a button before using the first calculator.

APES Calculator Page Requirements

Dedicated route:

/ap-environmental-science-score-calculator/

Target keywords:

apes score calculator
ap environmental science score calculator
apes score calculator 2026
ap environmental science score calculator 2026
apes calculator
apes score predictor
apes score chart
ap environmental science score predictor

SEO title:

AP Environmental Science Score Calculator 2026 | APES Score Predictor

Meta description:

Estimate your AP Environmental Science score with our free APES score calculator. Enter your MCQ and FRQ raw scores to predict your unofficial AP score from 1 to 5.

H1:

AP Environmental Science Score Calculator 2026

The APES page can be more specific than the homepage.

It should include:

Calculator above the fold
Disclaimer
How this calculator works
AP Environmental Science exam format
Estimated APES score chart
What score do you need for a 3, 4, or 5?
FAQ
Related AP score calculators
Calculator Logic

Inputs:

Multiple Choice Score: 0–80
FRQ 1 Score: 0–10
FRQ 2 Score: 0–10
FRQ 3 Score: 0–10

Default values:

MCQ: 60
FRQ 1: 7
FRQ 2: 7
FRQ 3: 7

Calculation:

MCQ weighted percentage = (mcq / 80) * 60
FRQ weighted percentage = ((frq1 + frq2 + frq3) / 30) * 40
Composite percentage = MCQ weighted percentage + FRQ weighted percentage

Estimated AP score boundaries:

5: 75% and above
4: 60% to 74.9%
3: 45% to 59.9%
2: 30% to 44.9%
1: below 30%

Output should show:

Predicted AP Score
Estimated Composite Percentage
MCQ Contribution
FRQ Contribution
Points away from next score band
Short feedback message

Feedback messages:

5: Strong 5 range based on this estimate.
4: You are in the estimated 4 range. Improve your MCQ or FRQ score to move closer to a 5.
3: You are in the estimated passing range. A few more raw points could move you closer to a 4.
2 or 1: You may need more review to reach the passing range.

Implementation requirements:

Clamp invalid values to min and max
Format percentages to one decimal place
Make the calculator mobile-friendly
Avoid horizontal scrolling
Use accessible labels
Use "use client" only in the calculator component when possible
UI Style Guide

The site should feel like:

Clean academic tool
Student-friendly
Lightweight
Trustworthy
Practical
Not childish
Not corporate SaaS
Not official College Board

Visual direction:

Light background
Soft blue / lavender surfaces
Dark navy text
Purple / indigo accent
Rounded calculator cards
Subtle borders
Soft shadows
Minimal CTA buttons

Color palette:

--background: #F8FAFF;
--background-soft: #F3F0FF;
--card: #FFFFFF;

--text-main: #101B3D;
--text-muted: #5B6478;

--primary: #5F4BFF;
--primary-dark: #101B3D;
--primary-soft: #EEF2FF;

--accent: #7C3AED;
--accent-soft: #F1EAFF;

--border: #E4E8F5;
--success: #16A34A;
--warning: #F59E0B;

Tailwind usage examples:

bg-[#F8FAFF]
text-[#101B3D]
text-[#5B6478]
bg-[#EEF2FF]
border-[#E4E8F5]
text-[#5F4BFF]

Calculator card style:

rounded-3xl
border border-[#E4E8F5]
bg-white
shadow-[0_20px_60px_rgba(16,27,61,0.08)]

Input style:

rounded-2xl
border border-[#E4E8F5]
bg-[#F8FAFF]
text-[#101B3D]
focus:border-[#5F4BFF]
focus:ring-[#EEF2FF]

Result card style:

bg-[#101B3D]
text-white
purple accent highlight
large predicted AP score number

Avoid:

Heavy gradients
Too many CTA buttons
Corporate SaaS hero sections
Dense marketing copy
Official-looking College Board styling
Logo and Assets

Logo assets should be placed in:

public/logo-ap-score-tools-horizontal.png
public/logo-ap-score-tools-square.png
public/favicon.png
public/apple-touch-icon.png

If existing files use AP Score Calculator naming, either keep them temporarily or rename consistently to AP Score Tools.

Preferred naming going forward:

logo-ap-score-tools-horizontal.png
logo-ap-score-tools-square.png
favicon.png
apple-touch-icon.png

Use horizontal logo in the header.

Use square logo for favicon, app icon, and optional footer/social icon.

Recommended sizes:

Horizontal logo: 800×240 or 1200×360
Square logo: 512×512
favicon.png: 32×32 or 64×64
apple-touch-icon.png: 180×180

Use Next.js Image component for logo rendering.

SEO Foundation

Production domain:

https://www.apscoretools.com

Use www consistently in canonical URLs, sitemap, robots, and schema.

Required files:

app/sitemap.ts
app/robots.ts
app/layout.tsx

Sitemap routes:

https://www.apscoretools.com/
priority: 1.0
changeFrequency: weekly

https://www.apscoretools.com/ap-environmental-science-score-calculator/
priority: 0.9
changeFrequency: weekly

https://www.apscoretools.com/about/
priority: 0.5
changeFrequency: monthly

Robots:

Allow all crawlers
Sitemap: https://www.apscoretools.com/sitemap.xml

Global metadata:

metadataBase: https://www.apscoretools.com
Default title: AP Score Tools | Free AP Score Calculators and Exam Tools
Default description: AP Score Tools provides free, unofficial AP score calculators and exam tools for students. Start with the AP Environmental Science score calculator.

Homepage metadata:

Title: AP Score Tools | Free AP Score Calculators and Exam Tools
Description: Use AP Score Tools to estimate AP exam scores with free, unofficial calculators. Start with the AP Environmental Science score calculator, with more AP subjects coming soon.
Canonical: https://www.apscoretools.com/

APES page metadata:

Title: AP Environmental Science Score Calculator 2026 | APES Score Predictor
Description: Estimate your AP Environmental Science score with our free APES score calculator. Enter your MCQ and FRQ raw scores to predict your unofficial AP score from 1 to 5.
Canonical: https://www.apscoretools.com/ap-environmental-science-score-calculator/

About metadata:

Title: About AP Score Tools
Description: Learn about AP Score Tools, a free unofficial AP score calculator and exam tools website for students.
Canonical: https://www.apscoretools.com/about/

Do not add noindex.

Schema Requirements

Homepage:

WebSite schema
Organization schema

WebSite:

{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AP Score Tools",
  "url": "https://www.apscoretools.com",
  "description": "Free, unofficial AP score calculators and exam tools for students."
}

Organization:

{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AP Score Tools",
  "url": "https://www.apscoretools.com",
  "logo": "https://www.apscoretools.com/logo-ap-score-tools-square.png"
}

APES page:

FAQPage schema
SoftwareApplication schema
BreadcrumbList schema

SoftwareApplication:

{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AP Environmental Science Score Calculator",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "url": "https://www.apscoretools.com/ap-environmental-science-score-calculator/",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}

BreadcrumbList:

Home > AP Environmental Science Score Calculator

About page:

Optional WebPage schema
Internal Linking

Header links:

Home
APES Calculator
About

Footer links:

Home
AP Environmental Science Score Calculator
About

Homepage:

Link from available calculator card to /ap-environmental-science-score-calculator/
Clearly mark APES as Live
Clearly mark future calculators as Coming soon

APES page:

Add link back to homepage:
Explore AP Score Tools

About page:

Link to homepage
Link to APES calculator
Content Tone

Tone should be:

Helpful
Clear
Student-friendly
Transparent
Concise
Non-official

Avoid over-marketing.

Avoid exaggerated claims.

Use direct educational copy.

Preferred wording:

estimate
unofficial prediction
estimated score boundaries
based on exam structure
may vary by year
college credit policies vary

Avoid:

guaranteed
official
exact
approved
College Board tool
Technical Stack

Use:

Next.js App Router
TypeScript
Tailwind CSS
Static SEO-friendly pages
No backend
No database
No unnecessary dependencies

Preferred component structure:

components/Header.tsx
components/Footer.tsx
components/APESCalculator.tsx
components/DisclaimerBox.tsx
components/FAQSection.tsx
components/JsonLd.tsx

Routes:

app/page.tsx
app/layout.tsx
app/globals.css
app/sitemap.ts
app/robots.ts
app/about/page.tsx
app/ap-environmental-science-score-calculator/page.tsx

Keep server components by default.

Use client components only for interactivity, mainly:

APESCalculator.tsx
Build and Quality Checks

After changes, always run:

npm run build

Fix:

TypeScript errors
ESLint errors
Hydration errors
Metadata errors
Schema syntax errors
Broken imports
Broken image paths

Before deployment, check:

Homepage loads
APES calculator works
APES page loads
About page loads
Logo displays
Favicon displays
Sitemap works
Robots works
Mobile layout works
No horizontal overflow
No noindex tag
Canonicals use https://www.apscoretools.com

Production URLs to test:

https://www.apscoretools.com/
https://www.apscoretools.com/ap-environmental-science-score-calculator/
https://www.apscoretools.com/about/
https://www.apscoretools.com/sitemap.xml
https://www.apscoretools.com/robots.txt
Deployment Notes

Project should remain separate from B2B SEO Kit.

Correct local folder:

/Users/sunyuyang/Documents/apscoretools

Do not place it inside:

/Users/sunyuyang/Documents/b2b-seo-kit/

Expected setup:

Local folder: apscoretools
GitHub repo: apscoretools
Vercel project: apscoretools
Domain: apscoretools.com

Use www as the primary domain:

https://www.apscoretools.com

Root domain should redirect to www if configured.

Current Strategic Priority

Do not overbuild.

Current priority:

1. Make the APES calculator page useful and indexable
2. Make homepage accurate and not misleading
3. Add SEO foundation files
4. Submit sitemap to Google Search Console and Bing Webmaster Tools
5. Expand to AP Biology / AP Chemistry / AP Psychology only after APES is indexed

The site should be lightweight and tool-first.

The first success metric is:

APES calculator page indexed and getting impressions for APES-related keywords.
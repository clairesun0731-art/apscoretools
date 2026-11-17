import type { SubjectCalculatorPageProps } from "@/components/SubjectCalculatorPage";

type PageConfig = SubjectCalculatorPageProps & { title: string };

export const newCalculatorPages = {
  "ap_physics_1": {
    "calculator": {
      "ariaLabel": "AP Physics 1 Score Calculator",
      "calculatorName": "ap_physics_1_score_calculator",
      "subject": "ap_physics_1",
      "heading": "AP Physics 1 Score Calculator",
      "compositeMax": 100,
      "scoreChip": "Composite /100",
      "defaultValues": {
        "mcq": 0,
        "frq1": 0,
        "frq2": 0,
        "frq3": 0,
        "frq4": 0
      },
      "groups": [
        {
          "heading": "Multiple Choice",
          "label": "Section I",
          "fields": [
            {
              "id": "mcq",
              "label": "Multiple-choice questions correct",
              "min": 0,
              "max": 42,
              "helper": "Enter the number correct, not a percentage."
            }
          ]
        },
        {
          "heading": "Free Response",
          "label": "Section II",
          "fields": [
            {
              "id": "frq1",
              "label": "Mathematical routines",
              "min": 0,
              "max": 10,
              "helper": "Enter earned rubric points out of 10."
            },
            {
              "id": "frq2",
              "label": "Translation between representations",
              "min": 0,
              "max": 12,
              "helper": "Enter earned rubric points out of 12."
            },
            {
              "id": "frq3",
              "label": "Experimental design and analysis",
              "min": 0,
              "max": 10,
              "helper": "Enter earned rubric points out of 10."
            },
            {
              "id": "frq4",
              "label": "Qualitative/quantitative translation",
              "min": 0,
              "max": 8,
              "helper": "Enter earned rubric points out of 8."
            }
          ]
        }
      ],
      "sections": [
        {
          "id": "mcq",
          "fieldIds": [
            "mcq"
          ],
          "rawLabel": "MCQ raw score",
          "rawMax": 42,
          "weightedLabel": "MCQ weighted score",
          "weightedMax": 50
        },
        {
          "id": "frq",
          "fieldIds": [
            "frq1",
            "frq2",
            "frq3",
            "frq4"
          ],
          "rawLabel": "FRQ raw score",
          "rawMax": 40,
          "weightedLabel": "FRQ weighted score",
          "weightedMax": 50
        }
      ],
      "scoreBands": [
        {
          "score": 5,
          "min": 70.5,
          "max": 100
        },
        {
          "score": 4,
          "min": 54.5,
          "max": 70.5
        },
        {
          "score": 3,
          "min": 40.5,
          "max": 54.5
        },
        {
          "score": 2,
          "min": 25.5,
          "max": 40.5
        },
        {
          "score": 1,
          "min": 0,
          "max": 25.5
        }
      ],
      "continuousBands": true,
      "modelNote": "For the May 2027 format: 42 MCQs and four FRQs. The 2025–2026 papers used 40 MCQs; do not enter a 40-question practice total without adjusting the format."
    },
    "calculatorTitle": "AP Physics 1 Score Calculator",
    "chartTitle": "AP Physics 1 Estimated Score Chart",
    "title": "AP Physics 1 Score Calculator | AP Score Tools",
    "description": "Estimate your AP Physics 1 score from raw section points. See weighted scores, an unofficial 1–5 estimate and the scoring assumptions.",
    "heroEyebrow": "Free AP score calculator",
    "h1": "AP Physics 1 Score Calculator",
    "subtitle": "Enter your practice scores to estimate your AP Physics 1 result and see which section offers room to improve.",
    "jsonLdName": "AP Physics 1 Score Calculator",
    "keywords": [
      "AP Physics 1 Score Calculator",
      "AP Physics 1 score predictor"
    ],
    "url": "https://www.apscoretools.com/ap-physics-1-score-calculator/",
    "howItWorks": [
      "This tool helps you review practice performance in algebra-based mechanics, energy, rotation and fluids. Score written work with its matching rubric before entering points.",
      "(MCQ raw score / 42) × 50 + (FRQ raw score / 40) × 50.",
      "For example, half of the available points in every section produces a composite of 50/100. This is a weighted total, not a percentile ranking.",
      "The displayed 1–5 result uses the linked third-party planning thresholds, not an official current-year conversion. Values are compared before display rounding. Treat results close to a boundary as uncertain."
    ],
    "examIntro": [
      "For the May 2027 format: 42 MCQs and four FRQs. The 2025–2026 papers used 40 MCQs; do not enter a 40-question practice total without adjusting the format."
    ],
    "examFormat": [
      {
        "section": "MCQ raw score",
        "detail": "Up to 42 raw points",
        "weight": "50.0%"
      },
      {
        "section": "FRQ raw score",
        "detail": "Up to 40 raw points",
        "weight": "50.0%"
      }
    ],
    "goodScore": [
      "A 3 indicates qualified performance on the AP scale; credit and placement decisions belong to each college.",
      "For AP Physics 1, compare the requirements of your intended college and major. Use the section breakdown to choose a specific practice goal rather than treating an estimated score as a guarantee."
    ],
    "faqItems": [
      {
        "question": "Does this cover Physics 2 or Physics C?",
        "answer": "No. Physics 1 covers algebra-based mechanics and fluids. Use the separate calculators for Physics 2 or either calculus-based Physics C exam."
      },
      {
        "question": "How should I score a physics explanation?",
        "answer": "Use the rubric for your specific practice question. Award points for the reasoning, representations and calculations required by that rubric, rather than judging only the final answer."
      },
      {
        "question": "How are the two sections combined?",
        "answer": "(MCQ raw score / 42) × 50 + (FRQ raw score / 40) × 50."
      },
      {
        "question": "What composite do I need for a 5 in this model?",
        "answer": "The selected planning model begins the 5 band at 70.5 out of 100. This is a model threshold, not a guaranteed or official cut score."
      },
      {
        "question": "Can this tell me my official AP score?",
        "answer": "No. It estimates a result from the raw scores you enter. Your official result is available only through College Board; actual conversions may differ."
      }
    ],
    "relatedCalculators": [
      {
        "href": "/ap-physics-2-score-calculator/",
        "status": "live",
        "title": "AP Physics 2 Score Calculator"
      },
      {
        "href": "/ap-physics-c-mechanics-score-calculator/",
        "status": "live",
        "title": "AP Physics C: Mechanics Score Calculator"
      },
      {
        "href": "/ap-physics-c-electricity-and-magnetism-score-calculator/",
        "status": "live",
        "title": "AP Physics C: Electricity and Magnetism Score Calculator"
      }
    ],
    "relatedIntro": "Use the matching calculator for each exam. Raw points and estimate thresholds are not interchangeable across subjects.",
    "sources": [
      {
        "label": "College Board exam structure",
        "href": "https://apcentral.collegeboard.org/courses/ap-physics-1/exam"
      },
      {
        "label": "Dewey Smart published planning thresholds",
        "href": "https://www.deweysmart.com/test-prep/ap-score-calculator/physics-1"
      },
      {
        "label": "Albert calculator — comparison reference",
        "href": "https://www.albert.io/blog/ap-physics-1-score-calculator/"
      }
    ],
    "modelDescription": "Exam structure and planning thresholds last reviewed November 17, 2026. For the May 2027 format: 42 MCQs and four FRQs. The 2025–2026 papers used 40 MCQs; do not enter a 40-question practice total without adjusting the format. The estimate bands below come from the linked planning model and are not official 2027 score boundaries."
  },
  "ap_physics_2": {
    "calculator": {
      "ariaLabel": "AP Physics 2 Score Calculator",
      "calculatorName": "ap_physics_2_score_calculator",
      "subject": "ap_physics_2",
      "heading": "AP Physics 2 Score Calculator",
      "compositeMax": 100,
      "scoreChip": "Composite /100",
      "defaultValues": {
        "mcq": 0,
        "frq1": 0,
        "frq2": 0,
        "frq3": 0,
        "frq4": 0
      },
      "groups": [
        {
          "heading": "Multiple Choice",
          "label": "Section I",
          "fields": [
            {
              "id": "mcq",
              "label": "Multiple-choice questions correct",
              "min": 0,
              "max": 42,
              "helper": "Enter the number correct, not a percentage."
            }
          ]
        },
        {
          "heading": "Free Response",
          "label": "Section II",
          "fields": [
            {
              "id": "frq1",
              "label": "Mathematical routines",
              "min": 0,
              "max": 10,
              "helper": "Enter earned rubric points out of 10."
            },
            {
              "id": "frq2",
              "label": "Translation between representations",
              "min": 0,
              "max": 12,
              "helper": "Enter earned rubric points out of 12."
            },
            {
              "id": "frq3",
              "label": "Experimental design and analysis",
              "min": 0,
              "max": 10,
              "helper": "Enter earned rubric points out of 10."
            },
            {
              "id": "frq4",
              "label": "Qualitative/quantitative translation",
              "min": 0,
              "max": 8,
              "helper": "Enter earned rubric points out of 8."
            }
          ]
        }
      ],
      "sections": [
        {
          "id": "mcq",
          "fieldIds": [
            "mcq"
          ],
          "rawLabel": "MCQ raw score",
          "rawMax": 42,
          "weightedLabel": "MCQ weighted score",
          "weightedMax": 50
        },
        {
          "id": "frq",
          "fieldIds": [
            "frq1",
            "frq2",
            "frq3",
            "frq4"
          ],
          "rawLabel": "FRQ raw score",
          "rawMax": 40,
          "weightedLabel": "FRQ weighted score",
          "weightedMax": 50
        }
      ],
      "scoreBands": [
        {
          "score": 5,
          "min": 76,
          "max": 100
        },
        {
          "score": 4,
          "min": 61,
          "max": 76
        },
        {
          "score": 3,
          "min": 49,
          "max": 61
        },
        {
          "score": 2,
          "min": 36,
          "max": 49
        },
        {
          "score": 1,
          "min": 0,
          "max": 36
        }
      ],
      "continuousBands": true,
      "modelNote": "For the May 2027 format: 42 MCQs and four FRQs. The estimate reuses a published 2025 planning curve with the new MCQ denominator; it is not a verified 2027 conversion."
    },
    "calculatorTitle": "AP Physics 2 Score Calculator",
    "chartTitle": "AP Physics 2 Estimated Score Chart",
    "title": "AP Physics 2 Score Calculator | AP Score Tools",
    "description": "Estimate your AP Physics 2 score from raw section points. See weighted scores, an unofficial 1–5 estimate and the scoring assumptions.",
    "heroEyebrow": "Free AP score calculator",
    "h1": "AP Physics 2 Score Calculator",
    "subtitle": "Enter your practice scores to estimate your AP Physics 2 result and see which section offers room to improve.",
    "jsonLdName": "AP Physics 2 Score Calculator",
    "keywords": [
      "AP Physics 2 Score Calculator",
      "AP Physics 2 score predictor"
    ],
    "url": "https://www.apscoretools.com/ap-physics-2-score-calculator/",
    "howItWorks": [
      "This tool helps you review practice performance in thermodynamics, electricity, magnetism, optics and modern physics. Score written work with its matching rubric before entering points.",
      "(MCQ raw score / 42) × 50 + (FRQ raw score / 40) × 50.",
      "For example, half of the available points in every section produces a composite of 50/100. This is a weighted total, not a percentile ranking.",
      "The displayed 1–5 result uses the linked third-party planning thresholds, not an official current-year conversion. Values are compared before display rounding. Treat results close to a boundary as uncertain."
    ],
    "examIntro": [
      "For the May 2027 format: 42 MCQs and four FRQs. The estimate reuses a published 2025 planning curve with the new MCQ denominator; it is not a verified 2027 conversion."
    ],
    "examFormat": [
      {
        "section": "MCQ raw score",
        "detail": "Up to 42 raw points",
        "weight": "50.0%"
      },
      {
        "section": "FRQ raw score",
        "detail": "Up to 40 raw points",
        "weight": "50.0%"
      }
    ],
    "goodScore": [
      "A 3 indicates qualified performance on the AP scale; credit and placement decisions belong to each college.",
      "For AP Physics 2, compare the requirements of your intended college and major. Use the section breakdown to choose a specific practice goal rather than treating an estimated score as a guarantee."
    ],
    "faqItems": [
      {
        "question": "Is Physics 2 the same as Physics C: E&M?",
        "answer": "No. Physics 2 is algebra-based and also covers thermodynamics, optics and modern physics. Physics C: E&M uses calculus and has its own scoring model."
      },
      {
        "question": "Are all four FRQs worth the same raw points?",
        "answer": "No. Their maxima are 10, 12, 10 and 8. In this model the combined 40-point FRQ total contributes half of the composite."
      },
      {
        "question": "How are the two sections combined?",
        "answer": "(MCQ raw score / 42) × 50 + (FRQ raw score / 40) × 50."
      },
      {
        "question": "What composite do I need for a 5 in this model?",
        "answer": "The selected planning model begins the 5 band at 76 out of 100. This is a model threshold, not a guaranteed or official cut score."
      },
      {
        "question": "Can this tell me my official AP score?",
        "answer": "No. It estimates a result from the raw scores you enter. Your official result is available only through College Board; actual conversions may differ."
      }
    ],
    "relatedCalculators": [
      {
        "href": "/ap-physics-1-score-calculator/",
        "status": "live",
        "title": "AP Physics 1 Score Calculator"
      },
      {
        "href": "/ap-physics-c-mechanics-score-calculator/",
        "status": "live",
        "title": "AP Physics C: Mechanics Score Calculator"
      },
      {
        "href": "/ap-physics-c-electricity-and-magnetism-score-calculator/",
        "status": "live",
        "title": "AP Physics C: Electricity and Magnetism Score Calculator"
      }
    ],
    "relatedIntro": "Use the matching calculator for each exam. Raw points and estimate thresholds are not interchangeable across subjects.",
    "sources": [
      {
        "label": "College Board exam structure",
        "href": "https://apcentral.collegeboard.org/courses/ap-physics-2/exam"
      },
      {
        "label": "EduCalcPro 2025 projected score bands",
        "href": "https://educalcpro.com/calculators/ap-physics-2-score"
      },
      {
        "label": "Albert calculator — comparison reference",
        "href": "https://www.albert.io/blog/ap-physics-2-score-calculator/"
      }
    ],
    "modelDescription": "Exam structure and planning thresholds last reviewed November 17, 2026. For the May 2027 format: 42 MCQs and four FRQs. The estimate reuses a published 2025 planning curve with the new MCQ denominator; it is not a verified 2027 conversion. The estimate bands below come from the linked planning model and are not official 2027 score boundaries."
  },
  "ap_physics_c_mechanics": {
    "calculator": {
      "ariaLabel": "AP Physics C: Mechanics Score Calculator",
      "calculatorName": "ap_physics_c_mechanics_score_calculator",
      "subject": "ap_physics_c_mechanics",
      "heading": "AP Physics C: Mechanics Score Calculator",
      "compositeMax": 100,
      "scoreChip": "Composite /100",
      "defaultValues": {
        "mcq": 0,
        "frq1": 0,
        "frq2": 0,
        "frq3": 0,
        "frq4": 0
      },
      "groups": [
        {
          "heading": "Multiple Choice",
          "label": "Section I",
          "fields": [
            {
              "id": "mcq",
              "label": "Multiple-choice questions correct",
              "min": 0,
              "max": 42,
              "helper": "Enter the number correct, not a percentage."
            }
          ]
        },
        {
          "heading": "Free Response",
          "label": "Section II",
          "fields": [
            {
              "id": "frq1",
              "label": "Mathematical routines",
              "min": 0,
              "max": 10,
              "helper": "Enter earned rubric points out of 10."
            },
            {
              "id": "frq2",
              "label": "Translation between representations",
              "min": 0,
              "max": 12,
              "helper": "Enter earned rubric points out of 12."
            },
            {
              "id": "frq3",
              "label": "Experimental design and analysis",
              "min": 0,
              "max": 10,
              "helper": "Enter earned rubric points out of 10."
            },
            {
              "id": "frq4",
              "label": "Qualitative/quantitative translation",
              "min": 0,
              "max": 8,
              "helper": "Enter earned rubric points out of 8."
            }
          ]
        }
      ],
      "sections": [
        {
          "id": "mcq",
          "fieldIds": [
            "mcq"
          ],
          "rawLabel": "MCQ raw score",
          "rawMax": 42,
          "weightedLabel": "MCQ weighted score",
          "weightedMax": 50
        },
        {
          "id": "frq",
          "fieldIds": [
            "frq1",
            "frq2",
            "frq3",
            "frq4"
          ],
          "rawLabel": "FRQ raw score",
          "rawMax": 40,
          "weightedLabel": "FRQ weighted score",
          "weightedMax": 50
        }
      ],
      "scoreBands": [
        {
          "score": 5,
          "min": 60,
          "max": 100
        },
        {
          "score": 4,
          "min": 47,
          "max": 60
        },
        {
          "score": 3,
          "min": 37,
          "max": 47
        },
        {
          "score": 2,
          "min": 28,
          "max": 37
        },
        {
          "score": 1,
          "min": 0,
          "max": 28
        }
      ],
      "continuousBands": true,
      "modelNote": "For the May 2027 format: 42 MCQs and four FRQs. Older Physics C papers with 35 MCQs and three FRQs are not compatible with these inputs."
    },
    "calculatorTitle": "AP Physics C: Mechanics Score Calculator",
    "chartTitle": "AP Physics C: Mechanics Estimated Score Chart",
    "title": "AP Physics C: Mechanics Score Calculator | AP Score Tools",
    "description": "Estimate your AP Physics C: Mechanics score from raw section points. See weighted scores, an unofficial 1–5 estimate and the scoring assumptions.",
    "heroEyebrow": "Free AP score calculator",
    "h1": "AP Physics C: Mechanics Score Calculator",
    "subtitle": "Enter your practice scores to estimate your AP Physics C: Mechanics result and see which section offers room to improve.",
    "jsonLdName": "AP Physics C: Mechanics Score Calculator",
    "keywords": [
      "AP Physics C: Mechanics Score Calculator",
      "AP Physics C: Mechanics score predictor"
    ],
    "url": "https://www.apscoretools.com/ap-physics-c-mechanics-score-calculator/",
    "howItWorks": [
      "This tool helps you review practice performance in calculus-based motion, forces, energy, momentum and rotation. Score written work with its matching rubric before entering points.",
      "(MCQ raw score / 42) × 50 + (FRQ raw score / 40) × 50.",
      "For example, half of the available points in every section produces a composite of 50/100. This is a weighted total, not a percentile ranking.",
      "The displayed 1–5 result uses the linked third-party planning thresholds, not an official current-year conversion. Values are compared before display rounding. Treat results close to a boundary as uncertain."
    ],
    "examIntro": [
      "For the May 2027 format: 42 MCQs and four FRQs. Older Physics C papers with 35 MCQs and three FRQs are not compatible with these inputs."
    ],
    "examFormat": [
      {
        "section": "MCQ raw score",
        "detail": "Up to 42 raw points",
        "weight": "50.0%"
      },
      {
        "section": "FRQ raw score",
        "detail": "Up to 40 raw points",
        "weight": "50.0%"
      }
    ],
    "goodScore": [
      "A 3 indicates qualified performance on the AP scale; credit and placement decisions belong to each college.",
      "For AP Physics C: Mechanics, compare the requirements of your intended college and major. Use the section breakdown to choose a specific practice goal rather than treating an estimated score as a guarantee."
    ],
    "faqItems": [
      {
        "question": "Does this include an E&M score?",
        "answer": "No. Mechanics and Electricity and Magnetism are separate AP exams with separate results. Use the E&M calculator for that exam."
      },
      {
        "question": "Can I enter scores from a three-FRQ paper?",
        "answer": "Not directly. The current model has four FRQs worth 40 points. Use a scoring worksheet matching the older paper instead of mixing formats."
      },
      {
        "question": "How are the two sections combined?",
        "answer": "(MCQ raw score / 42) × 50 + (FRQ raw score / 40) × 50."
      },
      {
        "question": "What composite do I need for a 5 in this model?",
        "answer": "The selected planning model begins the 5 band at 60 out of 100. This is a model threshold, not a guaranteed or official cut score."
      },
      {
        "question": "Can this tell me my official AP score?",
        "answer": "No. It estimates a result from the raw scores you enter. Your official result is available only through College Board; actual conversions may differ."
      }
    ],
    "relatedCalculators": [
      {
        "href": "/ap-physics-1-score-calculator/",
        "status": "live",
        "title": "AP Physics 1 Score Calculator"
      },
      {
        "href": "/ap-physics-2-score-calculator/",
        "status": "live",
        "title": "AP Physics 2 Score Calculator"
      },
      {
        "href": "/ap-physics-c-electricity-and-magnetism-score-calculator/",
        "status": "live",
        "title": "AP Physics C: Electricity and Magnetism Score Calculator"
      }
    ],
    "relatedIntro": "Use the matching calculator for each exam. Raw points and estimate thresholds are not interchangeable across subjects.",
    "sources": [
      {
        "label": "College Board exam structure",
        "href": "https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics/exam"
      },
      {
        "label": "Fiveable projected score bands",
        "href": "https://fiveable.me/ap-physics-c-mechanics/ap-score-calculator"
      },
      {
        "label": "Albert calculator — comparison reference",
        "href": "https://www.albert.io/blog/ap-physics-c-mechanics-score-calculator/"
      }
    ],
    "modelDescription": "Exam structure and planning thresholds last reviewed November 17, 2026. For the May 2027 format: 42 MCQs and four FRQs. Older Physics C papers with 35 MCQs and three FRQs are not compatible with these inputs. The estimate bands below come from the linked planning model and are not official 2027 score boundaries."
  },
  "ap_physics_c_electricity_and_magnetism": {
    "calculator": {
      "ariaLabel": "AP Physics C: Electricity and Magnetism Score Calculator",
      "calculatorName": "ap_physics_c_electricity_and_magnetism_score_calculator",
      "subject": "ap_physics_c_electricity_and_magnetism",
      "heading": "AP Physics C: Electricity and Magnetism Score Calculator",
      "compositeMax": 100,
      "scoreChip": "Composite /100",
      "defaultValues": {
        "mcq": 0,
        "frq1": 0,
        "frq2": 0,
        "frq3": 0,
        "frq4": 0
      },
      "groups": [
        {
          "heading": "Multiple Choice",
          "label": "Section I",
          "fields": [
            {
              "id": "mcq",
              "label": "Multiple-choice questions correct",
              "min": 0,
              "max": 42,
              "helper": "Enter the number correct, not a percentage."
            }
          ]
        },
        {
          "heading": "Free Response",
          "label": "Section II",
          "fields": [
            {
              "id": "frq1",
              "label": "Mathematical routines",
              "min": 0,
              "max": 10,
              "helper": "Enter earned rubric points out of 10."
            },
            {
              "id": "frq2",
              "label": "Translation between representations",
              "min": 0,
              "max": 12,
              "helper": "Enter earned rubric points out of 12."
            },
            {
              "id": "frq3",
              "label": "Experimental design and analysis",
              "min": 0,
              "max": 10,
              "helper": "Enter earned rubric points out of 10."
            },
            {
              "id": "frq4",
              "label": "Qualitative/quantitative translation",
              "min": 0,
              "max": 8,
              "helper": "Enter earned rubric points out of 8."
            }
          ]
        }
      ],
      "sections": [
        {
          "id": "mcq",
          "fieldIds": [
            "mcq"
          ],
          "rawLabel": "MCQ raw score",
          "rawMax": 42,
          "weightedLabel": "MCQ weighted score",
          "weightedMax": 50
        },
        {
          "id": "frq",
          "fieldIds": [
            "frq1",
            "frq2",
            "frq3",
            "frq4"
          ],
          "rawLabel": "FRQ raw score",
          "rawMax": 40,
          "weightedLabel": "FRQ weighted score",
          "weightedMax": 50
        }
      ],
      "scoreBands": [
        {
          "score": 5,
          "min": 80,
          "max": 100
        },
        {
          "score": 4,
          "min": 67,
          "max": 80
        },
        {
          "score": 3,
          "min": 48,
          "max": 67
        },
        {
          "score": 2,
          "min": 30,
          "max": 48
        },
        {
          "score": 1,
          "min": 0,
          "max": 30
        }
      ],
      "continuousBands": true,
      "modelNote": "For the May 2027 format: 42 MCQs and four FRQs. This uses Fiveable’s published planning bands. Some older competitor projections are substantially more generous; neither is an official conversion."
    },
    "calculatorTitle": "AP Physics C: Electricity and Magnetism Score Calculator",
    "chartTitle": "AP Physics C: Electricity and Magnetism Estimated Score Chart",
    "title": "AP Physics C: Electricity and Magnetism Score Calculator | AP Score Tools",
    "description": "Estimate your AP Physics C: Electricity and Magnetism score from raw section points. See weighted scores, an unofficial 1–5 estimate and the scoring assumptions.",
    "heroEyebrow": "Free AP score calculator",
    "h1": "AP Physics C: Electricity and Magnetism Score Calculator",
    "subtitle": "Enter your practice scores to estimate your AP Physics C: Electricity and Magnetism result and see which section offers room to improve.",
    "jsonLdName": "AP Physics C: Electricity and Magnetism Score Calculator",
    "keywords": [
      "AP Physics C: Electricity and Magnetism Score Calculator",
      "AP Physics C: Electricity and Magnetism score predictor"
    ],
    "url": "https://www.apscoretools.com/ap-physics-c-electricity-and-magnetism-score-calculator/",
    "howItWorks": [
      "This tool helps you review practice performance in calculus-based electric fields, circuits, magnetic fields and induction. Score written work with its matching rubric before entering points.",
      "(MCQ raw score / 42) × 50 + (FRQ raw score / 40) × 50.",
      "For example, half of the available points in every section produces a composite of 50/100. This is a weighted total, not a percentile ranking.",
      "The displayed 1–5 result uses the linked third-party planning thresholds, not an official current-year conversion. Values are compared before display rounding. Treat results close to a boundary as uncertain."
    ],
    "examIntro": [
      "For the May 2027 format: 42 MCQs and four FRQs. This uses Fiveable’s published planning bands. Some older competitor projections are substantially more generous; neither is an official conversion."
    ],
    "examFormat": [
      {
        "section": "MCQ raw score",
        "detail": "Up to 42 raw points",
        "weight": "50.0%"
      },
      {
        "section": "FRQ raw score",
        "detail": "Up to 40 raw points",
        "weight": "50.0%"
      }
    ],
    "goodScore": [
      "A 3 indicates qualified performance on the AP scale; credit and placement decisions belong to each college.",
      "For AP Physics C: Electricity and Magnetism, compare the requirements of your intended college and major. Use the section breakdown to choose a specific practice goal rather than treating an estimated score as a guarantee."
    ],
    "faqItems": [
      {
        "question": "Why can this differ from Albert’s E&M estimate?",
        "answer": "Competitors use different projected curves, sometimes carried forward from older exam formats. This page links its chosen planning curve and displays every threshold so the difference is visible."
      },
      {
        "question": "Should I combine my Mechanics and E&M raw scores?",
        "answer": "No. Enter only Electricity and Magnetism scores. Each Physics C exam receives its own AP score."
      },
      {
        "question": "How are the two sections combined?",
        "answer": "(MCQ raw score / 42) × 50 + (FRQ raw score / 40) × 50."
      },
      {
        "question": "What composite do I need for a 5 in this model?",
        "answer": "The selected planning model begins the 5 band at 80 out of 100. This is a model threshold, not a guaranteed or official cut score."
      },
      {
        "question": "Can this tell me my official AP score?",
        "answer": "No. It estimates a result from the raw scores you enter. Your official result is available only through College Board; actual conversions may differ."
      }
    ],
    "relatedCalculators": [
      {
        "href": "/ap-physics-1-score-calculator/",
        "status": "live",
        "title": "AP Physics 1 Score Calculator"
      },
      {
        "href": "/ap-physics-2-score-calculator/",
        "status": "live",
        "title": "AP Physics 2 Score Calculator"
      },
      {
        "href": "/ap-physics-c-mechanics-score-calculator/",
        "status": "live",
        "title": "AP Physics C: Mechanics Score Calculator"
      }
    ],
    "relatedIntro": "Use the matching calculator for each exam. Raw points and estimate thresholds are not interchangeable across subjects.",
    "sources": [
      {
        "label": "College Board exam structure",
        "href": "https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism/exam"
      },
      {
        "label": "Fiveable projected score bands",
        "href": "https://fiveable.me/ap-physics-c-e-m/ap-score-calculator"
      },
      {
        "label": "Albert calculator — comparison reference",
        "href": "https://www.albert.io/blog/ap-physics-c-e-and-m-score-calculator/"
      }
    ],
    "modelDescription": "Exam structure and planning thresholds last reviewed November 17, 2026. For the May 2027 format: 42 MCQs and four FRQs. This uses Fiveable’s published planning bands. Some older competitor projections are substantially more generous; neither is an official conversion. The estimate bands below come from the linked planning model and are not official 2027 score boundaries."
  },
  "ap_computer_science_a": {
    "calculator": {
      "ariaLabel": "AP Computer Science A Score Calculator",
      "calculatorName": "ap_computer_science_a_score_calculator",
      "subject": "ap_computer_science_a",
      "heading": "AP Computer Science A Score Calculator",
      "compositeMax": 100,
      "scoreChip": "Composite /100",
      "defaultValues": {
        "mcq": 0,
        "frq1": 0,
        "frq2": 0,
        "frq3": 0,
        "frq4": 0
      },
      "groups": [
        {
          "heading": "Multiple Choice",
          "label": "Section I",
          "fields": [
            {
              "id": "mcq",
              "label": "Multiple-choice questions correct",
              "min": 0,
              "max": 42,
              "helper": "Enter the number correct, not a percentage."
            }
          ]
        },
        {
          "heading": "Free Response",
          "label": "Section II",
          "fields": [
            {
              "id": "frq1",
              "label": "Methods and control structures",
              "min": 0,
              "max": 7,
              "helper": "Enter earned rubric points out of 7."
            },
            {
              "id": "frq2",
              "label": "Class design",
              "min": 0,
              "max": 7,
              "helper": "Enter earned rubric points out of 7."
            },
            {
              "id": "frq3",
              "label": "Data analysis with ArrayList",
              "min": 0,
              "max": 5,
              "helper": "Enter earned rubric points out of 5."
            },
            {
              "id": "frq4",
              "label": "2D array",
              "min": 0,
              "max": 6,
              "helper": "Enter earned rubric points out of 6."
            }
          ]
        }
      ],
      "sections": [
        {
          "id": "mcq",
          "fieldIds": [
            "mcq"
          ],
          "rawLabel": "MCQ raw score",
          "rawMax": 42,
          "weightedLabel": "MCQ weighted score",
          "weightedMax": 55
        },
        {
          "id": "frq",
          "fieldIds": [
            "frq1",
            "frq2",
            "frq3",
            "frq4"
          ],
          "rawLabel": "FRQ raw score",
          "rawMax": 25,
          "weightedLabel": "FRQ weighted score",
          "weightedMax": 45
        }
      ],
      "scoreBands": [
        {
          "score": 5,
          "min": 78,
          "max": 100
        },
        {
          "score": 4,
          "min": 58.8,
          "max": 78
        },
        {
          "score": 3,
          "min": 47,
          "max": 58.8
        },
        {
          "score": 2,
          "min": 37,
          "max": 47
        },
        {
          "score": 1,
          "min": 0,
          "max": 37
        }
      ],
      "continuousBands": true,
      "modelNote": "Uses the revised format introduced for the 2026 exam: 42 MCQs, 55% MCQ weight and 25 FRQ points worth 45%. Older 40-MCQ, four-nine-point-FRQ papers need their own worksheet."
    },
    "calculatorTitle": "AP Computer Science A Score Calculator",
    "chartTitle": "AP Computer Science A Estimated Score Chart",
    "title": "AP Computer Science A Score Calculator | AP Score Tools",
    "description": "Estimate your AP Computer Science A score from raw section points. See weighted scores, an unofficial 1–5 estimate and the scoring assumptions.",
    "heroEyebrow": "Free AP score calculator",
    "h1": "AP Computer Science A Score Calculator",
    "subtitle": "Enter your practice scores to estimate your AP Computer Science A result and see which section offers room to improve.",
    "jsonLdName": "AP Computer Science A Score Calculator",
    "keywords": [
      "AP Computer Science A Score Calculator",
      "AP Computer Science A score predictor"
    ],
    "url": "https://www.apscoretools.com/ap-computer-science-a-score-calculator/",
    "howItWorks": [
      "This tool helps you review practice performance in Java methods, classes, ArrayList data analysis and two-dimensional arrays. Score written work with its matching rubric before entering points.",
      "(MCQ raw score / 42) × 55 + (FRQ raw score / 25) × 45.",
      "For example, 21/42 MCQs and 15/25 FRQ points produce 27.5 + 27 = 54.5/100. Equal raw totals do not imply equal section contributions.",
      "The displayed 1–5 result uses the linked third-party planning thresholds, not an official current-year conversion. Values are compared before display rounding. Treat results close to a boundary as uncertain."
    ],
    "examIntro": [
      "Uses the revised format introduced for the 2026 exam: 42 MCQs, 55% MCQ weight and 25 FRQ points worth 45%. Older 40-MCQ, four-nine-point-FRQ papers need their own worksheet."
    ],
    "examFormat": [
      {
        "section": "MCQ raw score",
        "detail": "Up to 42 raw points",
        "weight": "55.0%"
      },
      {
        "section": "FRQ raw score",
        "detail": "Up to 25 raw points",
        "weight": "45.0%"
      }
    ],
    "goodScore": [
      "A 3 indicates qualified performance on the AP scale; credit and placement decisions belong to each college.",
      "For AP Computer Science A, compare the requirements of your intended college and major. Use the section breakdown to choose a specific practice goal rather than treating an estimated score as a guarantee."
    ],
    "faqItems": [
      {
        "question": "Why are the FRQ maxima 7, 7, 5 and 6?",
        "answer": "These are the revised question point totals. Do not enter old nine-point FRQ scores into these fields; score work against the matching current rubric."
      },
      {
        "question": "Is a percentage in my Java class enough to predict an AP score?",
        "answer": "No. Classroom grades may include homework, projects and participation. Enter raw points from an exam-format practice set for a more useful estimate."
      },
      {
        "question": "How are the two sections combined?",
        "answer": "(MCQ raw score / 42) × 55 + (FRQ raw score / 25) × 45."
      },
      {
        "question": "What composite do I need for a 5 in this model?",
        "answer": "The selected planning model begins the 5 band at 78 out of 100. This is a model threshold, not a guaranteed or official cut score."
      },
      {
        "question": "Can this tell me my official AP score?",
        "answer": "No. It estimates a result from the raw scores you enter. Your official result is available only through College Board; actual conversions may differ."
      }
    ],
    "relatedCalculators": [
      {
        "href": "/ap-computer-science-principles-score-calculator/",
        "status": "live",
        "title": "AP Computer Science Principles Score Calculator"
      },
      {
        "href": "/ap-statistics-score-calculator/",
        "status": "live",
        "title": "AP Statistics Score Calculator"
      }
    ],
    "relatedIntro": "Use the matching calculator for each exam. Raw points and estimate thresholds are not interchangeable across subjects.",
    "sources": [
      {
        "label": "College Board exam structure",
        "href": "https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam"
      },
      {
        "label": "Dewey Smart published planning thresholds",
        "href": "https://www.deweysmart.com/test-prep/ap-score-calculator/computer-science-a"
      }
    ],
    "modelDescription": "Exam structure and planning thresholds last reviewed November 17, 2026. Uses the revised format introduced for the 2026 exam: 42 MCQs, 55% MCQ weight and 25 FRQ points worth 45%. Older 40-MCQ, four-nine-point-FRQ papers need their own worksheet. The estimate bands below come from the linked planning model and are not official 2027 score boundaries."
  },
  "ap_computer_science_principles": {
    "calculator": {
      "ariaLabel": "AP Computer Science Principles Score Calculator",
      "calculatorName": "ap_computer_science_principles_score_calculator",
      "subject": "ap_computer_science_principles",
      "heading": "AP Computer Science Principles Score Calculator",
      "compositeMax": 100,
      "scoreChip": "Composite /100",
      "defaultValues": {
        "mcq": 0,
        "frq1": 0
      },
      "groups": [
        {
          "heading": "Multiple Choice",
          "label": "Section I",
          "fields": [
            {
              "id": "mcq",
              "label": "Multiple-choice questions correct",
              "min": 0,
              "max": 70,
              "helper": "Enter the number correct, not a percentage."
            }
          ]
        },
        {
          "heading": "Create Task and Written Responses",
          "label": "Section II",
          "fields": [
            {
              "id": "frq1",
              "label": "Create task and written responses — rubric total",
              "min": 0,
              "max": 6,
              "helper": "Enter earned rubric points out of 6."
            }
          ]
        }
      ],
      "sections": [
        {
          "id": "mcq",
          "fieldIds": [
            "mcq"
          ],
          "rawLabel": "MCQ raw score",
          "rawMax": 70,
          "weightedLabel": "MCQ weighted score",
          "weightedMax": 70
        },
        {
          "id": "frq",
          "fieldIds": [
            "frq1"
          ],
          "rawLabel": "Create + written responses raw score",
          "rawMax": 6,
          "weightedLabel": "Create + written responses weighted score",
          "weightedMax": 30
        }
      ],
      "scoreBands": [
        {
          "score": 5,
          "min": 84.5,
          "max": 100
        },
        {
          "score": 4,
          "min": 73,
          "max": 84.5
        },
        {
          "score": 3,
          "min": 57.5,
          "max": 73
        },
        {
          "score": 2,
          "min": 43.5,
          "max": 57.5
        },
        {
          "score": 1,
          "min": 0,
          "max": 43.5
        }
      ],
      "continuousBands": true,
      "modelNote": "Applies to the current format through the May 2027 exam, not the announced 2027–2028 course redesign. The Create input is an estimated six-point rubric total, including the written responses; it is not a completion checkbox."
    },
    "calculatorTitle": "AP Computer Science Principles Score Calculator",
    "chartTitle": "AP Computer Science Principles Estimated Score Chart",
    "title": "AP Computer Science Principles Score Calculator | AP Score Tools",
    "description": "Estimate your AP Computer Science Principles score from raw section points. See weighted scores, an unofficial 1–5 estimate and the scoring assumptions.",
    "heroEyebrow": "Free AP score calculator",
    "h1": "AP Computer Science Principles Score Calculator",
    "subtitle": "Enter your practice scores to estimate your AP Computer Science Principles result and see which section offers room to improve.",
    "jsonLdName": "AP Computer Science Principles Score Calculator",
    "keywords": [
      "AP Computer Science Principles Score Calculator",
      "AP Computer Science Principles score predictor"
    ],
    "url": "https://www.apscoretools.com/ap-computer-science-principles-score-calculator/",
    "howItWorks": [
      "This tool helps you review practice performance in computational thinking, data, algorithms, networks and the Create performance task. Score written work with its matching rubric before entering points.",
      "(MCQ raw score / 70) × 70 + (Create + written responses raw score / 6) × 30.",
      "For example, half of the available points in every section produces a composite of 50/100. This is a weighted total, not a percentile ranking.",
      "The displayed 1–5 result uses the linked third-party planning thresholds, not an official current-year conversion. Values are compared before display rounding. Treat results close to a boundary as uncertain."
    ],
    "examIntro": [
      "Applies to the current format through the May 2027 exam, not the announced 2027–2028 course redesign. The Create input is an estimated six-point rubric total, including the written responses; it is not a completion checkbox."
    ],
    "examFormat": [
      {
        "section": "MCQ raw score",
        "detail": "Up to 70 raw points",
        "weight": "70.0%"
      },
      {
        "section": "Create + written responses raw score",
        "detail": "Up to 6 raw points",
        "weight": "30.0%"
      }
    ],
    "goodScore": [
      "A 3 indicates qualified performance on the AP scale; credit and placement decisions belong to each college.",
      "For AP Computer Science Principles, compare the requirements of your intended college and major. Use the section breakdown to choose a specific practice goal rather than treating an estimated score as a guarantee."
    ],
    "faqItems": [
      {
        "question": "Does submitting my Create project guarantee six points?",
        "answer": "No. Submission and scoring are different. Estimate earned rubric points using the relevant scoring guidelines, including the exam-day written responses."
      },
      {
        "question": "Do the written responses count separately from the Create component?",
        "answer": "The Create task and written responses together contribute the modeled 30% component. Do not count those points twice."
      },
      {
        "question": "Can I use this for the redesigned 2028 exam?",
        "answer": "No. This model covers the current format through May 2027 and must be reviewed before use with the redesigned course."
      },
      {
        "question": "How are the two sections combined?",
        "answer": "(MCQ raw score / 70) × 70 + (Create + written responses raw score / 6) × 30."
      },
      {
        "question": "What composite do I need for a 5 in this model?",
        "answer": "The selected planning model begins the 5 band at 84.5 out of 100. This is a model threshold, not a guaranteed or official cut score."
      },
      {
        "question": "Can this tell me my official AP score?",
        "answer": "No. It estimates a result from the raw scores you enter. Your official result is available only through College Board; actual conversions may differ."
      }
    ],
    "relatedCalculators": [
      {
        "href": "/ap-computer-science-a-score-calculator/",
        "status": "live",
        "title": "AP Computer Science A Score Calculator"
      },
      {
        "href": "/ap-statistics-score-calculator/",
        "status": "live",
        "title": "AP Statistics Score Calculator"
      }
    ],
    "relatedIntro": "Use the matching calculator for each exam. Raw points and estimate thresholds are not interchangeable across subjects.",
    "sources": [
      {
        "label": "College Board exam structure",
        "href": "https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam"
      },
      {
        "label": "Dewey Smart published planning thresholds",
        "href": "https://www.deweysmart.com/test-prep/ap-score-calculator/computer-science-principles"
      }
    ],
    "modelDescription": "Exam structure and planning thresholds last reviewed November 17, 2026. Applies to the current format through the May 2027 exam, not the announced 2027–2028 course redesign. The Create input is an estimated six-point rubric total, including the written responses; it is not a completion checkbox. The estimate bands below come from the linked planning model and are not official 2027 score boundaries."
  },
  "ap_microeconomics": {
    "calculator": {
      "ariaLabel": "AP Microeconomics Score Calculator",
      "calculatorName": "ap_microeconomics_score_calculator",
      "subject": "ap_microeconomics",
      "heading": "AP Microeconomics Score Calculator",
      "compositeMax": 90,
      "scoreChip": "Composite /90",
      "defaultValues": {
        "mcq": 0,
        "frq1": 0,
        "frq2": 0,
        "frq3": 0
      },
      "groups": [
        {
          "heading": "Multiple Choice",
          "label": "Section I",
          "fields": [
            {
              "id": "mcq",
              "label": "Multiple-choice questions correct",
              "min": 0,
              "max": 60,
              "helper": "Enter the number correct, not a percentage."
            }
          ]
        },
        {
          "heading": "Free Response",
          "label": "Section II",
          "fields": [
            {
              "id": "frq1",
              "label": "Long free-response question",
              "min": 0,
              "max": 10,
              "helper": "Enter earned rubric points out of 10."
            },
            {
              "id": "frq2",
              "label": "Short free-response question 1",
              "min": 0,
              "max": 5,
              "helper": "Enter earned rubric points out of 5."
            },
            {
              "id": "frq3",
              "label": "Short free-response question 2",
              "min": 0,
              "max": 5,
              "helper": "Enter earned rubric points out of 5."
            }
          ]
        }
      ],
      "sections": [
        {
          "id": "mcq",
          "fieldIds": [
            "mcq"
          ],
          "rawLabel": "MCQ raw score",
          "rawMax": 60,
          "weightedLabel": "MCQ weighted score",
          "weightedMax": 60
        },
        {
          "id": "frq",
          "fieldIds": [
            "frq1",
            "frq2",
            "frq3"
          ],
          "rawLabel": "FRQ raw score",
          "rawMax": 20,
          "weightedLabel": "FRQ weighted score",
          "weightedMax": 30
        }
      ],
      "scoreBands": [
        {
          "score": 5,
          "min": 73.98,
          "max": 90
        },
        {
          "score": 4,
          "min": 60.03,
          "max": 73.98
        },
        {
          "score": 3,
          "min": 48.51,
          "max": 60.03
        },
        {
          "score": 2,
          "min": 37.53,
          "max": 48.51
        },
        {
          "score": 1,
          "min": 0,
          "max": 37.53
        }
      ],
      "continuousBands": true,
      "modelNote": "Uses a /90 composite: MCQ contributes 60 and FRQ contributes 30. The long FRQ is half of the FRQ section; each short FRQ is one quarter. Published percentage planning thresholds are converted to this /90 scale."
    },
    "calculatorTitle": "AP Microeconomics Score Calculator",
    "chartTitle": "AP Microeconomics Estimated Score Chart",
    "title": "AP Microeconomics Score Calculator | AP Score Tools",
    "description": "Estimate your AP Microeconomics score from raw section points. See weighted scores, an unofficial 1–5 estimate and the scoring assumptions.",
    "heroEyebrow": "Free AP score calculator",
    "h1": "AP Microeconomics Score Calculator",
    "subtitle": "Enter your practice scores to estimate your AP Microeconomics result and see which section offers room to improve.",
    "jsonLdName": "AP Microeconomics Score Calculator",
    "keywords": [
      "AP Microeconomics Score Calculator",
      "AP Microeconomics score predictor"
    ],
    "url": "https://www.apscoretools.com/ap-microeconomics-score-calculator/",
    "howItWorks": [
      "This tool helps you review practice performance in markets, elasticity, firm behavior, factor markets and market failure. Score written work with its matching rubric before entering points.",
      "(MCQ raw score / 60) × 60 + (FRQ raw score / 20) × 30.",
      "For example, 30 MCQs and 10/20 FRQ points produce 30 + 15 = 45/90.",
      "The displayed 1–5 result uses the linked third-party planning thresholds, not an official current-year conversion. Values are compared before display rounding. Treat results close to a boundary as uncertain."
    ],
    "examIntro": [
      "Uses a /90 composite: MCQ contributes 60 and FRQ contributes 30. The long FRQ is half of the FRQ section; each short FRQ is one quarter. Published percentage planning thresholds are converted to this /90 scale."
    ],
    "examFormat": [
      {
        "section": "MCQ raw score",
        "detail": "Up to 60 raw points",
        "weight": "66.67%"
      },
      {
        "section": "FRQ raw score",
        "detail": "Up to 20 raw points",
        "weight": "33.33%"
      }
    ],
    "goodScore": [
      "A 3 indicates qualified performance on the AP scale; credit and placement decisions belong to each college.",
      "For AP Microeconomics, compare the requirements of your intended college and major. Use the section breakdown to choose a specific practice goal rather than treating an estimated score as a guarantee."
    ],
    "faqItems": [
      {
        "question": "Why is the composite out of 90 instead of 100?",
        "answer": "MCQ points contribute up to 60 and the 20 FRQ points are multiplied by 1.5, contributing up to 30. This preserves the two-thirds/one-third weighting."
      },
      {
        "question": "Does one long FRQ point count more than one short FRQ point?",
        "answer": "With the 10/5/5 rubric used here, each raw FRQ point adds 1.5 composite points. The long question has twice as many possible points as either short question."
      },
      {
        "question": "How are the two sections combined?",
        "answer": "(MCQ raw score / 60) × 60 + (FRQ raw score / 20) × 30."
      },
      {
        "question": "What composite do I need for a 5 in this model?",
        "answer": "The selected planning model begins the 5 band at 73.98 out of 90. This is a model threshold, not a guaranteed or official cut score."
      },
      {
        "question": "Can this tell me my official AP score?",
        "answer": "No. It estimates a result from the raw scores you enter. Your official result is available only through College Board; actual conversions may differ."
      }
    ],
    "relatedCalculators": [
      {
        "href": "/ap-macroeconomics-score-calculator/",
        "status": "live",
        "title": "AP Macroeconomics Score Calculator"
      },
      {
        "href": "/ap-world-history-score-calculator/",
        "status": "live",
        "title": "AP World History Score Calculator"
      },
      {
        "href": "/ap-us-history-score-calculator/",
        "status": "live",
        "title": "AP U.S. History Score Calculator"
      }
    ],
    "relatedIntro": "Use the matching calculator for each exam. Raw points and estimate thresholds are not interchangeable across subjects.",
    "sources": [
      {
        "label": "College Board exam structure",
        "href": "https://apcentral.collegeboard.org/courses/ap-microeconomics/exam"
      },
      {
        "label": "Dewey Smart published planning thresholds",
        "href": "https://www.deweysmart.com/test-prep/ap-score-calculator/microeconomics"
      }
    ],
    "modelDescription": "Exam structure and planning thresholds last reviewed November 17, 2026. Uses a /90 composite: MCQ contributes 60 and FRQ contributes 30. The long FRQ is half of the FRQ section; each short FRQ is one quarter. Published percentage planning thresholds are converted to this /90 scale. The estimate bands below come from the linked planning model and are not official 2027 score boundaries."
  },
  "ap_european_history": {
    "calculator": {
      "ariaLabel": "AP European History Score Calculator",
      "calculatorName": "ap_european_history_score_calculator",
      "subject": "ap_european_history",
      "heading": "AP European History Score Calculator",
      "compositeMax": 100,
      "scoreChip": "Composite /100",
      "defaultValues": {
        "mcq": 0,
        "frq1": 0,
        "frq2": 0,
        "frq3": 0,
        "frq4": 0,
        "frq5": 0
      },
      "groups": [
        {
          "heading": "Multiple Choice",
          "label": "Section I",
          "fields": [
            {
              "id": "mcq",
              "label": "Multiple-choice questions correct",
              "min": 0,
              "max": 55,
              "helper": "Enter the number correct, not a percentage."
            }
          ]
        },
        {
          "heading": "Free Response",
          "label": "Section II",
          "fields": [
            {
              "id": "frq1",
              "label": "Short-answer question 1",
              "min": 0,
              "max": 3,
              "helper": "Enter earned rubric points out of 3."
            },
            {
              "id": "frq2",
              "label": "Short-answer question 2",
              "min": 0,
              "max": 3,
              "helper": "Enter earned rubric points out of 3."
            },
            {
              "id": "frq3",
              "label": "Short-answer question 3",
              "min": 0,
              "max": 3,
              "helper": "Enter earned rubric points out of 3."
            },
            {
              "id": "frq4",
              "label": "Document-based question (DBQ)",
              "min": 0,
              "max": 7,
              "helper": "Enter earned rubric points out of 7."
            },
            {
              "id": "frq5",
              "label": "Long essay question (LEQ)",
              "min": 0,
              "max": 6,
              "helper": "Enter earned rubric points out of 6."
            }
          ]
        }
      ],
      "sections": [
        {
          "id": "mcq",
          "fieldIds": [
            "mcq"
          ],
          "rawLabel": "MCQ raw score",
          "rawMax": 55,
          "weightedLabel": "MCQ weighted score",
          "weightedMax": 40
        },
        {
          "id": "saq",
          "fieldIds": [
            "frq1",
            "frq2",
            "frq3"
          ],
          "rawLabel": "SAQ raw score",
          "rawMax": 9,
          "weightedLabel": "SAQ weighted score",
          "weightedMax": 20
        },
        {
          "id": "dbq",
          "fieldIds": [
            "frq4"
          ],
          "rawLabel": "DBQ raw score",
          "rawMax": 7,
          "weightedLabel": "DBQ weighted score",
          "weightedMax": 25
        },
        {
          "id": "leq",
          "fieldIds": [
            "frq5"
          ],
          "rawLabel": "LEQ raw score",
          "rawMax": 6,
          "weightedLabel": "LEQ weighted score",
          "weightedMax": 15
        }
      ],
      "scoreBands": [
        {
          "score": 5,
          "min": 74.6,
          "max": 100
        },
        {
          "score": 4,
          "min": 61.5,
          "max": 74.6
        },
        {
          "score": 3,
          "min": 48.5,
          "max": 61.5
        },
        {
          "score": 2,
          "min": 33.8,
          "max": 48.5
        },
        {
          "score": 1,
          "min": 0,
          "max": 33.8
        }
      ],
      "continuousBands": true,
      "modelNote": "Uses the May 2027 exam structure. All three SAQs and one LEQ are required. College Board states that the scoring rubrics are unchanged; this model retains the 3/3/3, 7 and 6 raw-point maxima."
    },
    "calculatorTitle": "AP European History Score Calculator",
    "chartTitle": "AP European History Estimated Score Chart",
    "title": "AP European History Score Calculator | AP Score Tools",
    "description": "Estimate your AP European History score from raw section points. See weighted scores, an unofficial 1–5 estimate and the scoring assumptions.",
    "heroEyebrow": "Free AP score calculator",
    "h1": "AP European History Score Calculator",
    "subtitle": "Enter your practice scores to estimate your AP European History result and see which section offers room to improve.",
    "jsonLdName": "AP European History Score Calculator",
    "keywords": [
      "AP European History Score Calculator",
      "AP European History score predictor"
    ],
    "url": "https://www.apscoretools.com/ap-european-history-score-calculator/",
    "howItWorks": [
      "This tool helps you review practice performance in European historical evidence, document analysis and written arguments. Score written work with its matching rubric before entering points.",
      "(MCQ raw score / 55) × 40 + (SAQ raw score / 9) × 20 + (DBQ raw score / 7) × 25 + (LEQ raw score / 6) × 15.",
      "For example, 33/55 MCQs, 6/9 SAQ points, 4/7 DBQ points and 3/6 LEQ points produce about 59.12/100. The essay sections must be weighted separately.",
      "The displayed 1–5 result uses the linked third-party planning thresholds, not an official current-year conversion. Values are compared before display rounding. Treat results close to a boundary as uncertain."
    ],
    "examIntro": [
      "Uses the May 2027 exam structure. All three SAQs and one LEQ are required. College Board states that the scoring rubrics are unchanged; this model retains the 3/3/3, 7 and 6 raw-point maxima."
    ],
    "examFormat": [
      {
        "section": "MCQ raw score",
        "detail": "Up to 55 raw points",
        "weight": "40.0%"
      },
      {
        "section": "SAQ raw score",
        "detail": "Up to 9 raw points",
        "weight": "20.0%"
      },
      {
        "section": "DBQ raw score",
        "detail": "Up to 7 raw points",
        "weight": "25.0%"
      },
      {
        "section": "LEQ raw score",
        "detail": "Up to 6 raw points",
        "weight": "15.0%"
      }
    ],
    "goodScore": [
      "A 3 indicates qualified performance on the AP scale; credit and placement decisions belong to each college.",
      "For AP European History, compare the requirements of your intended college and major. Use the section breakdown to choose a specific practice goal rather than treating an estimated score as a guarantee."
    ],
    "faqItems": [
      {
        "question": "Should I add DBQ and LEQ points before entering them?",
        "answer": "No. Enter them separately: the DBQ has a 25% weight and the LEQ has a 15% weight, despite having similar raw-point totals."
      },
      {
        "question": "What changed for the 2027 history exam?",
        "answer": "All three source-based short answers are required, and there is one required long-essay prompt. The scoring rubrics remain unchanged; check the linked College Board update before using older practice instructions."
      },
      {
        "question": "How are the two sections combined?",
        "answer": "(MCQ raw score / 55) × 40 + (SAQ raw score / 9) × 20 + (DBQ raw score / 7) × 25 + (LEQ raw score / 6) × 15."
      },
      {
        "question": "What composite do I need for a 5 in this model?",
        "answer": "The selected planning model begins the 5 band at 74.6 out of 100. This is a model threshold, not a guaranteed or official cut score."
      },
      {
        "question": "Can this tell me my official AP score?",
        "answer": "No. It estimates a result from the raw scores you enter. Your official result is available only through College Board; actual conversions may differ."
      }
    ],
    "relatedCalculators": [
      {
        "href": "/ap-macroeconomics-score-calculator/",
        "status": "live",
        "title": "AP Macroeconomics Score Calculator"
      },
      {
        "href": "/ap-world-history-score-calculator/",
        "status": "live",
        "title": "AP World History Score Calculator"
      },
      {
        "href": "/ap-us-history-score-calculator/",
        "status": "live",
        "title": "AP U.S. History Score Calculator"
      }
    ],
    "relatedIntro": "Use the matching calculator for each exam. Raw points and estimate thresholds are not interchangeable across subjects.",
    "sources": [
      {
        "label": "College Board exam structure",
        "href": "https://apcentral.collegeboard.org/courses/ap-european-history/exam"
      },
      {
        "label": "Dewey Smart published planning thresholds",
        "href": "https://www.deweysmart.com/test-prep/ap-score-calculator/european-history"
      },
      {
        "label": "College Board 2027 history exam updates",
        "href": "https://apcentral.collegeboard.org/courses/ap-history-exam-updates"
      }
    ],
    "modelDescription": "Exam structure and planning thresholds last reviewed November 17, 2026. Uses the May 2027 exam structure. All three SAQs and one LEQ are required. College Board states that the scoring rubrics are unchanged; this model retains the 3/3/3, 7 and 6 raw-point maxima. The estimate bands below come from the linked planning model and are not official 2027 score boundaries."
  }
} satisfies Record<string, PageConfig>;

import type { MetadataRoute } from "next";

const lastModified = new Date("2026-05-20T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.apscoretools.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.apscoretools.com/ap-score-calculators/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.apscoretools.com/ap-environmental-science-score-calculator/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.apscoretools.com/how-ap-environmental-science-is-scored/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.apscoretools.com/ap-biology-score-calculator/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.apscoretools.com/ap-chemistry-score-calculator/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.apscoretools.com/ap-calculus-ab-score-calculator/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.apscoretools.com/ap-lang-score-calculator/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.apscoretools.com/apush-score-calculator/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.apscoretools.com/about/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.apscoretools.com/privacy-policy/",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.apscoretools.com/terms-of-use/",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

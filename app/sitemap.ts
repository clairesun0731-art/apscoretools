import type { MetadataRoute } from "next";

const lastModified = new Date("2026-05-19T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.apscoretools.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.apscoretools.com/ap-environmental-science-score-calculator/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.apscoretools.com/about/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}

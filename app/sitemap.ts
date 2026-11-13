import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-11-13",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/works", priority: 0.9, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
    { path: "/tech-stack", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ondotappliance.com";
  const now = new Date().toISOString();
  const items: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  LOCATIONS.forEach(l => items.push({ url: `${base}/location/${l.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }));
  SERVICES.forEach(s => items.push({ url: `${base}/service/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.75 }));
  for (const l of LOCATIONS) for (const s of SERVICES)
    items.push({ url: `${base}/location/${l.slug}/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.85 });

  const blogDir = path.join(process.cwd(), "src/content/blog");
  if (fs.existsSync(blogDir)) {
    fs.readdirSync(blogDir)
      .filter(f => f.endsWith(".mdx"))
      .forEach(f => items.push({ url: `${base}/blog/${f.replace(/\.mdx$/, "")}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 }));
  }

  return items;
}

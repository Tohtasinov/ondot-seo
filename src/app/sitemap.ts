import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ondotappliance.com";
  const now = new Date().toISOString();

  const items: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${base}/locations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7
    },
  ];

  // Locations
  LOCATIONS.forEach(loc =>
    items.push({
      url: `${base}/location/${loc.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    })
  );

  // Services
  SERVICES.forEach(s =>
    items.push({
      url: `${base}/service/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75
    })
  );

  // Location + service pages
  LOCATIONS.forEach(loc => {
    SERVICES.forEach(s => {
      items.push({
        url: `${base}/location/${loc.slug}/${s.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85
      });
    });
  });

  return items;
}

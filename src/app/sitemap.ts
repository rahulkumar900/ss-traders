import { MetadataRoute } from "next";
import { INVENTORY, TARGET_CITIES, slugify } from "@/data/inventory";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ssconstructionsandtraders.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/products",
    "/services",
    "/locations",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic pSEO routes
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  INVENTORY.forEach((item) => {
    TARGET_CITIES.forEach((city) => {
      dynamicRoutes.push({
        url: `${baseUrl}/buy-${slugify(item.name)}-in-${slugify(city)}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    });
  });

  return [...staticRoutes, ...dynamicRoutes];
}

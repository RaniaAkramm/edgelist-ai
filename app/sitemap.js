import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const staticRoutes = ["", "/tools", "/categories", "/submit", "/about", "/privacy", "/terms"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.7
    })
  );

  const toolRoutes = tools.map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6
  }));

  const categoryRoutes = categories.map((cat) => ({
    url: `${SITE_URL}/categories/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5
  }));

  return [...staticRoutes, ...toolRoutes, ...categoryRoutes];
}

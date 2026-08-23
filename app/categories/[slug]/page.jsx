import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolCard from "@/components/ToolCard";
import { categories, getCategory } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategory(params.slug);
  if (!category) return buildMetadata({ title: "Category not found", path: `/categories/${params.slug}` });

  return buildMetadata({
    title: category.name,
    description: category.description,
    path: `/categories/${category.slug}`
  });
}

export default function CategoryDetailPage({ params }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const items = getToolsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Breadcrumbs items={[{ label: "Categories", href: "/categories" }, { label: category.name }]} />

      <h1 className="mt-6 font-display text-3xl font-bold">{category.name}</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">{category.description}</p>

      <div className="mt-10 border-t border-line">
        {items.length > 0 ? (
          items.map((tool, i) => <ToolCard key={tool.slug} tool={tool} index={i} />)
        ) : (
          <p className="py-12 text-center text-sm text-muted">
            No tools listed in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}

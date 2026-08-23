import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingBadge from "@/components/PricingBadge";
import Rating from "@/components/Rating";
import { tools, getTool } from "@/data/tools";
import { getCategory } from "@/data/categories";
import { buildMetadata } from "@/lib/seo";
import { statusLabel } from "@/lib/utils";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }) {
  const tool = getTool(params.slug);
  if (!tool) return buildMetadata({ title: "Tool not found", path: `/tools/${params.slug}` });

  return buildMetadata({
    title: tool.name,
    description: tool.tagline,
    path: `/tools/${tool.slug}`
  });
}

export default function ToolDetailPage({ params }) {
  const tool = getTool(params.slug);
  if (!tool) notFound();

  const category = getCategory(tool.category);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: category?.name ?? "Uncategorized", href: category ? `/categories/${category.slug}` : undefined },
          { label: tool.name }
        ]}
      />

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-3xl font-bold">{tool.name}</h1>
        <span className="font-mono text-xs uppercase tracking-wide text-muted">
          {statusLabel(tool.status)}
        </span>
      </div>

      <p className="mt-3 text-lg text-muted">{tool.tagline}</p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <PricingBadge pricing={tool.pricing} />
        <Rating value={tool.rating} />
        {category && (
          <Link href={`/categories/${category.slug}`} className="font-mono text-xs uppercase tracking-wide text-edge hover:underline">
            {category.name}
          </Link>
        )}
      </div>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper/90">{tool.description}</p>

      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="mt-10 inline-block rounded-sm border border-edge/50 bg-edge/10 px-6 py-3 font-mono text-xs uppercase tracking-wide text-edge transition-colors hover:bg-edge/20"
      >
        Visit {tool.name} →
      </a>
    </div>
  );
}

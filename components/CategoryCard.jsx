import Link from "next/link";
import { getToolsByCategory } from "@/data/tools";

export default function CategoryCard({ category }) {
  const count = getToolsByCategory(category.slug).length;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex flex-col justify-between rounded-sm border border-line p-6 transition-colors hover:border-edge/50 hover:bg-edge/5"
    >
      <div>
        <p className="font-display text-lg font-semibold group-hover:text-edge">{category.name}</p>
        <p className="mt-2 text-sm text-muted">{category.description}</p>
      </div>
      <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">
        {count} {count === 1 ? "tool" : "tools"} listed
      </p>
    </Link>
  );
}

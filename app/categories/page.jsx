import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Categories",
  description: "Browse AI tools by category — writing, coding, image, video, and more.",
  path: "/categories"
});

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-3xl font-bold">Categories</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Every entry in the ledger sits in exactly one category, so you can scan by the job
        you're trying to do.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <CategoryCard key={cat.slug} category={cat} />
        ))}
      </div>
    </div>
  );
}

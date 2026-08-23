import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import CategoryCard from "@/components/CategoryCard";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";

export default function HomePage() {
  const featured = [...tools].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <>
      <section className="grid-bg border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-edge">
            Live ledger — updated daily
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Every AI tool worth knowing about, entered in one ledger.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted">
            No noise, no sponsored placements pretending to be rankings. Just a running
            record of what each tool does, what it costs, and whether it's still worth your
            time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tools"
              className="rounded-sm border border-edge/50 bg-edge/10 px-6 py-3 font-mono text-xs uppercase tracking-wide text-edge transition-colors hover:bg-edge/20"
            >
              Browse the ledger
            </Link>
            <Link
              href="/submit"
              className="rounded-sm border border-line px-6 py-3 font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:border-signal/50 hover:text-signal"
            >
              Submit a tool
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-xl font-semibold">Top entries this week</h2>
          <Link href="/tools" className="font-mono text-xs uppercase tracking-wide text-edge hover:underline">
            View all →
          </Link>
        </div>

        <div className="mt-6 border-t border-line">
          {featured.map((tool, i) => (
            <ToolCard key={tool.slug} tool={tool} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-line/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-xl font-semibold">Browse by category</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

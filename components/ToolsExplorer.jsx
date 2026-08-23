"use client";

import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import ToolFilters from "./ToolFilters";
import ToolCard from "./ToolCard";

export default function ToolsExplorer({ tools }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(null);
  const [pricing, setPricing] = useState(null);

  const filtered = useMemo(() => {
    return tools.filter((tool) => {
      const matchesQuery =
        !query ||
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.tagline.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || tool.category === category;
      const matchesPricing = !pricing || tool.pricing === pricing;
      return matchesQuery && matchesCategory && matchesPricing;
    });
  }, [tools, query, category, pricing]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:max-w-sm">
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </div>

      <div className="mt-4">
        <ToolFilters
          activeCategory={category}
          onCategoryChange={setCategory}
          activePricing={pricing}
          onPricingChange={setPricing}
        />
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-wide text-muted">
        {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
      </p>

      <div className="mt-2 border-t border-line">
        {filtered.length > 0 ? (
          filtered.map((tool, i) => <ToolCard key={tool.slug} tool={tool} index={i} />)
        ) : (
          <p className="py-12 text-center text-sm text-muted">
            No entries match. Try clearing a filter — or submit the tool you're looking for.
          </p>
        )}
      </div>
    </div>
  );
}

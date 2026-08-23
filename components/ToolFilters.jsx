"use client";

import { categories } from "@/data/categories";
import { classNames } from "@/lib/utils";

const pricingOptions = ["free", "freemium", "paid"];

export default function ToolFilters({ activeCategory, onCategoryChange, activePricing, onPricingChange }) {
  return (
    <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-wide">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={classNames(
            "rounded-sm border px-3 py-1.5 transition-colors",
            !activeCategory ? "border-edge/60 bg-edge/10 text-edge" : "border-line text-muted hover:text-paper"
          )}
        >
          All categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onCategoryChange(cat.slug)}
            className={classNames(
              "rounded-sm border px-3 py-1.5 transition-colors",
              activeCategory === cat.slug
                ? "border-edge/60 bg-edge/10 text-edge"
                : "border-line text-muted hover:text-paper"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onPricingChange(null)}
          className={classNames(
            "rounded-sm border px-3 py-1.5 transition-colors",
            !activePricing ? "border-signal/60 bg-signal/10 text-signal" : "border-line text-muted hover:text-paper"
          )}
        >
          Any pricing
        </button>
        {pricingOptions.map((p) => (
          <button
            key={p}
            onClick={() => onPricingChange(p)}
            className={classNames(
              "rounded-sm border px-3 py-1.5 transition-colors",
              activePricing === p
                ? "border-signal/60 bg-signal/10 text-signal"
                : "border-line text-muted hover:text-paper"
            )}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import PricingBadge from "./PricingBadge";
import Rating from "./Rating";
import { statusLabel } from "@/lib/utils";

const statusDot = {
  new: "bg-edge",
  live: "bg-muted",
  deprecated: "bg-signal/60"
};

export default function ToolCard({ tool, index }) {
  return (
    <Link href={`/tools/${tool.slug}`} className="ledger-row group">
      <span className="font-mono text-xs text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span>
        <span className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[tool.status]}`} aria-hidden />
          <span className="font-display text-base font-semibold group-hover:text-edge">
            {tool.name}
          </span>
          {tool.status !== "live" && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {statusLabel(tool.status)}
            </span>
          )}
        </span>
        <span className="mt-1 block text-sm text-muted">{tool.tagline}</span>
      </span>

      <Rating value={tool.rating} />
      <PricingBadge pricing={tool.pricing} />
    </Link>
  );
}

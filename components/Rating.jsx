import { formatRating } from "@/lib/utils";

export default function Rating({ value }) {
  return (
    <div className="flex items-center gap-1 font-mono text-xs text-muted" aria-label={`Rated ${value} out of 5`}>
      <span className="text-signal">★</span>
      <span>{formatRating(value)}</span>
    </div>
  );
}

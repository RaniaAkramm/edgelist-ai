import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-wide text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-paper">
                {item.label}
              </Link>
            ) : (
              <span className="text-paper">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

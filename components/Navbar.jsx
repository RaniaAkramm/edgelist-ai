import Link from "next/link";

const links = [
  { href: "/tools", label: "Tools" },
  { href: "/categories", label: "Categories" },
  { href: "/submit", label: "Submit" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="text-edge">/</span>
          EdgeList
          <span className="hidden font-mono text-xs font-normal text-muted sm:inline">.ai</span>
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-sm uppercase tracking-wide sm:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-muted transition-colors hover:text-paper">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/submit"
          className="rounded-sm border border-edge/50 bg-edge/10 px-4 py-2 font-mono text-xs uppercase tracking-wide text-edge transition-colors hover:bg-edge/20 sm:hidden"
        >
          Submit
        </Link>
      </div>
    </header>
  );
}

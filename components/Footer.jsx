import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-base text-paper">EdgeList.ai</p>
            <p className="mt-1 font-mono text-xs">A ledger of AI tools worth your time.</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wide">
            <Link href="/tools" className="hover:text-paper">Tools</Link>
            <Link href="/categories" className="hover:text-paper">Categories</Link>
            <Link href="/submit" className="hover:text-paper">Submit a tool</Link>
            <Link href="/about" className="hover:text-paper">About</Link>
            <Link href="/privacy" className="hover:text-paper">Privacy</Link>
            <Link href="/terms" className="hover:text-paper">Terms</Link>
          </nav>
        </div>

        <p className="mt-8 font-mono text-xs text-muted/70">
          © {new Date().getFullYear()} EdgeList. Listings are informational and do not constitute endorsement.
        </p>
      </div>
    </footer>
  );
}

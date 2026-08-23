import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms for using EdgeList and submitting tools for listing.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl font-bold">Terms of Service</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
        <p>Last updated: placeholder — replace with your actual terms before launch.</p>
        <p>
          This page is a placeholder. Cover acceptable use, that listings are informational
          and not endorsements, disclaimers of liability for third-party tools, and your
          right to remove or edit a listing.
        </p>
      </div>
    </div>
  );
}

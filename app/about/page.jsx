import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "Why EdgeList exists and how tools get verified before they're listed.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl font-bold">About EdgeList</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-paper/90">
        <p>
          EdgeList started as a private list of AI tools worth using, before it grew past a
          spreadsheet. Every entry is written and checked by hand, not scraped from a press
          release.
        </p>
        <p>
          There's no pay-to-list option. Pricing badges reflect what a tool actually charges,
          not what a sponsor tells us to say. When a tool shuts down or stops being useful,
          it's marked deprecated instead of quietly removed — the ledger is a record, not
          just a storefront.
        </p>
        <p>
          Have a tool that belongs here? Use the submit form and it'll be reviewed before it
          goes live.
        </p>
      </div>
    </div>
  );
}

import ToolsExplorer from "@/components/ToolsExplorer";
import { tools } from "@/data/tools";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All tools",
  description: "Search and filter every AI tool listed in the EdgeList ledger.",
  path: "/tools"
});

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-3xl font-bold">The ledger</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Every tool we've verified, in one running list. Filter by category or pricing, or
        search by name.
      </p>

      <div className="mt-10">
        <ToolsExplorer tools={tools} />
      </div>
    </div>
  );
}

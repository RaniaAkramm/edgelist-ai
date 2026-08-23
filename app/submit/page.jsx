import SubmitToolForm from "@/components/SubmitToolForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Submit a tool",
  description: "Add an AI tool to the EdgeList ledger for review.",
  path: "/submit"
});

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="font-display text-3xl font-bold">Submit a tool</h1>
      <p className="mt-2 text-sm text-muted">
        Tell us what it does and who it's for. We verify every entry before it appears in
        the ledger — no pay-to-list.
      </p>

      <div className="mt-10">
        <SubmitToolForm />
      </div>
    </div>
  );
}

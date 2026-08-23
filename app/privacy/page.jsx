import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How EdgeList handles data submitted through the site.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl font-bold">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
        <p>Last updated: placeholder — replace with your actual policy before launch.</p>
        <p>
          This page is a placeholder. Add details on what data you collect through the
          submit form and any analytics, how long it's kept, and who it's shared with.
        </p>
        <p>
          If you collect email addresses, IP addresses, or analytics data, describe the
          legal basis, retention period, and how people can request deletion.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { categories } from "@/data/categories";

const initialState = {
  name: "",
  url: "",
  category: categories[0]?.slug ?? "",
  pricing: "free",
  tagline: "",
  description: ""
};

export default function SubmitToolForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend wired up yet — replace with an API route or form service.
    console.log("Tool submission:", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-edge/40 bg-edge/5 p-8 text-center">
        <p className="font-display text-lg text-edge">Entry received.</p>
        <p className="mt-2 text-sm text-muted">
          {form.name || "Your tool"} is queued for review. We'll list it once it's verified.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Field label="Tool name">
        <input
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="field"
          placeholder="Draftline"
        />
      </Field>

      <Field label="URL">
        <input
          required
          type="url"
          value={form.url}
          onChange={(e) => update("url", e.target.value)}
          className="field"
          placeholder="https://example.com"
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Category">
          <select
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            className="field"
          >
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Pricing">
          <select
            value={form.pricing}
            onChange={(e) => update("pricing", e.target.value)}
            className="field"
          >
            <option value="free">Free</option>
            <option value="freemium">Freemium</option>
            <option value="paid">Paid</option>
          </select>
        </Field>
      </div>

      <Field label="One-line tagline">
        <input
          required
          maxLength={80}
          value={form.tagline}
          onChange={(e) => update("tagline", e.target.value)}
          className="field"
          placeholder="What does it do, in one sentence?"
        />
      </Field>

      <Field label="Description">
        <textarea
          required
          rows={5}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          className="field resize-none"
          placeholder="What makes this tool worth listing?"
        />
      </Field>

      <button
        type="submit"
        className="self-start rounded-sm border border-edge/50 bg-edge/10 px-6 py-3 font-mono text-xs uppercase tracking-wide text-edge transition-colors hover:bg-edge/20"
      >
        Submit for review
      </button>

      <style jsx>{`
        .field {
          background: transparent;
          border: 1px solid #1f2b2e;
          border-radius: 2px;
          padding: 0.75rem 1rem;
          font-family: inherit;
          color: inherit;
        }
        .field:focus {
          outline: 2px solid #3ddc97;
          outline-offset: 2px;
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-wide text-muted">{label}</span>
      {children}
    </label>
  );
}

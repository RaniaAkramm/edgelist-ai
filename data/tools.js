export const tools = [
  {
    slug: "draftline",
    name: "Draftline",
    tagline: "Long-form drafting with a memory of your voice.",
    description:
      "Draftline keeps a running style profile as you write, so later drafts sound like you instead of a generic assistant. Built for newsletters, essays, and client copy.",
    category: "writing",
    pricing: "freemium",
    rating: 4.6,
    status: "live",
    url: "https://example.com/draftline"
  },
  {
    slug: "loopscribe",
    name: "Loopscribe",
    tagline: "Turns meeting audio into decisions, not transcripts.",
    description:
      "Loopscribe skips the wall of text and extracts decisions, owners, and deadlines directly from recorded calls, syncing them to your task tool.",
    category: "productivity",
    pricing: "paid",
    rating: 4.3,
    status: "live",
    url: "https://example.com/loopscribe"
  },
  {
    slug: "pairforge",
    name: "Pairforge",
    tagline: "An agent that reads your whole repo before it edits.",
    description:
      "Pairforge indexes your codebase locally, then proposes changes with full context of your conventions, tests, and prior commits.",
    category: "coding",
    pricing: "freemium",
    rating: 4.8,
    status: "live",
    url: "https://example.com/pairforge"
  },
  {
    slug: "framecast",
    name: "Framecast",
    tagline: "Storyboard to rough-cut video in one pass.",
    description:
      "Describe a scene sequence and Framecast assembles a rough cut with stock and generated footage, ready for you to refine.",
    category: "video",
    pricing: "paid",
    rating: 4.1,
    status: "new",
    url: "https://example.com/framecast"
  },
  {
    slug: "paletteworks",
    name: "Paletteworks",
    tagline: "Brand-consistent image generation from a style kit.",
    description:
      "Upload a brand kit once. Paletteworks locks generations to your palette, type, and composition rules across every image after that.",
    category: "image",
    pricing: "freemium",
    rating: 4.5,
    status: "live",
    url: "https://example.com/paletteworks"
  },
  {
    slug: "citegraph",
    name: "Citegraph",
    tagline: "Research summaries with a traceable citation map.",
    description:
      "Every claim Citegraph produces links back to the exact passage it came from, so you can verify a summary in seconds, not minutes.",
    category: "research",
    pricing: "free",
    rating: 4.4,
    status: "live",
    url: "https://example.com/citegraph"
  },
  {
    slug: "shipnote",
    name: "Shipnote",
    tagline: "Changelogs written from your merged pull requests.",
    description:
      "Shipnote reads merged PRs and drafts a changelog entry in your product's tone, ready to publish or edit.",
    category: "coding",
    pricing: "freemium",
    rating: 4.2,
    status: "live",
    url: "https://example.com/shipnote"
  },
  {
    slug: "briefroom",
    name: "Briefroom",
    tagline: "Turns a rough ask into a structured creative brief.",
    description:
      "Briefroom interviews you with a handful of pointed questions, then outputs a brief a designer or writer can act on immediately.",
    category: "productivity",
    pricing: "free",
    rating: 4.0,
    status: "new",
    url: "https://example.com/briefroom"
  },
  {
    slug: "voxlayer",
    name: "Voxlayer",
    tagline: "Natural voiceover with per-line emotion control.",
    description:
      "Voxlayer lets you mark individual lines with tone and pacing, producing voiceover that doesn't sound flatly generated.",
    category: "video",
    pricing: "paid",
    rating: 4.3,
    status: "live",
    url: "https://example.com/voxlayer"
  },
  {
    slug: "inklet",
    name: "Inklet",
    tagline: "A distraction-free editor with inline rewrite passes.",
    description:
      "Select any paragraph and ask for a tighter, warmer, or more formal pass, without leaving the page you're writing on.",
    category: "writing",
    pricing: "free",
    rating: 4.5,
    status: "deprecated",
    url: "https://example.com/inklet"
  }
];

export function getTool(slug) {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(slug) {
  return tools.filter((t) => t.category === slug);
}

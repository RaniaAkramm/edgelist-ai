export const categories = [
  {
    slug: "writing",
    name: "Writing & Copy",
    description: "Drafting, editing, and long-form generation tools.",
    icon: "pen"
  },
  {
    slug: "coding",
    name: "Coding & Dev",
    description: "Assistants, agents, and copilots for shipping code.",
    icon: "code"
  },
  {
    slug: "image",
    name: "Image & Design",
    description: "Generation, editing, and visual asset tools.",
    icon: "image"
  },
  {
    slug: "video",
    name: "Video & Motion",
    description: "Editing, generation, and voice-driven video.",
    icon: "video"
  },
  {
    slug: "productivity",
    name: "Productivity",
    description: "Meeting notes, scheduling, and workflow automation.",
    icon: "bolt"
  },
  {
    slug: "research",
    name: "Research & Data",
    description: "Search, summarization, and analysis tools.",
    icon: "search"
  }
];

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

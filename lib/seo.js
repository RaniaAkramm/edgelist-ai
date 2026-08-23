const SITE_NAME = "EdgeList";
const SITE_URL = "https://edgelist.ai";

export function buildMetadata({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — The ledger of AI tools`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: ["/og-image.png"],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"]
    }
  };
}

export { SITE_NAME, SITE_URL };

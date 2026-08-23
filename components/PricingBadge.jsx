import { pricingLabel } from "@/lib/utils";

export default function PricingBadge({ pricing }) {
  const cls =
    pricing === "free" ? "tag-free" : pricing === "paid" ? "tag-paid" : "tag-freemium";

  return <span className={`tag ${cls}`}>{pricingLabel(pricing)}</span>;
}

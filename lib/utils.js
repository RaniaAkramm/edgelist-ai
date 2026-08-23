export function classNames(...args) {
  return args.filter(Boolean).join(" ");
}

export function pricingLabel(pricing) {
  switch (pricing) {
    case "free":
      return "Free";
    case "freemium":
      return "Freemium";
    case "paid":
      return "Paid";
    default:
      return pricing;
  }
}

export function statusLabel(status) {
  switch (status) {
    case "new":
      return "New";
    case "live":
      return "Live";
    case "deprecated":
      return "Deprecated";
    default:
      return status;
  }
}

export function formatRating(rating) {
  return rating.toFixed(1);
}

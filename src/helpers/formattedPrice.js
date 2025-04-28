export default function formattedPrice(price) {
    return new Intl.NumberFormat("ne-NP", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }
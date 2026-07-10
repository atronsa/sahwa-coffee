export interface HomeProduct {
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  theme: "dark" | "light";
}

export const HOME_PRODUCTS: HomeProduct[] = [
  {
    label: "Raw",
    title: "Raw. Unroasted.",
    description:
      "Hand-sorted, sun-dried beans from Ethiopian highlands shipped in hermetic bags to preserve every note.",
    cta: "Request Green Beans",
    href: "/inquiry-request",
    image: "/images/product.png",
    theme: "dark",
  },
  {
    label: "Roasted",
    title: "Roasted to Your Spec.",
    description:
      "Light, medium, or dark roasted to order, cupped for quality, available in bulk or branded retail packs.",
    cta: "Request Roasted Beans",
    href: "/inquiry-request",
    image: "/images/product.png",
    theme: "light",
  },
];

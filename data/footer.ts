export const COMPANY_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
  { label: "Inquiry", href: "/inquiry-request" },
  { label: "FAQs", href: "/faq" },
] as const;

export const MORE_LINKS = [{ label: "Certificate", href: "#" }] as const;

export const PRODUCT_LINKS = [
  { label: "Yirgacheffe", href: "/products/yirgacheffe" },
  { label: "Sidamo", href: "/products/sidamo" },
  { label: "Guji", href: "/products/guji" },
  { label: "Limu", href: "/products/limu" },
  { label: "Harrar", href: "/products/harrar" },
] as const;

/* icon: string key resolved to a component in Footer.tsx (contactIcons map) */
export const CONTACT_INFO = [
  { icon: "mapPin", label: "Bole Road, Addis Ababa, Ethiopia" },
  { icon: "phone", label: "+251-940-404-422", href: "tel:+251940404422" },
  {
    icon: "mail",
    label: "hello@sahwacoffee.com",
    href: "mailto:hello@sahwacoffee.com",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@sahwacoffee",
    icon: "tiktok",
  },
  { label: "X", href: "https://x.com/sahwacoffee", icon: "x" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sahwacoffee_",
    icon: "instagram",
  },
  { label: "Telegram", href: "https://t.me/sahwacoffee", icon: "telegram" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sahwacoffee.et",
    icon: "facebook",
  },
] as const;

export const FOOTER_COPY = {
  brandName: "Sahwa Coffee",
  tagline:
    "Bridging Ethiopian coffee farmers with the world through direct partnerships, small-batch roasting, and an unwavering commitment to quality.",
  newsletter: {
    heading: "Newsletter",
    title: "Subscribe & Stay Updated.",
    description:
      "Join our email newsletter for exclusive offers, Sahwa Coffee news, events, and first access to our most exciting releases.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
    disclaimer: "No spam. Unsubscribe anytime.",
    successTitle: "Subscribed!",
    successMessage: "You're on the list. Exciting updates coming soon.",
  },
  developedBy: {
    label: "Developed by",
    name: "Atronsa",
    href: "https://atronsa.com",
  },
  legal: [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
} as const;

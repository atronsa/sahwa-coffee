import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function iconBase(size: number | undefined, rest: SVGProps<SVGSVGElement>) {
  return {
    width: size ?? 16,
    height: size ?? 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
}

export function TikTokIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, rest)}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export function XIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, rest)}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  );
}

export function InstagramIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, rest)}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  );
}

export function TelegramIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, rest)}>
      <path d="M21.54 3.64a1.25 1.25 0 0 0-1.27-.15L3.29 9.82c-.92.36-1.08 1.31-.26 1.77l4.17 2.32 1.57 4.87c.2.58.94.72 1.33.22l2.22-2.88 4.05 2.99c.56.41 1.33.12 1.52-.57l3.78-14.24a.75.75 0 0 0-.13-.66z" />
      <path d="M9.5 12.5l.5 4.5 1-4 10-8" />
    </svg>
  );
}

export function FacebookIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, rest)}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export type SocialLink = {
  href: string;
  label: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.tiktok.com/@sahwacoffee",
    label: "TikTok",
    Icon: TikTokIcon,
  },
  { href: "https://x.com/sahwacoffee", label: "X", Icon: XIcon },
  {
    href: "https://www.instagram.com/sahwacoffee_",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  { href: "https://t.me/sahwacoffee", label: "TelegramI", Icon: TelegramIcon },
  {
    href: "https://www.facebook.com/sahwacoffee.et",
    label: "Facebook",
    Icon: FacebookIcon,
  },
];

export type ContactDetail =
  | { type: "lines"; label: string; lines: string[] }
  | { type: "text"; label: string; value: string }
  | { type: "social"; label: string };

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    type: "lines",
    label: "Call Center",
    lines: ["+251 940 404 422", "+251 929 244 144"],
  },
  {
    type: "lines",
    label: "Our Location",
    lines: ["Tirtira Building, Bole Atlas, Addis Ababa, Ethiopia"],
  },
  {
    type: "text",
    label: "Email",
    value: "hello@sahwacoffee.com",
  },
  {
    type: "social",
    label: "Social network",
  },
];

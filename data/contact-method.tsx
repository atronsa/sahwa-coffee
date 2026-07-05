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

export function FacebookIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, rest)}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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

export function LinkedInIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, rest)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function YoutubeIcon({ size, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, rest)}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 11.75a29.94 29.94 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29.94 29.94 0 0 0 .46-5.25 29.94 29.94 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export type SocialLink = {
  href: string;
  label: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "#", label: "Facebook", Icon: FacebookIcon },
  { href: "#", label: "X", Icon: XIcon },
  { href: "#", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "#", label: "YouTube", Icon: YoutubeIcon },
];

export type ContactDetail =
  | { type: "lines"; label: string; lines: string[] }
  | { type: "text"; label: string; value: string }
  | { type: "social"; label: string };

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    type: "lines",
    label: "Call Center",
    lines: ["+ (911) 111 111", "+ (922) 222 222"],
  },
  {
    type: "lines",
    label: "Our Location",
    lines: ["Ethiopia, Addid Ababa – 4 killo"],
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

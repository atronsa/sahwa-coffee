import { Target, Eye, Gem } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ValueCard = {
  id: string;
  label: string;
  icon: LucideIcon;
  content: string;
  points?: string[];
};

export const VALUES: ValueCard[] = [
  {
    id: "mission",
    label: "Mission",
    icon: Target,
    content:
      "Source the finest Ethiopian coffees through direct partnerships and deliver them at peak freshness to coffee lovers worldwide.",
  },
  {
    id: "vision",
    label: "Vision",
    icon: Eye,
    content:
      "To be the most trusted bridge between Ethiopian farmers and the global coffee community.",
  },
  {
    id: "values",
    label: "Values",
    icon: Gem,
    content: "",
    points: [
      "Quality — Never compromise on the bean.",
      "Integrity — Fair pay, real relationships.",
      "Sustainability — Protect the land and the people.",
    ],
  },
];

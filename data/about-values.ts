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
      "At Sahwa Coffee, our mission is to responsibly source and deliver exceptional Ethiopian coffee while building transparent, long-term partnerships with producers, roasters, importers, and coffee professionals worldwide. Through uncompromising quality, ethical sourcing, and continuous innovation, we aim to represent Ethiopia's coffee heritage with excellence in every shipment.",
  },
  {
    id: "vision",
    label: "Vision",
    icon: Eye,
    content:
      "Our vision is to become one of Ethiopia's most trusted and internationally recognized coffee exporters, known for premium quality, sustainable practices, and enduring relationships that contribute to the future of the global coffee industry while elevating the reputation of Ethiopian coffee worldwide.",
  },
  {
    id: "values",
    label: "Values",
    icon: Gem,
    content:
      "Our values are built on quality, integrity, sustainability, transparency, innovation, and partnership. We believe exceptional coffee begins with responsible sourcing, respect for producers, continuous improvement, and an unwavering commitment to delivering value to every customer while preserving Ethiopia's rich coffee heritage for future generations.",
  },
];

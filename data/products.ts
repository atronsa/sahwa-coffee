import { Award, Star, BadgeCheck, Package, Layers, Info } from "lucide-react";

export type Coffee = {
  id: string;
  name: string;
  price: number;
  description: string;
  story: string; // The story behind the coffee
  tastingExperience: string; // What to expect when drinking
  type: string; // roast level
  origin: string;
  region: string;
  image: string;
  altitude: string;
  process: string;
  varietal: string;
  cupNotes: string[];
  acidity: string;
  body: string;
  harvestSeason: string;
  bestFor: string[]; // recommended brew methods / use cases
};

type Grade = {
  level: string;
  tier: string;
  description: string;
  icon: React.ElementType;
};

export const COFFEES: Coffee[] = [
  {
    id: "yirgacheffe",
    name: "Ethiopian Yirgacheffe",
    price: 18.5,
    description:
      "Recognized as one of the world's most iconic coffee origins, Yirgacheffe produces exceptionally clean and delicate coffees with floral aromatics and citrus-like brightness.",
    story:
      "Grown in the Gedeo Zone of southern Ethiopia, Yirgacheffe coffee comes from smallholder farmers cultivating heirloom varietals at elevation, often under natural shade canopy. Its elegant cup profile has made it a benchmark for Ethiopian specialty coffee for decades.",
    tastingExperience:
      "A refined, tea-like cup led by jasmine and floral aromatics, with lemon and bergamot brightness and a soft stone fruit sweetness that lingers into a clean finish.",
    type: "Light Roast",
    origin: "Ethiopia",
    region: "Gedeo Zone, Ethiopia",
    image: "/images/products/1.webp",
    altitude: "1,700 - 2,200 masl",
    process: "Washed and Natural",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Jasmine", "Lemon", "Bergamot", "Stone Fruit", "Floral Tea"],
    acidity: "Bright & Citrusy",
    body: "Light & Tea-like",
    harvestSeason: "October - January",
    bestFor: ["Pour-over", "Filter", "Espresso", "V60"],
  },
  {
    id: "guji",
    name: "Ethiopian Guji",
    price: 19.0,
    description:
      "Guji is celebrated for its vibrant floral aroma, silky body, and elegant sweetness, making it highly sought after by specialty coffee roasters around the world.",
    story:
      "Grown in the highlands of southern Ethiopia's Guji Zone, this coffee is cultivated by smallholder farmers at some of the highest elevations in the country. The region's distinct microclimate and meticulous processing produce coffees prized for their bright acidity and refined complexity.",
    tastingExperience:
      "A silky, elegant cup opening with juicy peach and sweet citrus, layered with bergamot and jasmine florals, and rounded out by a delicate honey sweetness.",
    type: "Light Roast",
    origin: "Ethiopia",
    region: "Guji Zone, Oromia",
    image: "/images/products/2.webp",
    altitude: "1,800 - 2,300 masl",
    process: "Washed & Natural",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Peach", "Bergamot", "Jasmine", "Honey", "Sweet Citrus"],
    acidity: "Bright & Elegant",
    body: "Silky & Smooth",
    harvestSeason: "October - December",
    bestFor: ["Pour-over", "Filter", "Espresso", "Specialty Single Origin"],
  },
  {
    id: "sidama",
    name: "Ethiopian Sidama",
    price: 17.0,
    description:
      "Sidama coffees are full-bodied and expressive, offering layered fruit notes balanced by chocolate sweetness, with remarkable complexity and consistent quality.",
    story:
      "Sourced from the Sidama Region's rich volcanic soils, this coffee benefits from high elevations and consistent rainfall that allow cherries to mature slowly and develop deep, layered flavor.",
    tastingExperience:
      "Full-bodied and expressive, with dominant notes of berry and dark chocolate, a winey acidity, and a lingering red fruit and stone fruit finish.",
    type: "Light-Medium Roast",
    origin: "Ethiopia",
    region: "Sidama Region",
    image: "/images/products/3.webp",
    altitude: "1,500 - 2,200 masl",
    process: "Washed & Natural",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Berry", "Dark Chocolate", "Red Fruit", "Winey", "Stone Fruit"],
    acidity: "Winey & Complex",
    body: "Full & Syrupy",
    harvestSeason: "November - February",
    bestFor: ["Espresso", "French Press", "Cold Brew", "Blends"],
  },
  {
    id: "limu",
    name: "Ethiopian Limu",
    price: 16.5,
    description:
      "Limu offers a balanced and approachable cup with gentle acidity, smooth sweetness, and a clean finish, ideal for both single-origin coffees and premium espresso blends.",
    story:
      "Grown in the forested highlands of Ethiopia's Jimma Zone under dense native tree canopy, Limu coffee is produced by smallholder farmers whose careful processing yields a remarkably clean and well-balanced cup.",
    tastingExperience:
      "A gentle, approachable cup with bright citrus up front, brown sugar and caramel sweetness, and a subtle herbal, mildly spiced finish.",
    type: "Medium Roast",
    origin: "Ethiopia",
    region: "Jimma Zone, Oromia",
    image: "/images/products/4.webp",
    altitude: "1,400 - 2,000 masl",
    process: "Washed and Natural",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Citrus", "Brown Sugar", "Herbal", "Mild Spice", "Caramel"],
    acidity: "Balanced & Gentle",
    body: "Medium & Smooth",
    harvestSeason: "November - January",
    bestFor: ["Pour-over", "Drip Coffee", "Espresso Blends"],
  },
  {
    id: "harrar",
    name: "Ethiopian Harrar",
    price: 18.0,
    description:
      "One of Ethiopia's oldest coffee-growing regions, Harrar is famous for naturally processed coffees with bold fruit character and deep chocolate notes.",
    story:
      "Cultivated in the eastern highlands of East Hararge near the ancient walled city of Harar, this coffee is exclusively sun-dried using traditional natural processing passed down through generations of farmers.",
    tastingExperience:
      "Bold and heavy-bodied, with intense blueberry and dark chocolate, a warm spiced mocha character, and a distinctive wine-like finish.",
    type: "Dark Roast",
    origin: "Ethiopia",
    region: "East Hararge, Oromia",
    image: "/images/products/5.webp",
    altitude: "1,400 - 2,000 masl",
    process: "Natural (Sun-Dried)",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Blueberry", "Dark Chocolate", "Spice", "Mocha", "Winey"],
    acidity: "Low & Mellow",
    body: "Heavy & Syrupy",
    harvestSeason: "October - February",
    bestFor: ["Espresso", "Moka Pot", "Cold Brew"],
  },
  {
    id: "djimmah",
    name: "Ethiopian Djimmah",
    price: 15.5,
    description:
      "Djimmah is one of Ethiopia's largest coffee-producing regions, known for coffees with rich body, earthy complexity, and chocolate-forward character.",
    story:
      "Grown across the Jimma Zone of Oromia, Djimmah (also spelled Jimma) is one of Ethiopia's highest-volume coffee regions. Its coffees are prized by roasters for their rich, dependable body and are a staple in commercial and espresso blends worldwide.",
    tastingExperience:
      "A rich, full-bodied cup with earthy depth, dark cocoa, and nutty undertones, finished with a warm hint of spice.",
    type: "Medium-Dark Roast",
    origin: "Ethiopia",
    region: "Jimma Zone, Oromia",
    image: "/images/products/1.webp",
    altitude: "1,200 - 1,800 masl",
    process: "Natural and Washed",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Earthy", "Dark Cocoa", "Spice", "Full-bodied", "Nutty"],
    acidity: "Low & Mild",
    body: "Full & Rich",
    harvestSeason: "November - January",
    bestFor: ["Commercial Blends", "Espresso", "Instant Coffee"],
  },
  {
    id: "lekemptu",
    name: "Ethiopian Lekemptu",
    price: 16.0,
    description:
      "Nekemte coffees are vibrant and distinctive, offering fruity sweetness balanced by bold cocoa notes, increasingly popular among specialty roasters.",
    story:
      "Grown in the East Wollega Zone of western Ethiopia, Nekemte coffee is farmed by smallholders in a region historically less known than Ethiopia's southern origins, but increasingly recognized for its expressive, fruit-forward cup.",
    tastingExperience:
      "A vibrant, fruity cup with bold berry and winey character, balanced by dark chocolate depth and a full, expressive finish.",
    type: "Medium Roast",
    origin: "Ethiopia",
    region: "East Wollega, Oromia",
    image: "/images/products/6.webp",
    altitude: "1,500 - 2,100 masl",
    process: "Natural and Washed",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Fruity", "Berry", "Winey", "Dark Chocolate", "Bold"],
    acidity: "Vibrant & Fruity",
    body: "Full & Bold",
    harvestSeason: "October - December",
    bestFor: ["Single-Origin", "Espresso", "Cold Brew", "Filter Coffee"],
  },
];

export const GRADES: Grade[] = [
  {
    level: "Grade 1",
    tier: "Premium Specialty",
    description:
      "The highest classification for Ethiopian Arabica, reserved for meticulously sorted lots with minimal defects and exceptional cup quality. Sought after by specialty roasters worldwide.",
    icon: Award,
  },
  {
    level: "Grade 2",
    tier: "Specialty",
    description:
      "Clean, well-processed lots that meet specialty-grade standards with a slightly higher defect allowance than Grade 1, while still delivering distinctive cup character.",
    icon: Star,
  },
  {
    level: "Grade 3",
    tier: "High Commercial",
    description:
      "Solid, dependable coffee suited for premium commercial blends, offering good cup consistency at a more accessible price point.",
    icon: BadgeCheck,
  },
  {
    level: "Grade 4",
    tier: "Commercial",
    description:
      "Reliable everyday coffee with a higher defect tolerance, commonly used in commercial roasting programs and everyday blends.",
    icon: Package,
  },
  {
    level: "Grade 5",
    tier: "Commercial Blend",
    description:
      "Entry-level commercial grade, well suited for large-volume blending, instant coffee production, and cost-sensitive buyers.",
    icon: Layers,
  },
];

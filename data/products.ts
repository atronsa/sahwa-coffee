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
};

export const COFFEES: Coffee[] = [
  {
    id: "yirgacheffe",
    name: "Ethiopian Yirgacheffe",
    price: 18.5,
    description:
      "Bright and floral with notes of bergamot, lemon zest, and a delicate jasmine finish.",
    story:
      "From the misty highlands of Yirgacheffe in southern Ethiopia, this coffee is grown at elevations between 1,750 and 2,200 meters by smallholder farmers organized around the Yirgacheffe Coffee Farmers Cooperative Union. Each cherry is hand-picked at peak ripeness and meticulously sorted before undergoing a 36-48 hour washed fermentation and sun-drying on raised African beds.",
    tastingExperience:
      "An elegant interplay of bright citrus, delicate florals, and a lingering bergamot finish that evolves as it cools. The tea-like body makes it exceptionally clean and refreshing.",
    type: "Light Roast",
    origin: "Yirgacheffe, Ethiopia",
    region: "Gedeo Zone, Southern Ethiopia",
    image: "/images/products/1.png",
    altitude: "1,750 - 2,200m",
    process: "Washed",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Bergamot", "Lemon Zest", "Jasmine", "Black Tea"],
    acidity: "Bright & Citrusy",
    body: "Light & Tea-like",
    harvestSeason: "October - January",
  },
  {
    id: "sidamo",
    name: "Ethiopian Sidamo",
    price: 17.0,
    description:
      "Complex and vibrant with wild blueberry, dark chocolate, and a wine-like acidity.",
    story:
      "Sourced from over 600 smallholder farmers in Ethiopia's Sidama region, this coffee benefits from rich volcanic soil, consistent rainfall, and high elevations that allow cherries to mature slowly. The natural process — drying cherries whole on raised beds for 15-21 days — intensifies the fruit-forward character that Sidamo is famous for.",
    tastingExperience:
      "Bold and complex with dominant notes of wild blueberry and dark chocolate. The syrupy body carries through to a long, wine-like finish that lingers pleasantly on the palate.",
    type: "Light-Medium Roast",
    origin: "Sidamo, Ethiopia",
    region: "Sidama Region, Southern Ethiopia",
    image: "/images/products/2.png",
    altitude: "1,550 - 2,200m",
    process: "Natural",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Wild Blueberry", "Dark Chocolate", "Red Wine", "Stone Fruit"],
    acidity: "Wine-like & Complex",
    body: "Syrupy & Full",
    harvestSeason: "November - February",
  },
  {
    id: "guji",
    name: "Ethiopian Guji",
    price: 19.0,
    description:
      "Bold and fruit-forward with strawberry, peach, and a creamy milk chocolate finish.",
    story:
      "From the Guji Zone of Ethiopia's Oromia region, this coffee is grown by the Harsu Haro cooperative — 350 farmers cultivating at staggering elevations under native acacia and enset trees. An anaerobic fermentation for 72 hours followed by slow-drying intensifies the natural fruitiness while building a creamy texture.",
    tastingExperience:
      "An unmistakable burst of strawberry and ripe peach upfront, rounded out by a smooth milk chocolate body. Bright, juicy, and incredibly approachable — a standout even among Ethiopian naturals.",
    type: "Light Roast",
    origin: "Guji, Ethiopia",
    region: "Oromia Region, Southern Ethiopia",
    image: "/images/products/3.png",
    altitude: "1,800 - 2,300m",
    process: "Anaerobic Natural",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Strawberry", "Peach", "Milk Chocolate", "Cream"],
    acidity: "Juicy & Fruity",
    body: "Creamy & Round",
    harvestSeason: "October - December",
  },
  {
    id: "limu",
    name: "Ethiopian Limu",
    price: 16.5,
    description:
      "Clean and balanced with honey sweetness, orange blossom, and a hint of spice.",
    story:
      "Grown in the forested highlands of Ethiopia's Jimma Zone under a dense canopy of native trees, this lot comes from the Limu Kossa estate and surrounding outgrower farms. The washed process — 48-hour fermentation and 10-12 day raised bed drying — produces a remarkably clean and well-structured cup.",
    tastingExperience:
      "Restrained elegance rather than fruit-forward intensity. Delicate honey sweetness meets orange blossom and a whisper of baking spice. Perfect for those who appreciate subtlety and balance.",
    type: "Medium Roast",
    origin: "Limu, Ethiopia",
    region: "Jimma Zone, Western Ethiopia",
    image: "/images/products/4.png",
    altitude: "1,400 - 1,900m",
    process: "Washed",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Honey", "Orange Blossom", "Baking Spice", "Cocoa"],
    acidity: "Balanced & Clean",
    body: "Medium & Silky",
    harvestSeason: "November - January",
  },
  {
    id: "harrar",
    name: "Ethiopian Harrar",
    price: 18.0,
    description:
      "Intense and exotic with wild blueberry jam, dark cocoa, and a hint of cardamom.",
    story:
      "One of the oldest coffee origins in the world, Harrar is cultivated in the eastern highlands near the ancient walled city of Harar. Exclusively naturally processed, cherries are sun-dried whole for up to four weeks — a traditional method that allows the fruit to ferment and impart its essence directly into the bean.",
    tastingExperience:
      "Bold and unapologetic. Heavy-bodied and syrupy with intense notes of blueberry jam and dark cocoa. A subtle undertone of cardamom adds an exotic, almost mystical quality.",
    type: "Dark Roast",
    origin: "Harrar, Ethiopia",
    region: "Eastern Highlands, Ethiopia",
    image: "/images/products/5.png",
    altitude: "1,500 - 2,100m",
    process: "Natural",
    varietal: "Heirloom Ethiopian",
    cupNotes: ["Blueberry Jam", "Dark Cocoa", "Cardamom", "Dried Fig"],
    acidity: "Low & Mellow",
    body: "Heavy & Syrupy",
    harvestSeason: "October - February",
  },
];

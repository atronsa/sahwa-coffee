export type Coffee = {
  id: string;
  name: string;
  price: number;
  description: string;
  type: string; // roast level
  origin: string;
  image: string;
};

// Drop your three photos in /public named 1.jpg, 2.jpg, 3.jpg — they're reused
// below since there are only three images for five coffees. Swap the `image`
// paths any time without touching layout code.
export const COFFEES: Coffee[] = [
  {
    id: "yirgacheffe",
    name: "Ethiopian Yirgacheffe",
    price: 18.5,
    description:
      "Bright and floral with notes of bergamot, lemon zest, and a delicate jasmine finish.",
    type: "Light Roast",
    origin: "Yirgacheffe, Ethiopia",
    image: "/images/products/1.png",
  },
  {
    id: "colombia-supremo",
    name: "Colombian Supremo",
    price: 16.0,
    description:
      "A balanced, everyday cup with caramel sweetness, toasted almond, and a smooth cocoa finish.",
    type: "Medium Roast",
    origin: "Huila, Colombia",
    image: "/images/products/1.png",
  },
  {
    id: "sumatra-mandheling",
    name: "Sumatra Mandheling",
    price: 17.25,
    description:
      "Deep and earthy with cedar, dark chocolate, and a low, syrupy body that lingers.",
    type: "Dark Roast",
    origin: "Aceh, Sumatra",
    image: "/images/products/1.png",
  },
  {
    id: "guatemala-antigua",
    name: "Guatemala Antigua",
    price: 19.0,
    description:
      "Rich chocolate and warm baking spice, rounded out with a bright, crisp apple acidity.",
    type: "Medium-Dark Roast",
    origin: "Antigua, Guatemala",
    image: "/images/products/1.png",
  },
  {
    id: "kenya-aa",
    name: "Kenya AA",
    price: 20.5,
    description:
      "Juicy and wine-like, bursting with blackcurrant, red berry, and a crisp citrus snap.",
    type: "Light-Medium Roast",
    origin: "Nyeri, Kenya",
    image: "/images/products/1.png",
  },
];

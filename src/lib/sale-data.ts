export type Condition = "Like New" | "Excellent" | "Good" | "Fair";
export type Category =
  | "Study Room"
  | "Hall"
  | "Second Room"
  | "Master Bedroom"
  | "Kitchen"
  | "Misc.";

export interface SaleItem {
  id: string;
  name: string;
  /** Selling price in INR. 0 means "Make an offer" — fill in later. */
  price: number;
  condition: Condition;
  category: Category;
  brand?: string;
  dimensions?: string;
  emoji: string;
  /** Optional list of photo URLs. First image is used as cover. */
  images?: string[];
}

// Image imports
import studyTableShelf1 from "@/assets/items/study-table-shelf-1.jpeg";
import studyTableShelf2 from "@/assets/items/study-table-shelf-2.jpeg";
import studyTableShelf3 from "@/assets/items/study-table-shelf-3.jpeg";
import studyTableShelf4 from "@/assets/items/study-table-shelf-4.jpeg";
import studyTableShelf5 from "@/assets/items/study-table-shelf-5.jpeg";
import studyTableShelf6 from "@/assets/items/study-table-shelf-6.jpeg";
import studyTableShelf7 from "@/assets/items/study-table-shelf-7.jpeg";
import studyTableShelf8 from "@/assets/items/study-table-shelf-8.jpeg";

const studyTableShelfImages = [
  studyTableShelf1,
  studyTableShelf2,
  studyTableShelf3,
  studyTableShelf4,
  studyTableShelf5,
  studyTableShelf6,
  studyTableShelf7,
  studyTableShelf8,
];

export const CATEGORIES: Category[] = [
  "Study Room",
  "Hall",
  "Second Room",
  "Master Bedroom",
  "Kitchen",
  "Misc.",
];

// Condition mapping from source sheet:
//   Mint          -> Like New
//   Barely Used   -> Excellent
//   Medium Usage  -> Good
//   Old           -> Fair

export const ITEMS: SaleItem[] = [
  // Study Room
  { id: "rocking-chair", name: "Rocking Chair", price: 0, condition: "Fair", category: "Study Room", emoji: "🪑" }, // TODO: set price
  { id: "office-chair-zodiac", name: "Office Chair", price: 9500, condition: "Excellent", category: "Study Room", brand: "Green Soul Zodiac Pro", dimensions: "66 × 66 × 129 cm", emoji: "💺" },
  { id: "office-chair-comet", name: "Office Chair", price: 7489, condition: "Good", category: "Study Room", brand: "Featherlite Comet", dimensions: "40 × 30 × 30 cm", emoji: "💺" },
  { id: "study-table", name: "Study Table", price: 0, condition: "Fair", category: "Study Room", brand: "Solid Wood", emoji: "🪟" }, // TODO: set price
  { id: "foldable-table", name: "Foldable Table", price: 2500, condition: "Good", category: "Study Room", brand: "Engineered Wood", dimensions: "90 × 60 × 70 cm", emoji: "📐" },
  { id: "helmet-kyt", name: "Helmet", price: 8600, condition: "Good", category: "Study Room", brand: "KYT TT Revo", emoji: "⛑️" },
  { id: "helmet-smk", name: "Helmet", price: 4500, condition: "Like New", category: "Study Room", brand: "SMK Typhoon Freeride", emoji: "⛑️" },
  { id: "flower-clock", name: "Flower Clock", price: 999, condition: "Excellent", category: "Study Room", brand: "Amazon", dimensions: "53 × 53 cm", emoji: "🕰️" },
  { id: "iron-box", name: "Iron Box", price: 3000, condition: "Like New", category: "Study Room", brand: "Havells Husky 220W", dimensions: "31.3 × 12.5 cm", emoji: "👔" },
  { id: "study-table-shelf", name: "Study Table Shelf", price: 995, condition: "Excellent", category: "Study Room", brand: "Modular Engineered Wood Shelf", dimensions: "60 × 15 × 47.5 cm", emoji: "📚", images: studyTableShelfImages },

  // Hall
  { id: "tv-table", name: "TV Table", price: 3500, condition: "Excellent", category: "Hall", brand: "Engineered Wood", dimensions: "86 × 34 × 63 cm", emoji: "📺" },
  { id: "center-table", name: "Center Table", price: 10000, condition: "Excellent", category: "Hall", brand: "Solid Wood — Sheesham", emoji: "🪵" },
  { id: "sofa-cum-bed", name: "Sofa Cum Bed", price: 30000, condition: "Excellent", category: "Hall", brand: "Solid Wood — Neem Wood", dimensions: "230 × 81 × 97 cm (230 × 157 × 97 expanded)", emoji: "🛋️" },
  { id: "ottoman", name: "Ottoman", price: 5000, condition: "Excellent", category: "Hall", brand: "Solid Wood — Neem Wood", dimensions: "95 × 82 × 49 cm", emoji: "🟫" },
  { id: "diwan-cot-storage", name: "Diwan Cot with Storage", price: 6000, condition: "Excellent", category: "Hall", brand: "Engineered Wood", dimensions: "200 × 100 × 32 cm", emoji: "🛏️" },
  { id: "diwan-mattress", name: "Diwan Mattress + Waterproof Cover", price: 9200, condition: "Good", category: "Hall", brand: "WakeFit Ortho Essential", dimensions: "200 × 100 × 13 cm", emoji: "🛏️" },
  { id: "dining-table", name: "Dining Table", price: 27000, condition: "Excellent", category: "Hall", brand: "Solid Wood — Sheesham", dimensions: "142 × 84 × 75 cm", emoji: "🍽️" },

  // Second Room
  { id: "queen-mattress-second", name: "Queen Mattress + Waterproof Cover", price: 11900, condition: "Like New", category: "Second Room", brand: "WakeFit Ortho Essential", dimensions: "200 × 152 cm", emoji: "🛏️" },
  { id: "cupboard", name: "Cupboard", price: 6000, condition: "Good", category: "Second Room", brand: "Engineered Wood", dimensions: "180 × 84 × 43 cm", emoji: "🚪" },

  // Master Bedroom
  { id: "sleep-company-cot", name: "Sleep Company Cot", price: 66148, condition: "Good", category: "Master Bedroom", brand: "Elev8 Smart Recliner Bed", dimensions: "200 × 152 cm", emoji: "🛌" },
  { id: "queen-mattress-master", name: "Queen Mattress + Waterproof Cover", price: 36138, condition: "Good", category: "Master Bedroom", brand: "Smart Ortho Pro Mattress", dimensions: "200 × 152 cm", emoji: "🛏️" },
  { id: "night-stand-light", name: "Night Stand Table (Light Brown)", price: 2000, condition: "Excellent", category: "Master Bedroom", brand: "Engineered Wood", dimensions: "77 × 60 × 28 cm", emoji: "🟤" },
  { id: "night-stand-dark", name: "Night Stand Table (Dark Brown)", price: 1800, condition: "Excellent", category: "Master Bedroom", brand: "Engineered Wood", dimensions: "42 × 34 × 43 cm", emoji: "🟫" },

  // Kitchen
  { id: "water-filter", name: "Water Filter", price: 0, condition: "Excellent", category: "Kitchen", brand: "Havells Delite DX 6.5 L RO + UV", dimensions: "35 × 25 × 50 cm", emoji: "💧" }, // TODO: set price
  { id: "stove", name: "Stove", price: 3643, condition: "Good", category: "Kitchen", brand: "Faber", dimensions: "60 × 32 × 13 cm", emoji: "🔥" },
  { id: "microwave", name: "Microwave", price: 11392, condition: "Excellent", category: "Kitchen", brand: "Samsung MWO CONV CE76JD-B1/X 21L", dimensions: "48.9 × 28.2 × 44.4 cm", emoji: "📡" },
  { id: "fridge", name: "Fridge with Stabilizer + Stand", price: 24937, condition: "Excellent", category: "Kitchen", brand: "Samsung RT28C3042S8", dimensions: "55.5 × 63.7 × 154.5 cm", emoji: "🧊" },
  { id: "mixie", name: "Mixie", price: 2600, condition: "Excellent", category: "Kitchen", brand: "Pigeon", emoji: "🥤" },
  { id: "otg", name: "OTG", price: 0, condition: "Good", category: "Kitchen", emoji: "🍞" }, // TODO: set price
  { id: "kitchen-rack", name: "Kitchen Metal Rack", price: 2850, condition: "Excellent", category: "Kitchen", brand: "JD FRESH 4-Shelf Adjustable Boltless", dimensions: "152.4 × 60.96 × 30.48 cm", emoji: "🍳" },
  { id: "grinder", name: "Grinder", price: 9000, condition: "Like New", category: "Kitchen", brand: "Ultra", dimensions: "27.2 × 28.8 × 48.5 cm", emoji: "⚙️" },
  { id: "fruit-veg-stand", name: "Fruit and Vegetable Stand", price: 1799, condition: "Excellent", category: "Kitchen", brand: "4-Shelf Stainless Steel Trolley", dimensions: "68 × 30 × 10 cm", emoji: "🥦" },

  // Misc.
  { id: "scooter", name: "Scooter with Charger", price: 0, condition: "Excellent", category: "Misc.", brand: "Ather Rizta Z 2.9 kWh", emoji: "🛵" }, // TODO: set price
  { id: "washing-machine", name: "Washing Machine + Stand", price: 37070, condition: "Excellent", category: "Misc.", brand: "Samsung WW80TA046AB1TL", dimensions: "60 × 85 × 55 cm", emoji: "🧺" },
  { id: "ladder", name: "Ladder", price: 4000, condition: "Excellent", category: "Misc.", brand: "Bathla", emoji: "🪜" },
  { id: "guitar", name: "Guitar", price: 10000, condition: "Good", category: "Misc.", brand: "Fender SA-105CE", emoji: "🎸" },
  { id: "drying-stand", name: "Clothes Drying Stand", price: 2671, condition: "Excellent", category: "Misc.", brand: "Bathla Foldable Neo", dimensions: "122 × 7 × 64.5 cm", emoji: "👕" },
];

export const WHATSAPP_NUMBER = "+91 9080762963";
export const WHATSAPP_DIGITS = "919080762963";
export const PICKUP_LOCATION = "Indiranagar, Bengaluru, Karnataka";

export function whatsappLink(itemName?: string) {
  const text = itemName
    ? `Hi! I'm interested in the "${itemName}" from your moving-out sale. Is it still available?`
    : `Hi! I'm interested in items from your moving-out sale.`;
  return `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(text)}`;
}

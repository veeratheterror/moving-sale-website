export type Condition = "Like New" | "Excellent" | "Good" | "Fair";
export type Category =
  | "Study Room"
  | "Hall"
  | "Second Room"
  | "Master Bedroom"
  | "Kitchen"
  | "Misc.";
export type Status = "Available" | "Sold" | "Coming Soon" | "Reserved";

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
  status: Status;
  availableFrom?: string;
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
import sofa1 from "@/assets/sofa/Sofa-1.jpg";
import sofa2 from "@/assets/sofa/Sofa-2.jpg";
import sofa3 from "@/assets/sofa/Sofa-3.jpg";
import sofa4 from "@/assets/sofa/Sofa-4.jpg";
import sofa5 from "@/assets/sofa/Sofa-5.jpg";
import sofa6 from "@/assets/sofa/Sofa-6.jpg";
import sofa7 from "@/assets/sofa/Sofa-7.jpeg";
import sofa8 from "@/assets/sofa/Sofa-8.jpg";
import ClothStand1 from "@/assets/ClothStand/ClothStand-1.jpeg";
import ClothStand2 from "@/assets/ClothStand/ClothStand-2.jpeg";
import ClothStand3 from "@/assets/ClothStand/ClothStand-3.jpeg";
import cupboard1 from "@/assets/cupboard/cupboard-1.jpg";
import cupboard2 from "@/assets/cupboard/cupboard-2.jpg";
import DiningTable1 from "@/assets/DiningTable/DiningTable-1.JPG";
import DiningTable2 from "@/assets/DiningTable/DiningTable-2.JPG";
import DiningTable3 from "@/assets/DiningTable/DiningTable-3.JPG";
import DiningTable4 from "@/assets/DiningTable/DiningTable-4.JPG";
import DiningTable5 from "@/assets/DiningTable/DiningTable-5.JPG";


const studyTableShelfImages = [
  studyTableShelf1,
  studyTableShelf2,
  studyTableShelf3,
  studyTableShelf4,
  studyTableShelf5,
  studyTableShelf6,
  studyTableShelf7,
  studyTableShelf8,];

const sofaImages = [
  sofa1,
  sofa2,
  sofa3,
  sofa4,
  sofa5,
  sofa6,
  sofa7,
  sofa8,
];

const ClothStandImages = [
  ClothStand1,
  ClothStand2,
  ClothStand3,
];

const cupboardImages = [
  cupboard1,
  cupboard2,
];

const diningTableImages = [
  DiningTable1,
  DiningTable2,
  DiningTable3,
  DiningTable4,
  DiningTable5,
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
  { id: "rocking-chair", name: "Rocking Chair", price: 999, condition: "Fair", category: "Study Room", emoji: "🪑", status: "Sold",
availableFrom: "01 Jul 2026" }, // TODO: set price
  { id: "office-chair-zodiac", name: "Office Chair", price: 8499, condition: "Excellent", category: "Study Room", brand: "Green Soul Zodiac Pro", dimensions: "66 × 66 × 129 cm", emoji: "💺", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "office-chair-comet", name: "Office Chair", price: 4999, condition: "Good", category: "Study Room", brand: "Featherlite Comet", dimensions: "40 × 30 × 30 cm", emoji: "💺", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "study-table", name: "Study Table", price: 11999, condition: "Fair", category: "Study Room", brand: "Solid Wood", emoji: "🪟", status: "Available",
availableFrom: "01 Jul 2026" }, // TODO: set price
  { id: "foldable-table", name: "Foldable Table", price: 1999, condition: "Good", category: "Study Room", brand: "Engineered Wood", dimensions: "90 × 60 × 70 cm", emoji: "📐", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "helmet-kyt", name: "Helmet", price: 6499, condition: "Good", category: "Study Room", brand: "KYT TT Revo", emoji: "⛑️", status: "Coming Soon",
availableFrom: "01 Jul 2026" },
  { id: "helmet-smk", name: "Helmet", price: 4299, condition: "Like New", category: "Study Room", brand: "SMK Typhoon Freeride", emoji: "⛑️", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "flower-clock", name: "Flower Clock", price: 899, condition: "Excellent", category: "Study Room", brand: "Amazon", dimensions: "53 × 53 cm", emoji: "🕰️", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "iron-box", name: "Iron Box", price: 2799, condition: "Like New", category: "Study Room", brand: "Havells Husky 220W", dimensions: "31.3 × 12.5 cm", emoji: "👔", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "study-table-shelf", name: "Study Table Shelf", price: 799, condition: "Excellent", category: "Study Room", brand: "Modular Engineered Wood Shelf", dimensions: "60 × 15 × 47.5 cm", emoji: "📚", status: "Available",
availableFrom: "01 Jul 2026", images: studyTableShelfImages },

  // Hall
  { id: "tv-table", name: "TV Table", price: 3199, condition: "Excellent", category: "Hall", brand: "Engineered Wood", dimensions: "86 × 34 × 63 cm", emoji: "📺", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "center-table", name: "Center Table", price: 8999, condition: "Excellent", category: "Hall", brand: "Solid Wood — Sheesham", emoji: "🪵", status: "Reserved",
availableFrom: "01 Jul 2026" },
  { id: "sofa-cum-bed", name: "Sofa Cum Bed", price: 31999, condition: "Excellent", category: "Hall", brand: "Solid Wood — Neem Wood", dimensions: "230 × 81 × 97 cm (230 × 157 × 97 expanded)", emoji: "🛋️", status: "Available",
availableFrom: "01 Jul 2026", images: sofaImages },
  { id: "ottoman", name: "Ottoman", price: 0, condition: "Excellent", category: "Hall", brand: "Solid Wood — Neem Wood", dimensions: "95 × 82 × 49 cm", emoji: "🟫", status: "Available",
availableFrom: "01 Jul 2026", images: sofaImages },
  { id: "diwan-cot-storage", name: "Diwan Cot with Storage", price: 5499, condition: "Excellent", category: "Hall", brand: "Engineered Wood", dimensions: "200 × 100 × 32 cm", emoji: "🛏️", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "diwan-mattress", name: "Diwan Mattress + Waterproof Cover", price: 7299, condition: "Good", category: "Hall", brand: "WakeFit Ortho Essential", dimensions: "200 × 100 × 13 cm", emoji: "🛏️", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "dining-table", name: "Dining Table", price: 24999, condition: "Excellent", category: "Hall", brand: "Solid Wood — Sheesham", dimensions: "142 × 84 × 75 cm", emoji: "🍽️", status: "Available",
availableFrom: "01 Jul 2026", images: diningTableImages },

  // Second Room
  { id: "queen-mattress-second", name: "Queen Mattress + Waterproof Cover", price: 10999, condition: "Like New", category: "Second Room", brand: "WakeFit Ortho Essential", dimensions: "200 × 152 cm", emoji: "🛏️", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "cupboard", name: "Cupboard", price: 4799, condition: "Good", category: "Second Room", brand: "Engineered Wood", dimensions: "180 × 84 × 43 cm", emoji: "🚪", status: "Available",
availableFrom: "01 Jul 2026", images: cupboardImages },

  // Master Bedroom
  { id: "sleep-company-cot", name: "Sleep Company Cot", price: 59999, condition: "Good", category: "Master Bedroom", brand: "Elev8 Smart Recliner Bed", dimensions: "200 × 152 cm", emoji: "🛌", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "queen-mattress-master", name: "Queen Mattress + Waterproof Cover", price: 32999, condition: "Good", category: "Master Bedroom", brand: "Smart Ortho Pro Mattress", dimensions: "200 × 152 cm", emoji: "🛏️", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "night-stand-light", name: "Night Stand Table (Light Brown)", price: 1799, condition: "Excellent", category: "Master Bedroom", brand: "Engineered Wood", dimensions: "77 × 60 × 28 cm", emoji: "🟤", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "night-stand-dark", name: "Night Stand Table (Dark Brown)", price: 1699, condition: "Excellent", category: "Master Bedroom", brand: "Engineered Wood", dimensions: "42 × 34 × 43 cm", emoji: "🟫", status: "Available",
availableFrom: "01 Jul 2026" },

  // Kitchen
  { id: "water-filter", name: "Water Filter", price: 19999, condition: "Excellent", category: "Kitchen", brand: "Havells Delite DX 6.5 L RO + UV", dimensions: "35 × 25 × 50 cm", emoji: "💧", status: "Reserved",
availableFrom: "01 Jul 2026" }, // TODO: set price
  { id: "stove", name: "Stove", price: 2999, condition: "Good", category: "Kitchen", brand: "Faber", dimensions: "60 × 32 × 13 cm", emoji: "🔥", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "microwave", name: "Microwave", price: 9999, condition: "Excellent", category: "Kitchen", brand: "Samsung MWO CONV CE76JD-B1/X 21L", dimensions: "48.9 × 28.2 × 44.4 cm", emoji: "📡", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "fridge", name: "Fridge with Stabilizer + Stand", price: 21999, condition: "Excellent", category: "Kitchen", brand: "Samsung RT28C3042S8", dimensions: "55.5 × 63.7 × 154.5 cm", emoji: "🧊", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "mixie", name: "Mixie", price: 1999, condition: "Excellent", category: "Kitchen", brand: "Pigeon", emoji: "🥤", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "otg", name: "OTG", price: 6999, condition: "Good", category: "Kitchen", emoji: "🍞", status: "Reserved",
availableFrom: "01 Jul 2026" }, // TODO: set price
  { id: "kitchen-rack", name: "Kitchen Metal Rack", price: 2499, condition: "Excellent", category: "Kitchen", brand: "JD FRESH 4-Shelf Adjustable Boltless", dimensions: "152.4 × 60.96 × 30.48 cm", emoji: "🍳", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "grinder", name: "Grinder", price: 8599, condition: "Like New", category: "Kitchen", brand: "Ultra", dimensions: "27.2 × 28.8 × 48.5 cm", emoji: "⚙️", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "fruit-veg-stand", name: "Fruit and Vegetable Stand", price: 1599, condition: "Excellent", category: "Kitchen", brand: "4-Shelf Stainless Steel Trolley", dimensions: "68 × 30 × 10 cm", emoji: "🥦", status: "Available",
availableFrom: "01 Jul 2026" },

  // Misc.
  { id: "scooter", name: "Scooter with Charger", price: 159999, condition: "Excellent", category: "Misc.", brand: "Ather Rizta Z 2.9 kWh", emoji: "🛵", status: "Coming Soon",
availableFrom: "01 Jul 2026" }, // TODO: set price
  { id: "washing-machine", name: "Washing Machine + Stand", price: 33999, condition: "Excellent", category: "Misc.", brand: "Samsung WW80TA046AB1TL", dimensions: "60 × 85 × 55 cm", emoji: "🧺", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "ladder", name: "Ladder", price: 3599, condition: "Excellent", category: "Misc.", brand: "Bathla", emoji: "🪜", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "guitar", name: "Guitar", price: 7999, condition: "Good", category: "Misc.", brand: "Fender SA-105CE", emoji: "🎸", status: "Available",
availableFrom: "01 Jul 2026" },
  { id: "drying-stand", name: "Clothes Drying Stand", price: 2399, condition: "Excellent", category: "Misc.", brand: "Bathla Foldable Neo", dimensions: "122 × 7 × 64.5 cm", emoji: "👕", status: "Available",
availableFrom: "01 Jul 2026", images: ClothStandImages },
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

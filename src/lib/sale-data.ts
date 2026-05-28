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
import sofa1 from "@/assets/sofa/Sofa-1.JPG";
import sofa2 from "@/assets/sofa/Sofa-2.JPG";
import sofa3 from "@/assets/sofa/Sofa-3.JPG";
import sofa4 from "@/assets/sofa/Sofa-4.JPG";
import sofa5 from "@/assets/sofa/Sofa-5.JPG";
import sofa6 from "@/assets/sofa/Sofa-6.JPG";
import sofa7 from "@/assets/sofa/Sofa-7.jpeg";
import sofa8 from "@/assets/sofa/Sofa-8.JPG";
import ClothStand1 from "@/assets/ClothStand/ClothStand-1.jpeg";
import ClothStand2 from "@/assets/ClothStand/ClothStand-2.jpeg";
import ClothStand3 from "@/assets/ClothStand/ClothStand-3.jpeg";
import cupboard1 from "@/assets/Cupboard/Cupboard-1.JPG";
import cupboard2 from "@/assets/Cupboard/Cupboard-2.JPG";
import DiningTable1 from "@/assets/DiningTable/DiningTable-1.JPG";
import DiningTable2 from "@/assets/DiningTable/DiningTable-2.JPG";
import DiningTable3 from "@/assets/DiningTable/DiningTable-3.JPG";
import DiningTable4 from "@/assets/DiningTable/DiningTable-4.JPG";
import DiningTable5 from "@/assets/DiningTable/DiningTable-5.JPG";
import DiwanAndCot1 from "@/assets/DiwanAndCot/DiwanAndCot-1.jpeg";
import DiwanAndCot2 from "@/assets/DiwanAndCot/DiwanAndCot-2.jpeg";
import DiwanAndCot3 from "@/assets/DiwanAndCot/DiwanAndCot-3.JPG";
import DiwanAndCot4 from "@/assets/DiwanAndCot/DiwanAndCot-4.JPG";

import FeatherliteChair1 from "@/assets/FeatherliteChair/FeatherliteChair-1.jpeg";
import FeatherliteChair2 from "@/assets/FeatherliteChair/FeatherliteChair-2.jpeg";
import FeatherliteChair3 from "@/assets/FeatherliteChair/FeatherliteChair-3.jpeg";
import FeatherliteChair4 from "@/assets/FeatherliteChair/FeatherliteChair-4.jpeg";

import FoldableTable1 from "@/assets/FoldableTable/FoldableTable-1.jpeg";
import FoldableTable2 from "@/assets/FoldableTable/FoldableTable-2.jpeg";
import FoldableTable3 from "@/assets/FoldableTable/FoldableTable-3.jpeg";

import Fridge1 from "@/assets/Fridge/Fridge-1.jpeg";
import Fridge2 from "@/assets/Fridge/Fridge-2.jpeg";
import Fridge3 from "@/assets/Fridge/Fridge-3.jpeg";
import Fridge4 from "@/assets/Fridge/Fridge-4.jpeg";

import GamingChair1 from "@/assets/GamingChair/GamingChair-1.jpeg";
import GamingChair2 from "@/assets/GamingChair/GamingChair-2.jpeg";
import GamingChair3 from "@/assets/GamingChair/GamingChair-3.jpeg";

import Guitar1 from "@/assets/Guitar/Guitar-1.jpeg";
import Guitar2 from "@/assets/Guitar/Guitar-2.jpeg";
import Guitar3 from "@/assets/Guitar/Guitar-3.jpeg";

import IronBox1 from "@/assets/IronBox/IronBox-1.jpeg";
import IronBox2 from "@/assets/IronBox/IronBox-2.jpeg";
import IronBox3 from "@/assets/IronBox/IronBox-3.jpeg";
import IronBox4 from "@/assets/IronBox/IronBox-4.jpeg";

import KitchenRack1 from "@/assets/KitchenRack/KitchenRack-1.jpeg";
import KitchenRack2 from "@/assets/KitchenRack/KitchenRack-2.jpeg";
import KitchenRack3 from "@/assets/KitchenRack/KitchenRack-3.jpeg";
import KitchenRack4 from "@/assets/KitchenRack/KitchenRack-4.jpeg";

import Microwave1 from "@/assets/Microwave/Microwave-1.jpeg";
import Microwave2 from "@/assets/Microwave/Microwave-2.jpeg";
import Microwave3 from "@/assets/Microwave/Microwave-3.jpeg";

import SMKHelmet1 from "@/assets/SMKHelmet/SMKHelmet-1.jpeg";
import SMKHelmet2 from "@/assets/SMKHelmet/SMKHelmet-2.jpeg";
import SMKHelmet3 from "@/assets/SMKHelmet/SMKHelmet-3.jpeg";
import SMKHelmet4 from "@/assets/SMKHelmet/SMKHelmet-4.jpeg";
import SMKHelmet5 from "@/assets/SMKHelmet/SMKHelmet-5.jpeg";
import SMKHelmet6 from "@/assets/SMKHelmet/SMKHelmet-6.jpeg";
import SMKHelmet7 from "@/assets/SMKHelmet/SMKHelmet-7.jpeg";

import SmallNightTable1 from "@/assets/SmallNightTable/SmallNightTable-1.JPG";
import SmallNightTable2 from "@/assets/SmallNightTable/SmallNightTable-2.JPG";
import SmallNightTable3 from "@/assets/SmallNightTable/SmallNightTable-3.JPG";

import VegetableRack1 from "@/assets/VegetableRack/VegetableRack-1.jpeg";
import VegetableRack2 from "@/assets/VegetableRack/VegetableRack-2.jpeg";
import VegetableRack3 from "@/assets/VegetableRack/VegetableRack-3.jpeg";

import WallClock1 from "@/assets/WallClock/WallClock-1.jpeg";
import WallClock2 from "@/assets/WallClock/WallClock-2.jpeg";

import TVTable1 from "@/assets/TVTable/TVTable-1.JPG";

import TallNightTable1 from "@/assets/TallNightTable/TallNightTable-1.JPG";

import stove1 from "@/assets/Stove/Stove-1.jpeg";
import stove2 from "@/assets/Stove/Stove-2.jpeg";
import stove3 from "@/assets/Stove/Stove-3.jpeg";

import washingMachine1 from "@/assets/WashingMachine/WashingMachine-1.jpeg";
import washingMachine2 from "@/assets/WashingMachine/WashingMachine-2.jpeg";
import washingMachine3 from "@/assets/WashingMachine/WashingMachine-3.jpeg";
import washingMachine4 from "@/assets/WashingMachine/WashingMachine-4.jpeg";

import FoldableCot1 from "@/assets/FoldableCot/FoldableCot-1.jpeg";
import FoldableCot2 from "@/assets/FoldableCot/FoldableCot-2.jpeg";
import FoldableCot3 from "@/assets/FoldableCot/FoldableCot-3.jpeg";
import FoldableCot4 from "@/assets/FoldableCot/FoldableCot-4.jpeg";
import FoldableCot5 from "@/assets/FoldableCot/FoldableCot-5.jpeg";
import FoldableCot6 from "@/assets/FoldableCot/FoldableCot-6.jpeg";
import FoldableCot7 from "@/assets/FoldableCot/FoldableCot-7.jpeg";

import Grinder1 from "@/assets/Grinder/Grinder-1.jpeg"
import Grinder2 from "@/assets/Grinder/Grinder-2.jpeg"
import Grinder3 from "@/assets/Grinder/Grinder-3.jpeg"
import Grinder4 from "@/assets/Grinder/Grinder-4.jpeg"

import Induction1 from "@/assets/Induction/Induction-1.jpeg"
import Induction2 from "@/assets/Induction/Induction-2.jpeg"

import KYTHelmet1 from "@/assets/KYTHelmet/KYTHelmet-1.jpeg"
import KYTHelmet2 from "@/assets/KYTHelmet/KYTHelmet-2.jpeg"
import KYTHelmet3 from "@/assets/KYTHelmet/KYTHelmet-3.jpeg"
import KYTHelmet4 from "@/assets/KYTHelmet/KYTHelmet-4.jpeg"
import KYTHelmet5 from "@/assets/KYTHelmet/KYTHelmet-5.jpeg"
import KYTHelmet6 from "@/assets/KYTHelmet/KYTHelmet-6.jpeg"
import KYTHelmet7 from "@/assets/KYTHelmet/KYTHelmet-7.jpeg"

import QueenMattressGuest1 from "@/assets/QueenMattressGuest/QueenMattressGuest-1.jpeg"
import QueenMattressGuest2 from "@/assets/QueenMattressGuest/QueenMattressGuest-2.jpeg"
import QueenMattressGuest3 from "@/assets/QueenMattressGuest/QueenMattressGuest-3.jpeg"

import QueenMattressMain1 from "@/assets/QueenMattressMain/QueenMattressMain-1.jpeg"
import QueenMattressMain2 from "@/assets/QueenMattressMain/QueenMattressMain-2.jpeg"
import QueenMattressMain3 from "@/assets/QueenMattressMain/QueenMattressMain-3.jpeg"

import StudyTable1 from "@/assets/StudyTable/StudyTable-1.jpeg"
import StudyTable2 from "@/assets/StudyTable/StudyTable-2.jpeg"
import StudyTable3 from "@/assets/StudyTable/StudyTable-3.jpeg"
import StudyTable4 from "@/assets/StudyTable/StudyTable-4.jpeg"

import CenterTable1 from "@/assets/CenterTable/CenterTable-1.jpeg"
import CenterTable2 from "@/assets/CenterTable/CenterTable-2.jpeg"
import CenterTable3 from "@/assets/CenterTable/CenterTable-3.jpeg"

import Mixie1 from "@/assets/Mixie/Mixie-1.jpeg"
import Mixie2 from "@/assets/Mixie/Mixie-2.jpeg"
import Mixie3 from "@/assets/Mixie/Mixie-3.jpeg"

import Ladder1 from "@/assets/Ladder/Ladder-1.jpeg";
import Ladder2 from "@/assets/Ladder/Ladder-2.jpeg";

import WaterPurifier1 from "@/assets/WaterPurifier/WaterPurifier-1.jpeg";
import WaterPurifier2 from "@/assets/WaterPurifier/WaterPurifier-2.jpeg";



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

const diwanAndCotImages = [
  DiwanAndCot1,
  DiwanAndCot2,
  DiwanAndCot3,
  DiwanAndCot4,
];

const featherliteChairImages = [
  FeatherliteChair1,
  FeatherliteChair2,
  FeatherliteChair3,
  FeatherliteChair4,
];

const foldableTableImages = [
  FoldableTable1,
  FoldableTable2,
  FoldableTable3,
];

const fridgeImages = [
  Fridge1,
  Fridge2,
  Fridge3,
  Fridge4,
];

const gamingChairImages = [
  GamingChair1,
  GamingChair2,
  GamingChair3,
];

const guitarImages = [
  Guitar1,
  Guitar2,
  Guitar3,
];

const inductionImages = [
  Induction1,
  Induction2,
];

const ironBoxImages = [
  IronBox1,
  IronBox2,
  IronBox3,
  IronBox4,
];

const kitchenRackImages = [
  KitchenRack1,
  KitchenRack2,
  KitchenRack3,
  KitchenRack4,
];

const microwaveImages = [
  Microwave1,
  Microwave2,
  Microwave3,
];

const smkHelmetImages = [
  SMKHelmet1,
  SMKHelmet2,
  SMKHelmet3,
  SMKHelmet4,
  SMKHelmet5,
  SMKHelmet6,
  SMKHelmet7,
];

const smallNightTableImages = [
  SmallNightTable1,
  SmallNightTable2,
  SmallNightTable3,
];

const vegetableRackImages = [
  VegetableRack1,
  VegetableRack2,
  VegetableRack3,
];

const wallClockImages = [
  WallClock1,
  WallClock2,
];

const tvTableImages = [
  TVTable1,
];

const tallNightTableImages = [
  TallNightTable1,
];

const stoveImages = [
  stove1,
  stove2,
  stove3,
];

const washingMachineImages = [
  washingMachine1,
  washingMachine2,
  washingMachine3,
  washingMachine4,
];

const foldableCotImages = [
  FoldableCot1,
  FoldableCot2,
  FoldableCot3,
  FoldableCot4,
  FoldableCot5,
  FoldableCot6,
  FoldableCot7,
];

const grinderImages = [
  Grinder1,
  Grinder2,
  Grinder3,
  Grinder4,];

const kythemetImages = [
  KYTHelmet1,
  KYTHelmet2,
  KYTHelmet3,
  KYTHelmet4,
  KYTHelmet5,
  KYTHelmet6,
  KYTHelmet7,];

  const queenMattressGuestImages = [
    QueenMattressGuest1,
    QueenMattressGuest2,
    QueenMattressGuest3,
  ];

  const queenMattressMainImages = [
    QueenMattressMain1,
    QueenMattressMain2,
    QueenMattressMain3,
  ];

  const studyTableImages = [
    StudyTable1,
    StudyTable2,
    StudyTable3,
    StudyTable4,
  ];

  const centerTableImages = [
    CenterTable1,
    CenterTable2,
    CenterTable3,
  ];

  const mixieImages = [
    Mixie1,
    Mixie2,
    Mixie3,
  ];

  const ladderImages = [
    Ladder1,
    Ladder2,
  ];

  const waterPurifierImages = [
    WaterPurifier1,
    WaterPurifier2,
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
availableFrom: "01 Jul 2026", images: gamingChairImages },
  { id: "office-chair-comet", name: "Office Chair", price: 4999, condition: "Good", category: "Study Room", brand: "Featherlite Comet", dimensions: "40 × 30 × 30 cm", emoji: "💺", status: "Available",
availableFrom: "01 Jul 2026", images: featherliteChairImages },
  { id: "study-table", name: "Study Table", price: 11999, condition: "Fair", category: "Study Room", brand: "Solid Wood", dimensions: "124 × 61 × 76 cm", emoji: "🪟", status: "Available",
availableFrom: "01 Jul 2026", images: studyTableImages },
  { id: "foldable-table", name: "Foldable Table", price: 1999, condition: "Good", category: "Study Room", brand: "Engineered Wood", dimensions: "90 × 60 × 70 cm", emoji: "📐", status: "Available",
availableFrom: "01 Jul 2026", images: foldableTableImages },
  { id: "helmet-kyt", name: "Helmet", price: 6499, condition: "Good", category: "Study Room", brand: "KYT TT Revo", dimensions: "Small", emoji: "⛑️", status: "Coming Soon",
availableFrom: "31 Jul 2026", images: kythemetImages },
  { id: "helmet-smk", name: "Helmet", price: 4299, condition: "Like New", category: "Study Room", brand: "SMK Typhoon Freeride", dimensions: "Medium" ,emoji: "⛑️", status: "Available",
availableFrom: "01 Jul 2026", images: smkHelmetImages },
  { id: "flower-clock", name: "Flower Clock", price: 699, condition: "Excellent", category: "Study Room", brand: "Amazon", dimensions: "53 × 53 cm", emoji: "🕰️", status: "Available",
availableFrom: "01 Jul 2026", images: wallClockImages },
  { id: "iron-box", name: "Iron Box", price: 2799, condition: "Like New", category: "Study Room", brand: "Havells Husky 220W", dimensions: "31.3 × 12.5 cm", emoji: "👔", status: "Available",
availableFrom: "01 Jul 2026", images: ironBoxImages },
  { id: "study-table-shelf", name: "Study Table Shelf", price: 799, condition: "Excellent", category: "Study Room", brand: "Modular Engineered Wood Shelf", dimensions: "60 × 15 × 47.5 cm", emoji: "📚", status: "Available",
availableFrom: "01 Jul 2026", images: studyTableShelfImages },

  // Hall
  { id: "tv-table", name: "TV Table", price: 3199, condition: "Excellent", category: "Hall", brand: "Engineered Wood", dimensions: "86 × 34 × 63 cm", emoji: "📺", status: "Available",
availableFrom: "01 Jul 2026", images: tvTableImages },
  { id: "center-table", name: "Center Table", price: 8999, condition: "Excellent", category: "Hall", brand: "Solid Wood — Sheesham", dimensions: "100 × 50 × 45 cm", emoji: "🪵", status: "Reserved",
availableFrom: "01 Jul 2026", images: centerTableImages }, 
  { id: "sofa-cum-bed", name: "Sofa Cum Bed", price: 31999, condition: "Excellent", category: "Hall", brand: "Solid Wood — Neem Wood, Price Inclusive of Ottomon", dimensions: "230 × 81 × 97 cm (230 × 157 × 97 expanded)", emoji: "🛋️", status: "Available",
availableFrom: "01 Jul 2026", images: sofaImages },
  { id: "ottoman", name: "Ottoman", price: 1, condition: "Excellent", category: "Hall", brand: "Solid Wood — Neem Wood, Sold Alongside Sofa", dimensions: "95 × 82 × 49 cm", emoji: "🟫", status: "Available",
availableFrom: "01 Jul 2026", images: sofaImages },
  { id: "diwan-cot-storage", name: "Diwan Cot with Storage", price: 5499, condition: "Excellent", category: "Hall", brand: "Engineered Wood", dimensions: "200 × 100 × 32 cm", emoji: "🛏️", status: "Available",
availableFrom: "01 Jul 2026", images: diwanAndCotImages },
  { id: "diwan-mattress", name: "Diwan Mattress + Waterproof Cover", price: 7299, condition: "Good", category: "Hall", brand: "WakeFit Ortho Essential", dimensions: "200 × 100 × 13 cm", emoji: "🛏️", status: "Available",
availableFrom: "01 Jul 2026", images: diwanAndCotImages },
  { id: "dining-table", name: "Dining Table", price: 24999, condition: "Excellent", category: "Hall", brand: "Solid Wood — Sheesham", dimensions: "142 × 84 × 75 cm", emoji: "🍽️", status: "Available",
availableFrom: "01 Jul 2026", images: diningTableImages },

  // Second Room
  { id: "queen-mattress-second", name: "Queen Mattress + Waterproof Cover", price: 10999, condition: "Like New", category: "Second Room", brand: "WakeFit Ortho Essential", dimensions: "200 × 152 cm", emoji: "🛏️", status: "Available",
availableFrom: "01 Jul 2026", images: queenMattressGuestImages },
  { id: "cupboard", name: "Cupboard", price: 4799, condition: "Good", category: "Second Room", brand: "Engineered Wood", dimensions: "180 × 84 × 43 cm", emoji: "🚪", status: "Available",
availableFrom: "01 Jul 2026", images: cupboardImages },

  // Master Bedroom
  { id: "sleep-company-cot", name: "Sleep Company Cot", price: 59999, condition: "Good", category: "Master Bedroom", brand: "Elev8 Smart Recliner Bed With Italian Grey Frame", dimensions: "200 × 152 cm", emoji: "🛌", status: "Available",
availableFrom: "01 Jul 2026", images: foldableCotImages },
  { id: "queen-mattress-master", name: "Queen Mattress + Waterproof Cover", price: 32999, condition: "Good", category: "Master Bedroom", brand: "Smart Ortho Pro Mattress", dimensions: "200 × 152 cm", emoji: "🛏️", status: "Available",
availableFrom: "01 Jul 2026", images: queenMattressMainImages },
  { id: "night-stand-light", name: "Night Stand Table (Light Brown)", price: 1799, condition: "Excellent", category: "Master Bedroom", brand: "Engineered Wood", dimensions: "77 × 60 × 28 cm", emoji: "🟤", status: "Available",
availableFrom: "01 Jul 2026", images: tallNightTableImages },
  { id: "night-stand-dark", name: "Night Stand Table (Dark Brown)", price: 1699, condition: "Excellent", category: "Master Bedroom", brand: "Engineered Wood", dimensions: "42 × 34 × 43 cm", emoji: "🟫", status: "Available",
availableFrom: "01 Jul 2026", images: smallNightTableImages },

  // Kitchen
  { id: "water-filter", name: "Water Filter", price: 17499, condition: "Excellent", category: "Kitchen", brand: "Havells Delite DX 6.5 L RO + UV with 4 years Warranty", dimensions: "35 × 25 × 50 cm", emoji: "💧", status: "Available",
availableFrom: "01 Jul 2026", images: waterPurifierImages},
  { id: "stove", name: "Stove", price: 2999, condition: "Good", category: "Kitchen", brand: "Faber", dimensions: "60 × 32 × 13 cm", emoji: "🔥", status: "Available",
availableFrom: "01 Jul 2026", images: stoveImages },
  { id: "microwave", name: "Microwave", price: 9999, condition: "Excellent", category: "Kitchen", brand: "Samsung MWO CONV CE76JD-B1/X 21L", dimensions: "48.9 × 28.2 × 44.4 cm", emoji: "📡", status: "Available",
availableFrom: "01 Jul 2026", images: microwaveImages },
  { id: "fridge", name: "Fridge with Stabilizer + Stand", price: 21999, condition: "Excellent", category: "Kitchen", brand: "Samsung RT28C3042S8 - 236L", dimensions: "55.5 × 63.7 × 154.5 cm", emoji: "🧊", status: "Available",
availableFrom: "01 Jul 2026", images: fridgeImages },
  { id: "mixie", name: "Mixie", price: 1999, condition: "Excellent", category: "Kitchen", brand: "Pigeon", emoji: "🥤", status: "Available",
availableFrom: "01 Jul 2026", images: mixieImages },
  { id: "otg", name: "OTG", price: 1, condition: "Good", category: "Kitchen", emoji: "🍞", status: "Reserved",
availableFrom: "01 Jul 2026" }, 
  { id: "kitchen-rack", name: "Kitchen Metal Rack", price: 2499, condition: "Excellent", category: "Kitchen", brand: "JD FRESH 4-Shelf Adjustable Boltless", dimensions: "152.4 × 60.96 × 30.48 cm", emoji: "🍳", status: "Available",
availableFrom: "01 Jul 2026", images: kitchenRackImages },
  { id: "grinder", name: "Grinder", price: 7999, condition: "Like New", category: "Kitchen", brand: "Ultra", dimensions: "27.2 × 28.8 × 48.5 cm", emoji: "⚙️", status: "Available",
availableFrom: "01 Jul 2026", images: grinderImages },
  { id: "fruit-veg-stand", name: "Fruit and Vegetable Stand", price: 1599, condition: "Excellent", category: "Kitchen", brand: "4-Shelf Stainless Steel Trolley", dimensions: "68 × 30 × 10 cm", emoji: "🥦", status: "Available",
availableFrom: "01 Jul 2026", images: vegetableRackImages },
 { id: "induction", name: "Induction Cooktop", price: 999, condition: "Good", category: "Kitchen", brand: "Prestige", dimensions: "28 × 36 × 6 cm", emoji: "🍲", status: "Available", availableFrom: "01 Jul 2026", images: inductionImages},

  // Misc.
  { id: "scooter", name: "Scooter with Charger", price: 159999, condition: "Excellent", category: "Misc.", brand: "Ather Rizta Z 2.9 kWh - 105km Range", dimensions: "Has Side Step, Backrest, Frunk, Storage Box Organiser, Floormat and has 8 years Battery Warranty" ,emoji: "🛵", status: "Coming Soon",
availableFrom: "31 Jul 2026" }, // TODO: set price
  { id: "washing-machine", name: "Washing Machine + Stand", price: 33999, condition: "Excellent", category: "Misc.", brand: "Samsung WW80TA046AB1TL - 8kg Front Load", dimensions: "60 × 85 × 55 cm", emoji: "🧺", status: "Available",
availableFrom: "01 Jul 2026", images: washingMachineImages },
  { id: "ladder", name: "Ladder", price: 3599, condition: "Excellent", category: "Misc.", brand: "Bathla", dimensions: "50 × 10 × 173 cm", emoji: "🪜", status: "Reserved",
availableFrom: "01 Jul 2026", images: ladderImages },
  { id: "guitar", name: "Guitar", price: 7999, condition: "Good", category: "Misc.", brand: "Fender SA-105CE", emoji: "🎸", status: "Available",
availableFrom: "01 Jul 2026", images: guitarImages },
  { id: "drying-stand", name: "Clothes Drying Stand", price: 1999, condition: "Excellent", category: "Misc.", brand: "Bathla Foldable Neo", dimensions: "122 × 7 × 64.5 cm", emoji: "👕", status: "Available",
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

const STATUS_ORDER: Record<Status, number> = {
  Available: 0,
  "Coming Soon": 1,
  Reserved: 2,
  Sold: 3,
};

export const SORTED_ITEMS = [...ITEMS].sort((a, b) => {
  const statusPriority: Record<Status, number> = {
    Available: 0,
    "Coming Soon": 1,
    Reserved: 2,
    Sold: 3,
  };

  // First sort globally by status
  const statusCompare =
    statusPriority[a.status] - statusPriority[b.status];

  if (statusCompare !== 0) {
    return statusCompare;
  }

  // ONLY Available items keep category grouping
  if (a.status === "Available" && b.status === "Available") {
    const categoryCompare =
      CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category);

    if (categoryCompare !== 0) {
      return categoryCompare;
    }
  }

  // Optional alphabetical sorting
  return a.name.localeCompare(b.name);
});
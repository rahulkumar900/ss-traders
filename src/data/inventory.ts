export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export const TARGET_CITIES = [
  "Patna",
  "Bengaluru",
  "Mumbai",
  "Delhi NCR",
  "Asansol",
  "Kolkata",
  "Ranchi",
  "Bhubaneswar",
];

export interface Product {
  id: number | string;
  category: string;
  name: string;
  price: number | string;
  unit: string;
  image: string;
  description?: string;
  seoDesc: string;
  features: string[];
  isFeatured?: boolean;
}

export const categories = [
  { id: "Aggregates", name: "Aggregates", color: "bg-blue-500" },
  { id: "Construction", name: "Construction", color: "bg-blue-600" },
  { id: "Cement", name: "Cement", color: "bg-gray-600" },
  { id: "Steel", name: "Steel", color: "bg-red-600" },
  { id: "Wood", name: "Wood", color: "bg-yellow-700" },
  { id: "Bricks", name: "Bricks", color: "bg-orange-700" },
  { id: "Plumbing", name: "Plumbing", color: "bg-green-600" },
  { id: "Sanitaryware", name: "Sanitaryware", color: "bg-purple-500" },
  { id: "Tiles", name: "Tiles", color: "bg-pink-500" },
  { id: "Manpower", name: "Manpower", color: "bg-teal-500" },
  { id: "Electrical", name: "Electrical", color: "bg-yellow-500" },
  { id: "Paint", name: "Paint", color: "bg-blue-400" },
  { id: "Rental", name: "Rental", color: "bg-indigo-500" },
  { id: "General", name: "General", color: "bg-gray-400" },
];

export const INVENTORY: Product[] = [
  {
    id: 1,
    category: "Aggregates",
    name: "Premium River Sand",
    price: 65,
    unit: "cft",
    image: "/products/sand.jpg",
    description: "Clean and fine river sand for masonry and plastering.",
    seoDesc: "Double-washed coarse river sand, ideal for plastering and concrete.",
    features: ["High Strength", "Silt-Free"],
    isFeatured: true,
  },
  {
    id: 2,
    category: "Wood",
    name: "Marine Plywood 18mm",
    price: 110,
    unit: "sqft",
    image: "/products/door.jpg",
    description: "Elegant and sturdy wooden solutions for interiors.",
    seoDesc: "IS:710 certified marine plywood for durable interior work.",
    features: ["Waterproof", "Termite Resistant"],
    isFeatured: true,
  },
  {
    id: 3,
    category: "Cement",
    name: "PPC Cement (50kg)",
    price: 380,
    unit: "bag",
    image: "/products/cement.jpg",
    description: "Premium grade cement for all construction needs.",
    seoDesc: "Portland Pozzolana Cement for mass concrete work.",
    features: ["High Strength", "Sulfate Resistant"],
    isFeatured: true,
  },
  {
    id: 4,
    category: "Steel",
    name: "TMT Steel Bars (12mm)",
    price: 62000,
    unit: "ton",
    image: "/products/tmt.jpg",
    description: "High-strength reinforcement steel bars.",
    seoDesc: "Fe500D Grade TMT bars for critical structural loads.",
    features: ["Earthquake Resistant"],
    isFeatured: true,
  },
  {
    id: 5,
    category: "Aggregates",
    name: 'Stone Chips 5/8"',
    price: 55,
    unit: "cft",
    image: "/products/rodi.jpg",
    description: "High-quality stone aggregates and stone dust.",
    seoDesc: "Crushed stone aggregate for high-grade concrete mixes.",
    features: ["High Strength"],
    isFeatured: true,
  },
  {
    id: 6,
    category: "Cement",
    name: "OPC 53 Grade Cement",
    price: 410,
    unit: "bag",
    image: "/products/cement.jpg",
    description: "Extra strong cement for fast-paced construction.",
    seoDesc: "Ordinary Portland Cement for fast-paced construction.",
    features: ["Quick Setting"],
  },
  {
    id: 7,
    category: "Bricks",
    name: "Fly Ash Bricks",
    price: 8,
    unit: "piece",
    image: "/products/bricks.jpg",
    description: "Eco-friendly, high-density uniform bricks for masonry.",
    seoDesc: "Eco-friendly, high-density uniform bricks for masonry.",
    features: ["Uniform Shape"],
    isFeatured: true,
  },
  {
    id: 8,
    category: "Bricks",
    name: "Red Clay Bricks (Class A)",
    price: 12,
    unit: "piece",
    image: "/products/bricks.jpg",
    description: "Traditional kiln-fired red bricks with high compressive strength.",
    seoDesc: "Traditional kiln-fired red bricks with high compressive strength.",
    features: ["High Durability"],
  },
  {
    id: 9,
    category: "Paint",
    name: "Exterior Emulsion (20L)",
    price: 4500,
    unit: "bucket",
    image: "/products/paint.jpg",
    description: "Exquisite weather-proof exterior paint.",
    seoDesc: "Weather-proof exterior paint with anti-algal properties.",
    features: ["Weather Proof"],
  },
  {
    id: 10,
    category: "Steel",
    name: "Binding Wire (18 Gauge)",
    price: 85,
    unit: "kg",
    image: "/products/iron.jpg",
    description: "Soft annealed binding wire for tying TMT bars.",
    seoDesc: "Soft annealed binding wire for tying TMT bars.",
    features: ["Rust Resistant"],
  },
  {
    id: 11,
    category: "Plumbing",
    name: "UPVC Pipe (4 inch)",
    price: 450,
    unit: "length",
    image: "/products/plumbing.jpg",
    description: "Complete range of plumbing fittings and fixtures.",
    seoDesc: "Heavy duty UPVC pipes for drainage systems.",
    features: ["Leak Proof"],
    isFeatured: true,
  },
  {
    id: 12,
    category: "Electrical",
    name: "Copper Wire 2.5 sq mm",
    price: 1800,
    unit: "coil",
    image: "/products/electrical.jpg",
    description: "Advanced flame retardant house wiring cable.",
    seoDesc: "Flame retardant house wiring cable.",
    features: ["Fire Resistant"],
  },
  {
    id: 13,
    category: "Rental",
    name: "Machinery Rental",
    price: "Custom",
    unit: "day",
    image: "/products/rental.jpg",
    description: "Industrial machinery available for short and long term hire.",
    seoDesc: "Industrial machinery available for short and long term hire.",
    features: ["JCB", "Crane", "Excavator"],
  },
];

export const products = INVENTORY; // Alias for backward compatibility

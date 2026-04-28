export interface Product {
  id: string;
  name: string;
  category: "Construction" | "Plumbing" | "Sanitaryware" | "Tiles" | "Wood" | "Manpower" | "Rental" | "General";
  description: string;
  image: string;
  isFeatured?: boolean;
}

export const categories = [
  { id: "Construction", name: "Construction", color: "bg-blue-500" },
  { id: "Plumbing", name: "Plumbing", color: "bg-green-600" },
  { id: "Sanitaryware", name: "Sanitaryware", color: "bg-purple-500" },
  { id: "Tiles", name: "Tiles", color: "bg-pink-500" },
  { id: "Wood", name: "Wood", color: "bg-yellow-500" },
  { id: "Manpower", name: "Manpower", color: "bg-teal-500" },
];

export const products: Product[] = [
  {
    id: "cement",
    name: "Cements",
    category: "Construction",
    description: "Premium grade cement for all construction needs.",
    image: "/products/cement.jpg",
    isFeatured: true,
  },
  {
    id: "tmt-steel",
    name: "TMT Steel Bar",
    category: "Construction",
    description: "High-strength reinforcement steel bars.",
    image: "/products/tmt.jpg",
    isFeatured: true,
  },
  {
    id: "rodi-dust",
    name: "Rodi & Dust",
    category: "Construction",
    description: "High-quality stone aggregates and stone dust.",
    image: "/products/rodi.jpg",
    isFeatured: true,
  },
  {
    id: "acc-blocks",
    name: "ACC Blocks",
    category: "Construction",
    description: "Lightweight and durable Autoclaved Aerated Concrete blocks.",
    image: "/products/acc.jpg",
    isFeatured: true,
  },
  {
    id: "door",
    name: "Door",
    category: "Wood",
    description: "Elegant and sturdy wooden doors for interiors and exteriors.",
    image: "/products/door.jpg",
    isFeatured: true,
  },
  {
    id: "window",
    name: "Window",
    category: "Wood",
    description: "High-quality wooden window frames and shutters.",
    image: "/products/window.jpg",
    isFeatured: true,
  },
  {
    id: "border-frame",
    name: "Border Frame",
    category: "Wood",
    description: "Decorative and functional wooden border frames.",
    image: "/products/frame.jpg",
    isFeatured: true,
  },
  {
    id: "brass-statue",
    name: "Brass Statue",
    category: "General",
    description: "Exquisite brass statues and decorative items.",
    image: "/products/brass.jpg",
    isFeatured: true,
  },
  {
    id: "river-sand",
    name: "River Sand",
    category: "Construction",
    description: "Clean and fine river sand for masonry and plastering.",
    image: "/products/sand.jpg",
    isFeatured: true,
  },
  {
    id: "bricks",
    name: "Bricks",
    category: "Construction",
    description: "Solid and well-burnt clay bricks.",
    image: "/products/bricks.jpg",
    isFeatured: true,
  },
  {
    id: "iron-rod",
    name: "Iron Rod",
    category: "Construction",
    description: "Versatile iron rods for various construction applications.",
    image: "/products/iron.jpg",
    isFeatured: true,
  },
  {
    id: "plumbing-items",
    name: "Plumbing Items",
    category: "Plumbing",
    description: "Complete range of plumbing pipes, fittings, and fixtures.",
    image: "/products/plumbing.jpg",
    isFeatured: true,
  },
  {
    id: "machinery-rental",
    name: "Machinery Rental",
    category: "Rental",
    description: "Industrial machinery available for short and long term hire.",
    image: "/services/rental.jpg",
  },
  {
    id: "drone-survey",
    name: "Drone Survey",
    category: "General",
    description: "Advanced aerial surveying and mapping services.",
    image: "/services/drone.jpg",
  }
];

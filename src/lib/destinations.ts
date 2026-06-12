import japan from "@/assets/japan.jpg";
import swiss from "@/assets/swiss.jpg";
import canada from "@/assets/canada.jpg";
import usa from "@/assets/usa.jpg";
import scotland from "@/assets/scotland.jpg";
import norway from "@/assets/norway.jpg";

export type Destination = {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  image: string;
  amenities: string[];
};

export const destinations: Destination[] = [
  { id: "japan-1", name: "Hakuba Mountain Village", country: "Japan", region: "Nagano Prefecture", description: "Traditional wooden cabins nestled in the Japanese Alps, surrounded by ancient cedar forests and natural hot springs.", price: 485, rating: 4.9, reviews: 234, guests: 4, image: japan, amenities: ["Onsen", "Tatami", "Mountain View", "Fireplace"] },
  { id: "switzerland-1", name: "Alpine Glass Lodge", country: "Switzerland", region: "Zermatt", description: "Ultra-modern glass and timber lodge with panoramic Matterhorn views and private ski access.", price: 1250, rating: 4.95, reviews: 189, guests: 6, image: swiss, amenities: ["Ski-in/Ski-out", "Spa", "Gourmet Kitchen", "Heated Pool"] },
  { id: "canada-1", name: "Rocky Mountain Retreat", country: "Canada", region: "Banff, Alberta", description: "Luxury timber-frame cabin on the shores of Lake Louise with private dock and stunning glacier views.", price: 890, rating: 4.85, reviews: 312, guests: 8, image: canada, amenities: ["Lake Access", "Kayaks", "Hot Tub", "Wildlife"] },
  { id: "usa-1", name: "Aspen Peak Chalet", country: "USA", region: "Aspen, Colorado", description: "Ski-in/ski-out mountain chalet with heated outdoor pool, private cinema, and butler service.", price: 2100, rating: 4.92, reviews: 156, guests: 10, image: usa, amenities: ["Ski Valet", "Cinema", "Wine Cellar", "Chef"] },
  { id: "scotland-1", name: "Highland Castle Estate", country: "Scotland", region: "Isle of Skye", description: "Restored 16th-century castle with modern luxury amenities, set on 500 acres of dramatic Highland landscape.", price: 1650, rating: 4.88, reviews: 98, guests: 12, image: scotland, amenities: ["Historic", "Whisky Library", "Gardens", "Fishing"] },
  { id: "norway-1", name: "Fjord Glass Cabin", country: "Norway", region: "Geirangerfjord", description: "Architectural masterpiece perched on fjord cliffs, with glass walls that disappear into the landscape.", price: 750, rating: 4.9, reviews: 267, guests: 4, image: norway, amenities: ["Fjord View", "Northern Lights", "Sauna", "Boat"] },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

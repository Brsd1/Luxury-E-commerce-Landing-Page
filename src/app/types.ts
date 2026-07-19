export interface HeroProduct {
  id: number;
  name: string;
  desc: string;
  price: string;
  tag: string;
  img: string;
}

export interface ShelfProduct {
  id: number;
  name: string;
  desc: string;
  price: string;
  tag: string;
  style: string;
  img: string;
}

export interface Category {
  label: string;
  sub: string;
  bg: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  color: string;
  color_hex: string;
  sizes: number[];
  gender: "Masculino" | "Feminino";
  price: number;
  image_url: string;
  tag: string | null;
  style: string | null;
  created_at: string;
}

export const BRANDS = [
  "Nike",
  "Adidas",
  "Jordan",
  "New Balance",
  "Mizuno",
  "Puma",
  "Vans",
  "Reserva",
  "MiuMiu",
] as const;

export const ALL_SIZES = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

export const GENDERS = ["Masculino", "Feminino"] as const;

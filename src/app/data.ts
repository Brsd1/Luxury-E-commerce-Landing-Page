import type { HeroProduct, ShelfProduct, Category } from "./types";

export const heroProducts: HeroProduct[] = [
  {
    id: 1,
    name: "Force Prime",
    desc: "Couro italiano com entressola em carbono",
    price: "R$ 1.290",
    tag: "NOVO",
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=600&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Dunk Low Pro Luxo",
    desc: "Edição limitada — couro envernizado dourado",
    price: "R$ 1.890",
    tag: "EXCLUSIVO",
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Zoom X",
    desc: "Tecnologia de amortecimento de alta performance",
    price: "R$ 2.190",
    tag: "BEST SELLER",
    img: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=600&h=600&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Urban High",
    desc: "Cano alto com acabamento em veludo premium",
    price: "R$ 1.490",
    tag: "LANÇAMENTO",
    img: "https://images.unsplash.com/photo-1750726134041-4dfd4d86592d?w=600&h=600&fit=crop&auto=format",
  },
];

export const shelfProducts: ShelfProduct[] = [
  {
    id: 101,
    name: "Air Force Gold",
    desc: "Couro legítimo com detalhes em ouro 18k",
    price: "R$ 899,90",
    tag: "PREMIUM",
    style: "Casual",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=500&fit=crop&auto=format",
  },
  {
    id: 102,
    name: "Dunk Retro",
    desc: "Reissue clássica com palmilha acolchoada OG",
    price: "R$ 749,90",
    tag: "CLÁSSICO",
    style: "Basquete",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=600&h=500&fit=crop&auto=format",
  },
  {
    id: 103,
    name: "Zoom X Run",
    desc: "Espuma reativa ZoomX para máxima propulsão",
    price: "R$ 1.199,90",
    tag: "RUNNING",
    style: "Performance",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=500&fit=crop&auto=format",
  },
  {
    id: 104,
    name: "Court Classic",
    desc: "Silhueta atemporal reinterpretada para o asfalto",
    price: "R$ 649,90",
    tag: "CASUAL",
    style: "Street",
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=500&fit=crop&auto=format",
  },
];

export const mainCategories: Category[] = [
  { label: "Lançamentos", sub: "Novidades da temporada", bg: "#0f0d00" },
  { label: "Premium",     sub: "Edições limitadas",      bg: "#100800" },
  { label: "Masculino",   sub: "Coleção masculina",      bg: "#071000" },
  { label: "Running",     sub: "Performance máxima",     bg: "#00080f" },
  { label: "Casual",      sub: "Estilo do dia a dia",    bg: "#09000f" },
  { label: "Promoções",   sub: "Até 40% off",            bg: "#0f0009" },
];

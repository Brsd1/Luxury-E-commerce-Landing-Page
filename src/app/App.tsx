import { useState } from "react";
import { BLACK } from "@/app/constants";
import type { HeroProduct } from "@/app/types";

import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { ProductSection } from "@/app/components/ProductSection";
import { Categories } from "@/app/components/Categories";
import { FemaleBanner } from "@/app/components/FemaleBanner";
import { PremiumShelf } from "@/app/components/PremiumShelf";
import { Footer } from "@/app/components/Footer";
import { SizeModal } from "@/app/components/SizeModal";
import { SearchCatalog } from "@/app/components/SearchCatalog";

function Divider() {
  return (
    <div className="px-6 md:px-10 lg:px-16">
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)",
        }}
      />
    </div>
  );
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<HeroProduct | null>(null);
  const [bagCount, setBagCount] = useState(0);

  function handleCloseModal() {
    setSelectedProduct(null);
    setBagCount((c) => c + 1);
  }

  function handleCatalogAdd() {
    setBagCount((c) => c + 1);
  }

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: BLACK, fontFamily: "Barlow, sans-serif", color: "#f0ead8" }}
    >
      <Navbar bagCount={bagCount} />
      <Hero />
      <ProductSection onSelectProduct={setSelectedProduct} />
      <Divider />
      <SearchCatalog onAddToBag={handleCatalogAdd} />
      <Divider />
      <Categories />
      <FemaleBanner />
      <Divider />
      <PremiumShelf />
      <Footer />

      {selectedProduct && (
        <SizeModal product={selectedProduct} onClose={handleCloseModal} />
      )}

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        ::-webkit-scrollbar { width: 0; height: 0; }
        * { scrollbar-width: none; }
      `}</style>
    </div>
  );
}

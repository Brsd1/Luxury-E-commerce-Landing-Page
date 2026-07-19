import { ChevronRight, Plus } from "lucide-react";
import { GOLD, BLACK } from "@/app/constants";
import { heroProducts } from "@/app/data";
import type { HeroProduct } from "@/app/types";

interface ProductSectionProps {
  onSelectProduct: (product: HeroProduct) => void;
}

export function ProductSection({ onSelectProduct }: ProductSectionProps) {
  return (
    <section id="products" className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <p
            className="text-[10px] tracking-[0.4em] mb-3 uppercase"
            style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Seleção Especial
          </p>
          <h2
            className="font-black uppercase"
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "0.06em",
              color: "#f0ead8",
              lineHeight: 1,
            }}
          >
            DESTAQUES
            <br />
            <span style={{ color: GOLD }}>DA SEMANA</span>
          </h2>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 text-sm tracking-[0.12em] hover:gap-4 transition-all duration-200"
          style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
        >
          VER TODOS <ChevronRight size={14} />
        </a>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
        style={{ background: "rgba(212,175,55,0.08)" }}
      >
        {heroProducts.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col cursor-pointer overflow-hidden"
            style={{ background: BLACK }}
            onClick={() => onSelectProduct(product)}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "1/1", background: "#0f0f0f" }}
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.72) contrast(1.06)" }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(11,11,11,0.52)" }}
              >
                <div
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-[0.2em]"
                  style={{
                    fontFamily: "Barlow Condensed, sans-serif",
                    border: `1.5px solid ${GOLD}`,
                    color: GOLD,
                    background: "rgba(11,11,11,0.82)",
                  }}
                >
                  <Plus size={11} /> SELECIONAR TAMANHO
                </div>
              </div>
              <div
                className="absolute top-3.5 left-3.5 px-2.5 py-1 text-[9px] font-bold tracking-[0.2em]"
                style={{
                  fontFamily: "Barlow Condensed, sans-serif",
                  background: GOLD,
                  color: BLACK,
                }}
              >
                {product.tag}
              </div>
            </div>

            <div
              className="flex flex-col flex-1 p-5"
              style={{ borderTop: "1px solid rgba(212,175,55,0.09)" }}
            >
              <h3
                className="font-bold text-lg mb-1 tracking-[0.04em]"
                style={{ fontFamily: "Barlow Condensed, sans-serif", color: "#f0ead8" }}
              >
                {product.name}
              </h3>
              <p
                className="text-xs text-[#666] mb-4 leading-relaxed flex-1"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                {product.desc}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="text-xl font-black"
                  style={{ fontFamily: "Barlow Condensed, sans-serif", color: GOLD }}
                >
                  {product.price}
                </span>
                <span
                  className="text-[10px] text-[#444] tracking-[0.1em]"
                  style={{ fontFamily: "Barlow, sans-serif" }}
                >
                  12x sem juros
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

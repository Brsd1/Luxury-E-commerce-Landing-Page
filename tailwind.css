import { useState, useRef } from "react";
import { ChevronRight, ShoppingBag, Check, Plus } from "lucide-react";
import { GOLD, BLACK, SHELF_SIZES } from "@/app/constants";
import { shelfProducts } from "@/app/data";
import type { ShelfProduct } from "@/app/types";

function ShelfCard({ product }: { product: ShelfProduct }) {
  const [hovering, setHovering] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [added, setAdded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSizePick(size: number) {
    setSelected(size);
    timerRef.current = setTimeout(() => {
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
        setSelected(null);
        setHovering(false);
      }, 1400);
    }, 120);
  }

  return (
    <div
      className="relative flex flex-col overflow-hidden flex-shrink-0"
      style={{
        width: "clamp(220px, 22vw, 280px)",
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "2px",
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Tag */}
      <div
        className="absolute top-3 left-3 z-10 px-2 py-0.5 text-[8px] font-bold tracking-[0.2em]"
        style={{ background: GOLD, color: BLACK, fontFamily: "Barlow Condensed, sans-serif" }}
      >
        {product.tag}
      </div>

      {/* Style badge */}
      <div
        className="absolute top-3 right-3 z-10 px-2 py-0.5 text-[8px] tracking-[0.15em]"
        style={{
          border: "1px solid rgba(212,175,55,0.3)",
          color: "rgba(212,175,55,0.7)",
          fontFamily: "Barlow Condensed, sans-serif",
        }}
      >
        {product.style}
      </div>

      {/* Image */}
      <div
        className="w-full overflow-hidden flex items-center justify-center"
        style={{ height: "200px", background: "#161616" }}
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: hovering ? "scale(1.06)" : "scale(1)",
            filter: "brightness(0.85) contrast(1.05)",
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-1.5">
        <h3
          className="font-black text-base leading-none"
          style={{
            fontFamily: "Barlow Condensed, sans-serif",
            color: "#f0ead8",
            letterSpacing: "0.06em",
          }}
        >
          {product.name}
        </h3>
        <p className="text-[11px] leading-snug text-[#666]" style={{ fontFamily: "Barlow, sans-serif" }}>
          {product.desc}
        </p>
        <p
          className="text-lg font-black mt-1"
          style={{ fontFamily: "Barlow Condensed, sans-serif", color: GOLD }}
        >
          {product.price}
        </p>
      </div>

      {/* Action area */}
      <div className="relative overflow-hidden" style={{ height: "52px" }}>
        {/* Default button */}
        <button
          className="absolute inset-0 w-full flex items-center justify-center gap-2 text-xs font-bold tracking-[0.18em]"
          style={{
            fontFamily: "Barlow Condensed, sans-serif",
            background: "rgba(212,175,55,0.08)",
            color: GOLD,
            borderTop: "1px solid rgba(212,175,55,0.15)",
          }}
        >
          <ShoppingBag size={13} />
          ADICIONAR À SACOLA
        </button>

        {/* Sliding size panel */}
        <div
          className="absolute inset-0 flex flex-col transition-transform duration-300 ease-out"
          style={{
            transform: hovering ? "translateY(0)" : "translateY(100%)",
            background: "#0f0f0f",
            borderTop: "1px solid rgba(212,175,55,0.2)",
          }}
        >
          {added ? (
            <div
              className="flex-1 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.15em]"
              style={{ color: "#4caf50", fontFamily: "Barlow Condensed, sans-serif" }}
            >
              <Check size={13} /> ADICIONADO!
            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-center px-4 py-2">
              <p
                className="text-[8px] tracking-[0.2em] text-[#555] mb-1.5 uppercase"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                Tamanho
              </p>
              <div className="flex flex-wrap gap-1">
                {SHELF_SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSizePick(s)}
                    className="text-[10px] font-semibold transition-all duration-100"
                    style={{
                      fontFamily: "Barlow Condensed, sans-serif",
                      width: "28px",
                      height: "22px",
                      border:
                        selected === s
                          ? `1px solid ${GOLD}`
                          : "1px solid rgba(255,255,255,0.1)",
                      background: selected === s ? GOLD : "transparent",
                      color: selected === s ? BLACK : "#aaa",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PremiumShelf() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="px-6 md:px-10 lg:px-16 flex items-end justify-between mb-10 md:mb-14">
        <div>
          <p
            className="text-[10px] tracking-[0.4em] mb-3 uppercase"
            style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Novos Modelos
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
            LANÇAMENTOS
            <br />
            <span style={{ color: GOLD }}>PREMIUM</span>
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
        className="flex gap-4 px-6 md:px-10 lg:px-16 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {shelfProducts.map((product) => (
          <ShelfCard key={product.id} product={product} />
        ))}

        {/* "Ver mais" end card */}
        <a
          href="#"
          className="group flex-shrink-0 flex flex-col items-center justify-center gap-4 cursor-pointer"
          style={{
            width: "clamp(140px, 14vw, 180px)",
            border: "1px solid rgba(212,175,55,0.12)",
            background: "transparent",
          }}
        >
          <div
            className="w-10 h-10 flex items-center justify-center transition-colors duration-200 group-hover:bg-[#d4af37]"
            style={{ border: "1px solid rgba(212,175,55,0.3)" }}
          >
            <Plus size={16} style={{ color: GOLD }} />
          </div>
          <span
            className="text-[10px] tracking-[0.2em] text-center"
            style={{ color: "rgba(212,175,55,0.55)", fontFamily: "Barlow Condensed, sans-serif" }}
          >
            VER
            <br />
            TODOS
          </span>
        </a>
      </div>

      <p
        className="px-6 md:px-10 lg:px-16 mt-5 text-[10px] tracking-[0.15em] text-[#333]"
        style={{ fontFamily: "Barlow, sans-serif" }}
      >
        * Passe o mouse sobre o card para selecionar o tamanho
      </p>
    </section>
  );
}

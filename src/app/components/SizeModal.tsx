import { useState, useEffect } from "react";
import { X, ShoppingBag, Check } from "lucide-react";
import { GOLD, BLACK, MODAL_SIZES } from "@/app/constants";
import type { HeroProduct } from "@/app/types";

interface SizeModalProps {
  product: HeroProduct;
  onClose: () => void;
}

export function SizeModal({ product, onClose }: SizeModalProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function handleAdd() {
    if (!selected) return;
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md"
        style={{ background: "#111", border: "1px solid rgba(212,175,55,0.25)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="h-px w-full"
          style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
        />

        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#666] hover:text-[#d4af37] transition-colors"
          >
            <X size={18} />
          </button>

          <div className="flex gap-5 mb-8">
            <div
              className="w-24 h-24 flex-shrink-0 overflow-hidden"
              style={{ background: "#1a1a1a" }}
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div>
              <p
                className="text-[9px] tracking-[0.25em] mb-1"
                style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {product.tag}
              </p>
              <h3
                className="text-xl font-bold mb-1"
                style={{
                  fontFamily: "Barlow Condensed, sans-serif",
                  color: "#f0ead8",
                  letterSpacing: "0.05em",
                }}
              >
                {product.name}
              </h3>
              <p className="text-xs text-[#777]" style={{ fontFamily: "Barlow, sans-serif" }}>
                {product.desc}
              </p>
              <p
                className="text-lg font-black mt-2"
                style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {product.price}
              </p>
            </div>
          </div>

          <p
            className="text-[10px] tracking-[0.25em] text-[#666] mb-3 uppercase"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            Selecione o tamanho
          </p>

          <div className="grid grid-cols-5 gap-2 mb-7">
            {MODAL_SIZES.map((s) => (
              <button
                key={s}
                onClick={() => setSelected(s)}
                className="h-11 text-sm font-semibold transition-all duration-150"
                style={{
                  fontFamily: "Barlow Condensed, sans-serif",
                  letterSpacing: "0.05em",
                  border:
                    selected === s
                      ? `1.5px solid ${GOLD}`
                      : "1.5px solid rgba(255,255,255,0.08)",
                  background: selected === s ? GOLD : "transparent",
                  color: selected === s ? BLACK : "#f0ead8",
                }}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            onClick={handleAdd}
            disabled={!selected}
            className="w-full flex items-center justify-center gap-3 font-bold text-sm tracking-[0.18em] transition-all duration-200 disabled:opacity-35 disabled:cursor-not-allowed"
            style={{
              height: "52px",
              fontFamily: "Barlow Condensed, sans-serif",
              background: added
                ? "rgba(76,175,80,0.12)"
                : selected
                ? GOLD
                : "rgba(212,175,55,0.1)",
              color: added ? "#4caf50" : selected ? BLACK : GOLD,
              border: added ? "1.5px solid #4caf50" : `1.5px solid ${GOLD}`,
            }}
          >
            {added ? (
              <>
                <Check size={15} /> ADICIONADO À SACOLA
              </>
            ) : (
              <>
                <ShoppingBag size={15} /> ADICIONAR À SACOLA
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { GOLD } from "@/app/constants";
import aIconMark from "@/imports/destaques.png";

interface NavbarProps {
  bagCount: number;
}

export function Navbar({ bagCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-40 w-full flex items-center justify-between px-6 md:px-10 h-[68px]"
        style={{
          background: "rgba(11,11,11,0.96)",
          borderBottom: "1px solid rgba(212,175,55,0.14)",
          backdropFilter: "blur(14px)",
        }}
      >
        <a href="#" className="select-none flex items-center gap-2.5" aria-label="Arena Sneakers">
          <div className="w-7 h-7 flex-shrink-0">
            <ImageWithFallback
              src={aIconMark}
              alt="Arena mark"
              className="w-full h-full object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
          <span
            className="text-2xl md:text-3xl font-black tracking-[0.12em]"
            style={{ fontFamily: "Barlow Condensed, sans-serif", color: GOLD }}
          >
            ARENA.
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Lançamentos", "Coleções", "Promoções"].map((label) => (
            <a
              key={label}
              href="#"
              className="text-sm tracking-[0.1em] text-[#c0b898] hover:text-[#d4af37] transition-colors duration-200"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              {label}
            </a>
          ))}
          <button
            className="flex items-center gap-2 px-5 py-2 text-sm font-bold tracking-[0.12em] transition-all duration-200 hover:bg-[#d4af37] hover:text-[#0b0b0b]"
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              border: `1.5px solid ${GOLD}`,
              color: GOLD,
            }}
          >
            <ShoppingBag size={14} />
            SACOLA ({bagCount})
          </button>
        </div>

        <button
          className="md:hidden"
          style={{ color: GOLD }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <ShoppingBag size={22} />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          className="md:hidden fixed top-[68px] left-0 right-0 z-30 px-6 py-6 flex flex-col gap-5"
          style={{ background: "#0f0f0f", borderBottom: "1px solid rgba(212,175,55,0.18)" }}
        >
          {["Lançamentos", "Coleções", "Promoções"].map((label) => (
            <a key={label} href="#" className="text-base tracking-[0.08em] text-[#c0b898]">
              {label}
            </a>
          ))}
          <button
            className="flex items-center gap-2 px-5 py-3 text-sm font-bold tracking-[0.15em] self-start"
            style={{
              border: `1.5px solid ${GOLD}`,
              color: GOLD,
              fontFamily: "Barlow Condensed, sans-serif",
            }}
          >
            <ShoppingBag size={14} />
            SACOLA ({bagCount})
          </button>
        </div>
      )}
    </>
  );
}

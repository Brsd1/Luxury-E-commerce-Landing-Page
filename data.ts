import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { GOLD, BLACK } from "@/app/constants";
import bannerLogo from "@/imports/banner.png";

export function Hero() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        minHeight: "clamp(480px, 80vh, 820px)",
        background: "linear-gradient(135deg, #0f0d05 0%, #0b0b0b 50%, #050510 100%)",
        borderBottom: "1px solid rgba(212,175,55,0.12)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="relative z-10 h-full grid grid-cols-1 md:grid-cols-3 items-center px-6 md:px-10 lg:px-16 py-12 md:py-0"
        style={{ minHeight: "inherit" }}
      >
        {/* Left — Brand logo */}
        <div className="flex items-center justify-center md:justify-start order-2 md:order-1">
          <div className="w-full max-w-[260px] md:max-w-[300px] lg:max-w-[340px]">
            <ImageWithFallback
              src={bannerLogo}
              alt="Arena Sneakers Co. — Estilo • Atitude • Original"
              className="w-full h-auto object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>

        {/* Center — Sneaker image */}
        <div className="flex items-center justify-center order-1 md:order-2 relative">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
                transform: "scale(1.4)",
                filter: "blur(24px)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&h=520&fit=crop&auto=format"
              alt="Arena Sneakers — tênis de luxo premium"
              className="relative z-10 w-full object-contain drop-shadow-2xl"
              style={{
                maxWidth: "clamp(240px, 32vw, 420px)",
                mixBlendMode: "luminosity",
                filter: "contrast(1.1) brightness(0.88)",
              }}
            />
          </div>
        </div>

        {/* Right — Slogan + CTA */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right order-3 gap-6">
          <div>
            <p
              className="text-[10px] tracking-[0.4em] mb-3 uppercase"
              style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
            >
              Coleção 2026
            </p>
            <h1
              className="leading-none font-black uppercase"
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "0.04em",
                color: "#f0ead8",
                lineHeight: 0.88,
              }}
            >
              PISE
              <br />
              <span style={{ color: GOLD }}>COM</span>
              <br />
              ATITUDE
            </h1>
          </div>

          <p
            className="text-sm max-w-[210px] leading-relaxed"
            style={{ color: "rgba(240,234,216,0.5)", fontFamily: "Barlow, sans-serif" }}
          >
            Cada par é uma declaração. Design que domina. Materiais que duram.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center md:items-end">
            <a
              href="#products"
              className="group flex items-center gap-3 px-7 py-3.5 font-bold text-sm tracking-[0.2em] transition-all duration-200"
              style={{ fontFamily: "Barlow Condensed, sans-serif", background: GOLD, color: BLACK }}
            >
              VER COLEÇÃO
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#categories"
              className="flex items-center gap-2 px-5 py-3.5 text-sm tracking-[0.15em] transition-colors duration-200 hover:text-[#d4af37]"
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                border: "1px solid rgba(212,175,55,0.28)",
                color: "rgba(240,234,216,0.65)",
              }}
            >
              CATEGORIAS
            </a>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ borderTop: "1px solid rgba(212,175,55,0.08)", height: "34px" }}
      >
        <div className="flex items-center h-full whitespace-nowrap animate-[ticker_22s_linear_infinite]">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="text-[10px] tracking-[0.3em] px-10"
                style={{
                  color: "rgba(212,175,55,0.3)",
                  fontFamily: "Barlow Condensed, sans-serif",
                }}
              >
                ARENA SNEAKERS — PISE COM ATITUDE — COLEÇÃO 2026 — FRETE GRÁTIS ACIMA DE R$500 — PARCELE EM 12X SEM JUROS —
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}

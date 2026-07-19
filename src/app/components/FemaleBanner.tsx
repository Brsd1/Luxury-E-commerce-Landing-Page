import { ArrowRight } from "lucide-react";
import { GOLD } from "@/app/constants";

export function FemaleBanner() {
  return (
    <div className="px-6 md:px-10 lg:px-16" style={{ background: "rgba(212,175,55,0.09)" }}>
      <a
        href="#"
        className="group relative flex items-center justify-between overflow-hidden cursor-pointer px-8 md:px-14"
        style={{ minHeight: "180px", background: "#3d1933" }}
      >
        {/* Hover shimmer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Left — text */}
        <div className="relative z-10 flex flex-col justify-center">
          <span
            className="text-[10px] tracking-[0.3em] mb-2 opacity-50"
            style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
          >
            07
          </span>
          <div
            className="w-8 h-px mb-4 transition-all duration-300 group-hover:w-16"
            style={{ background: GOLD }}
          />
          <h3
            className="font-black uppercase leading-none mb-2"
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              letterSpacing: "0.06em",
              color: "#f0ead8",
            }}
          >
            FEMININA
          </h3>
          <p
            className="text-xs tracking-[0.12em]"
            style={{ color: "rgba(212,175,55,0.65)", fontFamily: "Barlow, sans-serif" }}
          >
            Tendências e coleções exclusivas
          </p>
        </div>

        {/* Right — tag list + arrow */}
        <div className="relative z-10 hidden sm:flex items-center gap-10">
          <div className="flex flex-col gap-2 opacity-40">
            {["RUNNING", "CASUAL", "BASKETBALL", "LIFESTYLE"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.2em]"
                style={{ color: "#f0ead8", fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className="w-10 h-10 flex items-center justify-center transition-all duration-200 group-hover:bg-[rgba(212,175,55,0.15)]"
            style={{ border: "1px solid rgba(212,175,55,0.3)", color: GOLD }}
          >
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </div>
        </div>

        {/* Decorative lines */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "rgba(212,175,55,0.15)" }}
        />
        <div
          className="absolute top-6 right-24 w-px h-20 opacity-10"
          style={{ background: GOLD }}
        />
      </a>
    </div>
  );
}

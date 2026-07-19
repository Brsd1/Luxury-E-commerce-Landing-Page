import { ArrowRight } from "lucide-react";
import { GOLD } from "@/app/constants";
import { mainCategories } from "@/app/data";

interface CategoryCardProps {
  label: string;
  sub: string;
  bg: string;
  num: number;
}

function CategoryCard({ label, sub, bg, num }: CategoryCardProps) {
  return (
    <a
      href="#"
      className="group relative flex flex-col justify-end overflow-hidden cursor-pointer"
      style={{ aspectRatio: "1/1", background: bg }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background:
            "radial-gradient(ellipse at 30% 80%, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />

      <span
        className="absolute top-4 left-5 text-[10px] tracking-[0.25em] opacity-25"
        style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
      >
        {String(num).padStart(2, "0")}
      </span>

      <div
        className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center transition-all duration-200"
        style={{ border: "1px solid rgba(212,175,55,0.25)" }}
      >
        <ArrowRight
          size={12}
          className="transition-all duration-200 group-hover:translate-x-0.5"
          style={{ color: GOLD }}
        />
      </div>

      <div className="relative z-10 p-5 pb-6">
        <div
          className="w-7 h-px mb-3.5 transition-all duration-300 group-hover:w-12"
          style={{ background: GOLD }}
        />
        <h3
          className="font-black uppercase leading-none mb-1"
          style={{
            fontFamily: "Barlow Condensed, sans-serif",
            fontSize: "clamp(1.3rem, 2vw, 1.9rem)",
            letterSpacing: "0.06em",
            color: "#f0ead8",
          }}
        >
          {label}
        </h3>
        <p
          className="text-[11px] tracking-[0.1em]"
          style={{ color: "rgba(212,175,55,0.55)", fontFamily: "Barlow, sans-serif" }}
        >
          {sub}
        </p>
      </div>
    </a>
  );
}

export function Categories() {
  return (
    <section id="categories" className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="mb-12 md:mb-16">
        <p
          className="text-[10px] tracking-[0.4em] mb-3 uppercase"
          style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
        >
          Navegue por estilo
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
          CATEGORIAS
        </h2>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-px"
        style={{ background: "rgba(212,175,55,0.09)" }}
      >
        {mainCategories.map((cat, i) => (
          <CategoryCard key={i} label={cat.label} sub={cat.sub} bg={cat.bg} num={i + 1} />
        ))}
      </div>
    </section>
  );
}

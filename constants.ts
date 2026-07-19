import { GOLD } from "@/app/constants";

export function Footer() {
  return (
    <footer
      className="w-full px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}
    >
      <span
        className="text-2xl font-black tracking-[0.12em]"
        style={{ fontFamily: "Barlow Condensed, sans-serif", color: GOLD }}
      >
        ARENA.
      </span>

      <p
        className="text-xs tracking-[0.15em] text-[#3a3a3a]"
        style={{ fontFamily: "Barlow, sans-serif" }}
      >
        © 2026 Arena Sneakers. Todos os direitos reservados.
      </p>

      <div className="flex gap-6">
        {["Instagram", "WhatsApp", "TikTok"].map((social) => (
          <a
            key={social}
            href="#"
            className="text-xs tracking-[0.1em] text-[#444] hover:text-[#d4af37] transition-colors"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            {social}
          </a>
        ))}
      </div>
    </footer>
  );
}

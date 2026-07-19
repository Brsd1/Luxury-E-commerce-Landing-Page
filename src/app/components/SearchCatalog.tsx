import { useState, useEffect, useMemo } from "react";
import { Search, SlidersHorizontal, X, ShoppingBag, Check } from "lucide-react";
import { supabase } from "@/app/lib/supabase";
import { GOLD, BLACK } from "@/app/constants";
import { BRANDS, ALL_SIZES, GENDERS } from "@/app/types";
import type { Product } from "@/app/types";

interface SearchCatalogProps {
  onAddToBag: () => void;
}

export function SearchCatalog({ onAddToBag }: SearchCatalogProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(3000);
  const [showFilters, setShowFilters] = useState(false);
  const [quickAdd, setQuickAdd] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        setError("Não foi possível carregar os produtos.");
        setProducts([]);
      } else {
        setProducts((data as Product[]) ?? []);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const availableColors = useMemo(() => {
    const map = new Map<string, string>();
    products.forEach((p) => map.set(p.color, p.color_hex));
    return Array.from(map, ([color, hex]) => ({ color, hex }));
  }, [products]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (q) {
        const haystack = [
          p.name,
          p.brand,
          p.description,
          p.color,
          p.style ?? "",
          p.sizes.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (selectedGenders.length && !selectedGenders.includes(p.gender)) return false;
      if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
      if (selectedSizes.length && !selectedSizes.some((s) => p.sizes.includes(s))) return false;
      if (selectedColors.length && !selectedColors.includes(p.color)) return false;
      if (p.price < priceMin || p.price > priceMax) return false;
      return true;
    });
  }, [products, query, selectedGenders, selectedBrands, selectedSizes, selectedColors, priceMin, priceMax]);

  function toggle<T>(list: T[], value: T, setter: (v: T[]) => void) {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  function clearFilters() {
    setSelectedGenders([]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceMin(0);
    setPriceMax(3000);
  }

  const activeFilterCount =
    selectedGenders.length +
    selectedBrands.length +
    selectedSizes.length +
    selectedColors.length +
    (priceMin !== 0 || priceMax !== 3000 ? 1 : 0);

  function handleQuickAdd(id: string) {
    setQuickAdd(id);
    setTimeout(() => {
      setQuickAdd(null);
      onAddToBag();
    }, 1100);
  }

  return (
    <section id="catalog" className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="mb-10 md:mb-14">
        <p
          className="text-[10px] tracking-[0.4em] mb-3 uppercase"
          style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
        >
          Busque • Filtre • Encontre
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
          CATÁLOGO
          <br />
          <span style={{ color: GOLD }}>COMPLETO</span>
        </h2>
      </div>

      {/* Search bar */}
      <div className="flex gap-3 mb-6">
        <div
          className="flex-1 flex items-center gap-3 px-4 h-14"
          style={{ background: "#111", border: "1px solid rgba(212,175,55,0.18)" }}
        >
          <Search size={18} style={{ color: GOLD }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por modelo, marca, cor, tamanho..."
            className="flex-1 bg-transparent outline-none text-sm tracking-[0.05em] placeholder:text-[#555]"
            style={{ fontFamily: "Barlow, sans-serif", color: "#f0ead8" }}
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-[#555] hover:text-[#d4af37]">
              <X size={16} />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters((s) => !s)}
          className="flex items-center gap-2 px-5 h-14 text-sm font-bold tracking-[0.12em] transition-colors"
          style={{
            fontFamily: "Barlow Condensed, sans-serif",
            background: showFilters ? GOLD : "transparent",
            color: showFilters ? BLACK : GOLD,
            border: `1px solid ${GOLD}`,
          }}
        >
          <SlidersHorizontal size={16} />
          FILTROS
          {activeFilterCount > 0 && (
            <span
              className="flex items-center justify-center text-[10px] font-bold"
              style={{
                width: 18,
                height: 18,
                borderRadius: 9,
                background: showFilters ? BLACK : GOLD,
                color: showFilters ? GOLD : BLACK,
              }}
            >
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div
          className="mb-8 p-6 md:p-8"
          style={{ background: "#0f0f0f", border: "1px solid rgba(212,175,55,0.12)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3
              className="text-sm font-bold tracking-[0.2em] uppercase"
              style={{ color: GOLD, fontFamily: "Barlow Condensed, sans-serif" }}
            >
              Refinar resultados
            </h3>
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-[11px] tracking-[0.12em] text-[#666] hover:text-[#d4af37] transition-colors"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                Limpar tudo
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gender */}
            <div>
              <p
                className="text-[10px] tracking-[0.25em] mb-3 uppercase"
                style={{ color: "#888", fontFamily: "Barlow, sans-serif" }}
              >
                Gênero
              </p>
              <div className="flex flex-wrap gap-2">
                {GENDERS.map((g) => (
                  <FilterChip
                    key={g}
                    label={g}
                    active={selectedGenders.includes(g)}
                    onClick={() => toggle(selectedGenders, g, setSelectedGenders)}
                  />
                ))}
              </div>
            </div>

            {/* Brand */}
            <div>
              <p
                className="text-[10px] tracking-[0.25em] mb-3 uppercase"
                style={{ color: "#888", fontFamily: "Barlow, sans-serif" }}
              >
                Marca
              </p>
              <div className="flex flex-wrap gap-2">
                {BRANDS.map((b) => (
                  <FilterChip
                    key={b}
                    label={b}
                    active={selectedBrands.includes(b)}
                    onClick={() => toggle(selectedBrands, b, setSelectedBrands)}
                  />
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <p
                className="text-[10px] tracking-[0.25em] mb-3 uppercase"
                style={{ color: "#888", fontFamily: "Barlow, sans-serif" }}
              >
                Cor
              </p>
              <div className="flex flex-wrap gap-2">
                {availableColors.map(({ color, hex }) => (
                  <button
                    key={color}
                    onClick={() => toggle(selectedColors, color, setSelectedColors)}
                    className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 transition-all"
                    style={{
                      border: selectedColors.includes(color)
                        ? `1px solid ${GOLD}`
                        : "1px solid rgba(255,255,255,0.08)",
                      background: selectedColors.includes(color) ? "rgba(212,175,55,0.08)" : "transparent",
                    }}
                  >
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: 7,
                        background: hex,
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    />
                    <span
                      className="text-xs tracking-[0.05em]"
                      style={{ color: "#c0b898", fontFamily: "Barlow, sans-serif" }}
                    >
                      {color}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="md:col-span-2 lg:col-span-3">
              <p
                className="text-[10px] tracking-[0.25em] mb-3 uppercase"
                style={{ color: "#888", fontFamily: "Barlow, sans-serif" }}
              >
                Tamanho
              </p>
              <div className="flex flex-wrap gap-2">
                {ALL_SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggle(selectedSizes, s, setSelectedSizes)}
                    className="text-sm font-semibold transition-all"
                    style={{
                      fontFamily: "Barlow Condensed, sans-serif",
                      width: 42,
                      height: 38,
                      border: selectedSizes.includes(s)
                        ? `1px solid ${GOLD}`
                        : "1px solid rgba(255,255,255,0.08)",
                      background: selectedSizes.includes(s) ? GOLD : "transparent",
                      color: selectedSizes.includes(s) ? BLACK : "#c0b898",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price range */}
            <div className="md:col-span-2 lg:col-span-3">
              <p
                className="text-[10px] tracking-[0.25em] mb-3 uppercase"
                style={{ color: "#888", fontFamily: "Barlow, sans-serif" }}
              >
                Faixa de preço
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#666]" style={{ fontFamily: "Barlow, sans-serif" }}>
                    Min
                  </span>
                  <input
                    type="number"
                    value={priceMin}
                    onChange={(e) => setPriceMin(Math.max(0, Number(e.target.value)))}
                    className="w-24 px-3 py-2 text-sm outline-none"
                    style={{
                      background: "#161616",
                      border: "1px solid rgba(212,175,55,0.15)",
                      color: "#f0ead8",
                      fontFamily: "Barlow, sans-serif",
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#666]" style={{ fontFamily: "Barlow, sans-serif" }}>
                    Max
                  </span>
                  <input
                    type="number"
                    value={priceMax}
                    onChange={(e) => setPriceMax(Math.max(0, Number(e.target.value)))}
                    className="w-24 px-3 py-2 text-sm outline-none"
                    style={{
                      background: "#161616",
                      border: "1px solid rgba(212,175,55,0.15)",
                      color: "#f0ead8",
                      fontFamily: "Barlow, sans-serif",
                    }}
                  />
                </div>
                <span
                  className="text-xs text-[#666]"
                  style={{ fontFamily: "Barlow, sans-serif" }}
                >
                  R$ {priceMin.toFixed(0)} — R$ {priceMax.toFixed(0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p
          className="text-xs tracking-[0.12em] text-[#666]"
          style={{ fontFamily: "Barlow, sans-serif" }}
        >
          {loading
            ? "Carregando..."
            : `${filtered.length} ${filtered.length === 1 ? "produto" : "produtos"} encontrados`}
        </p>
      </div>

      {/* Error state */}
      {error && (
        <div
          className="p-6 text-center text-sm"
          style={{ background: "#1a1a1a", border: "1px solid rgba(192,57,43,0.3)", color: "#e07060" }}
        >
          {error}
        </div>
      )}

      {/* Products grid */}
      {!loading && !error && (
        <>
          {filtered.length === 0 ? (
            <div
              className="py-20 text-center"
              style={{ background: "#0f0f0f", border: "1px solid rgba(212,175,55,0.08)" }}
            >
              <p
                className="text-lg font-bold tracking-[0.1em] mb-2"
                style={{ color: "#666", fontFamily: "Barlow Condensed, sans-serif" }}
              >
                NENHUM PRODUTO ENCONTRADO
              </p>
              <p className="text-xs text-[#444]" style={{ fontFamily: "Barlow, sans-serif" }}>
                Tente ajustar a busca ou os filtros.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px"
              style={{ background: "rgba(212,175,55,0.08)" }}
            >
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  quickAdd={quickAdd === p.id}
                  onQuickAdd={() => handleQuickAdd(p.id)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-3.5 py-1.5 text-xs tracking-[0.05em] transition-all"
      style={{
        fontFamily: "Barlow, sans-serif",
        border: active ? `1px solid ${GOLD}` : "1px solid rgba(255,255,255,0.08)",
        background: active ? "rgba(212,175,55,0.1)" : "transparent",
        color: active ? GOLD : "#c0b898",
      }}
    >
      {label}
    </button>
  );
}

function ProductCard({
  product,
  quickAdd,
  onQuickAdd,
}: {
  product: Product;
  quickAdd: boolean;
  onQuickAdd: () => void;
}) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden"
      style={{ background: BLACK }}
    >
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "1/1", background: "#0f0f0f" }}
      >
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: "brightness(0.78) contrast(1.05)" }}
        />
        {product.tag && (
          <div
            className="absolute top-3.5 left-3.5 px-2.5 py-1 text-[9px] font-bold tracking-[0.2em]"
            style={{ fontFamily: "Barlow Condensed, sans-serif", background: GOLD, color: BLACK }}
          >
            {product.tag}
          </div>
        )}
        <div
          className="absolute top-3.5 right-3.5 px-2 py-0.5 text-[8px] tracking-[0.15em]"
          style={{
            border: "1px solid rgba(212,175,55,0.3)",
            color: "rgba(212,175,55,0.7)",
            fontFamily: "Barlow Condensed, sans-serif",
            background: "rgba(11,11,11,0.6)",
          }}
        >
          {product.gender}
        </div>
      </div>

      <div
        className="flex flex-col flex-1 p-5"
        style={{ borderTop: "1px solid rgba(212,175,55,0.09)" }}
      >
        <div className="flex items-center justify-between mb-1">
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "rgba(212,175,55,0.6)", fontFamily: "Barlow Condensed, sans-serif" }}
          >
            {product.brand}
          </span>
          <span className="flex items-center gap-1.5">
            <span
              style={{
                width: 11,
                height: 11,
                borderRadius: 6,
                background: product.color_hex,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
            <span
              className="text-[10px] text-[#666]"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              {product.color}
            </span>
          </span>
        </div>
        <h3
          className="font-bold text-lg mb-1 tracking-[0.04em]"
          style={{ fontFamily: "Barlow Condensed, sans-serif", color: "#f0ead8" }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs text-[#666] mb-3 leading-relaxed flex-1"
          style={{ fontFamily: "Barlow, sans-serif" }}
        >
          {product.description}
        </p>

        {/* Sizes */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.sizes.map((s) => (
            <span
              key={s}
              className="text-[10px] px-1.5 py-0.5"
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#888",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span
              className="text-xl font-black"
              style={{ fontFamily: "Barlow Condensed, sans-serif", color: GOLD }}
            >
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
            <span
              className="text-[9px] text-[#444] tracking-[0.1em]"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              12x sem juros
            </span>
          </div>
          <button
            onClick={onQuickAdd}
            disabled={quickAdd}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-[0.15em] transition-all"
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              background: quickAdd ? "rgba(76,175,80,0.12)" : GOLD,
              color: quickAdd ? "#4caf50" : BLACK,
              border: quickAdd ? "1px solid #4caf50" : "1px solid transparent",
            }}
          >
            {quickAdd ? (
              <>
                <Check size={13} /> ADICIONADO
              </>
            ) : (
              <>
                <ShoppingBag size={13} /> SACOLA
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

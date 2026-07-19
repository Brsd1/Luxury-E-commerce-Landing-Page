/*
# Create products table for Arena Sneakers store

1. New Tables
- `products`
  - `id` (uuid, primary key)
  - `name` (text, not null) — product model name (e.g. "Air Force 1", "Dunk Low")
  - `brand` (text, not null) — brand name (Nike, Adidas, Jordan, New Balance, Mizuno, Puma, Vans, Reserva, MiuMiu)
  - `description` (text, not null) — short product description
  - `color` (text, not null) — primary color name (e.g. "Branco", "Preto")
  - `color_hex` (text) — hex color for swatch display
  - `sizes` (integer[]) — available shoe sizes (e.g. {34,35,36,...})
  - `gender` (text, not null) — "Masculino" or "Feminino"
  - `price` (numeric, not null) — price in BRL
  - `image_url` (text) — product image URL
  - `tag` (text) — badge label (e.g. "NOVO", "PREMIUM")
  - `style` (text) — style category (e.g. "Casual", "Running")
  - `created_at` (timestamptz, default now())

2. Indexes
- GIN index on `sizes` for fast size filtering
- B-tree indexes on `brand`, `gender`, `color` for filter queries
- B-tree index on `price` for range queries
- B-tree index on `name` for name search

3. Security
- Enable RLS on `products`.
- Allow anon + authenticated CRUD (single-tenant public storefront, no sign-in).
- `USING (true)` is intentional: product catalog is public/shared data.

4. Notes
- This is a no-auth storefront. The anon-key client must be able to read products,
  so SELECT policy is scoped to `anon, authenticated`.
- Write policies (insert/update/delete) are also open to anon for catalog management
  simplicity in this single-tenant context.
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  brand text NOT NULL,
  description text NOT NULL,
  color text NOT NULL,
  color_hex text DEFAULT '#888888',
  sizes integer[] NOT NULL DEFAULT '{}',
  gender text NOT NULL CHECK (gender IN ('Masculino', 'Feminino')),
  price numeric(10,2) NOT NULL,
  image_url text,
  tag text,
  style text,
  created_at timestamptz DEFAULT now()
);

-- Indexes for filter performance
CREATE INDEX IF NOT EXISTS products_sizes_idx ON products USING GIN (sizes);
CREATE INDEX IF NOT EXISTS products_brand_idx ON products (brand);
CREATE INDEX IF NOT EXISTS products_gender_idx ON products (gender);
CREATE INDEX IF NOT EXISTS products_color_idx ON products (color);
CREATE INDEX IF NOT EXISTS products_price_idx ON products (price);
CREATE INDEX IF NOT EXISTS products_name_idx ON products (name);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public read for storefront (anon-key client)
DROP POLICY IF EXISTS "anon_select_products" ON products;
CREATE POLICY "anon_select_products" ON products FOR SELECT
  TO anon, authenticated USING (true);

-- Open write for catalog management (single-tenant, no auth)
DROP POLICY IF EXISTS "anon_insert_products" ON products;
CREATE POLICY "anon_insert_products" ON products FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_products" ON products;
CREATE POLICY "anon_update_products" ON products FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_products" ON products;
CREATE POLICY "anon_delete_products" ON products FOR DELETE
  TO anon, authenticated USING (true);

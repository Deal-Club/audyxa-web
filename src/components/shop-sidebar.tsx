"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";

interface PopularProduct {
  title: string;
  price: string;
}

/**
 * `.category-widget .category-list` de `shop-products-sidebar.html` : 6
 * libellés, tous distincts des 5 onglets `.filter-tabs` de la grille
 * principale (Cyber/Digital/Software/Technology/Development) — ce n'est pas
 * la même taxonomie. En source, chaque lien pointe vers l'unique fiche
 * produit générique (`shop-product-details.html`), sans `data-filter` ni
 * gestionnaire JS : une liste de liens statique, pas un filtre. Reproduite
 * ici telle quelle (liens vers `/shop/product`), sans lui inventer un
 * comportement de filtrage qui n'existe pas dans le thème source — seuls les
 * onglets `.filter-tabs` (identiques à `/shop`) filtrent réellement la
 * grille. "Artifical Intelligence" : faute de frappe présente dans le HTML
 * source, conservée verbatim.
 */
const CATEGORIES = [
  "Cloud Solution",
  "Cyber Data",
  "SEO Marketing",
  "UI/UX Design",
  "Web Development",
  "Artifical Intelligence",
];

/** `.post-widget` — 3 entrées verbatim (titre + prix) de `shop-products-sidebar.html`. */
const POPULAR_PRODUCTS: PopularProduct[] = [
  { title: "Best Headset", price: "$45.00" },
  { title: "Quality Battery", price: "$34.00" },
  { title: "Smart Watch", price: "$29.00" },
];

// Bornes et valeurs par défaut du curseur jQuery UI de la source
// (script.js:193-197 : `min: 10, max: 99, values: [10, 60]`) — la lib
// jQuery UI n'est pas chargée sur le miroir de démo (curseur mort en
// pratique, cf. BEHAVIORS.md), reproduit ici par un vrai double curseur React.
const PRICE_MIN = 10;
const PRICE_MAX = 99;
const PRICE_DEFAULT_MIN = 10;
const PRICE_DEFAULT_MAX = 60;

// Chaînes de classes Tailwind écrites littéralement (pas de concaténation
// dynamique) : le scanner statique de Tailwind ne détecte que du texte
// présent tel quel dans le fichier source.
const RANGE_INPUT_BASE =
  "pointer-events-none absolute inset-0 h-1 w-full cursor-pointer appearance-none bg-transparent " +
  "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-[radial-gradient(circle,#fff_3px,#0f0f0f_4px)] " +
  "[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-[14px] [&::-moz-range-thumb]:w-[14px] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[radial-gradient(circle,#fff_3px,#0f0f0f_4px)]";

interface ShopSidebarProps {
  /** Appelé au clic sur "Filter" (`<input type="submit" value="Filter">` en
   *  source) avec les bornes courantes du curseur. */
  onApplyPriceFilter: (min: number, max: number) => void;
}

/**
 * `.shop-sidebar` de `shop-products-sidebar.html` : recherche, catégories,
 * filtre de prix, produits populaires. Fond `--theme-light-background`
 * (#f8f6f1, token `bg-light-bg`) commun aux 3 `.sidebar-widget`.
 */
export function ShopSidebar({ onApplyPriceFilter }: ShopSidebarProps) {
  const [minVal, setMinVal] = useState(PRICE_DEFAULT_MIN);
  const [maxVal, setMaxVal] = useState(PRICE_DEFAULT_MAX);
  // Réplique fidèle d'une incohérence réelle du thème (script.js) : le texte
  // affiché au chargement place un "$" seulement devant la 2e valeur
  // (`values(0) + " - $" + values(1)` -> "10 - $60"), alors que le
  // gestionnaire `slide` n'en met aucun (`values[0] + " - " + values[1]`
  // -> "20 - 70") dès qu'on bouge un curseur. Deux formats différents pour
  // la même info, tous deux conservés tels quels (pas une erreur à corriger).
  const [amountText, setAmountText] = useState(
    `${PRICE_DEFAULT_MIN} - $${PRICE_DEFAULT_MAX}`
  );

  const percent = (value: number) =>
    ((value - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = Math.min(Number(event.target.value), maxVal - 1);
    setMinVal(next);
    setAmountText(`${next} - ${maxVal}`);
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = Math.max(Number(event.target.value), minVal + 1);
    setMaxVal(next);
    setAmountText(`${minVal} - ${next}`);
  };

  // Formulaire sans backend réel en source (`action="shop-products.html"`,
  // pas de résultat de recherche câblé) : soumission neutralisée, même
  // lecture que `news-details-sidebar.tsx`.
  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="shop-sidebar">
      <form onSubmit={handleSearchSubmit} className="sidebar-search mb-[30px]">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            required
            className="h-[52px] w-full rounded-[5px] border border-light-bg bg-light-bg px-5 py-[10px] pr-[60px] text-[#646578] outline-none transition-colors duration-500 ease-in-out"
          />
          <button
            type="submit"
            aria-label="Rechercher"
            className="absolute top-[5px] right-[5px] flex h-[42px] w-[42px] items-center justify-center rounded-[3px] bg-theme-2 text-lg text-white transition-colors duration-500 ease-in-out hover:bg-theme-1"
          >
            <i className="lnr-icon-search" aria-hidden />
          </button>
        </div>
      </form>

      <div className="sidebar-widget category-widget mb-[30px] rounded-[5px] bg-light-bg px-[30px] pt-[35px] pb-[37px]">
        <div className="widget-title mb-4">
          <h5 className="text-[22px] font-bold text-theme-1">Categories</h5>
        </div>
        <ul className="category-list space-y-[14px]">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <Link
                href="/shop/product"
                className="relative inline-block pl-5 font-normal text-[#646578] transition-colors duration-300 ease-in-out hover:text-theme-1"
              >
                <i
                  className="fa fa-caret-right absolute top-0 left-0 text-base font-semibold text-theme-2"
                  aria-hidden
                />
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widget price-filters mb-[30px] rounded-[5px] bg-light-bg px-[30px] pt-[35px] pb-[37px]">
        <div className="widget-title mb-7">
          <h5 className="text-[22px] font-bold text-theme-1">Filter by Price</h5>
        </div>
        <div className="range-slider">
          <div className="relative mb-[14px] h-1 rounded-full bg-[#d0d4dd]">
            <div
              aria-hidden
              className="absolute h-1 rounded-full bg-theme-1"
              style={{ left: `${percent(minVal)}%`, right: `${100 - percent(maxVal)}%` }}
            />
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              value={minVal}
              onChange={handleMinChange}
              aria-label="Prix minimum"
              className={`${RANGE_INPUT_BASE} z-10`}
            />
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              value={maxVal}
              onChange={handleMaxChange}
              aria-label="Prix maximum"
              className={`${RANGE_INPUT_BASE} z-20`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-[10px]">
            <p className="m-0 inline-block text-[#646578]">Price:</p>
            {/* `.range-slider .title:before { content: "$" }` : élément
                décoratif vide en source (jamais rempli par le JS, seul
                `input.property-amount` l'est), reproduit par un pseudo-élément
                équivalent plutôt qu'un texte inventé. */}
            <span
              aria-hidden
              className="relative mr-1 inline-block leading-[26px] before:absolute before:-top-[19px] before:-left-[5px] before:text-lg before:text-[#646578] before:content-['$']"
            />
            <div className="input max-w-[75px]">
              <input
                type="text"
                readOnly
                value={amountText}
                className="w-full bg-transparent text-left text-[15px] text-[#646578]"
              />
            </div>
            <button
              type="button"
              onClick={() => onApplyPriceFilter(minVal, maxVal)}
              className="ml-auto rounded-[10px] bg-theme-1 px-5 py-[7px] text-sm font-medium text-white capitalize transition-colors duration-500 ease-in-out hover:bg-theme-2"
            >
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="sidebar-widget post-widget rounded-[5px] bg-light-bg px-[30px] pt-[35px] pb-[9px]">
        <div className="widget-title mb-4">
          <h5 className="text-[22px] font-bold text-theme-1">Popular Products</h5>
        </div>
        <div className="post-inner">
          {POPULAR_PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="post group relative mb-[23px] min-h-[108px] border-b border-[#e1e1e1] pb-6 pl-[90px] last:mb-0 last:border-none last:pb-0"
            >
              {/* `<figure class="post-thumb">` pointe en source vers une URL
                  absolue kodesolution.com hors du site (bruit d'auteur du
                  thème démo, pas une vraie destination) — reciblé ici vers la
                  fiche produit générique, comme le lien du titre juste en
                  dessous. Image source 404 (vérifié) : panneau `bg-theme-3`. */}
              <Link
                href="/shop/product"
                aria-hidden
                tabIndex={-1}
                className="post-thumb absolute top-[7px] left-0 block h-[70px] w-[70px] overflow-hidden rounded-[5px] border border-[#d0d4dd] bg-theme-3 transition-colors duration-500 ease-in-out group-hover:border-theme-1"
              />
              <Link
                href="/shop/product"
                className="mb-[7px] block text-base leading-[26px] text-[#646578] transition-colors duration-500 ease-in-out group-hover:text-theme-1"
              >
                {product.title}
              </Link>
              <span className="price relative block text-sm leading-6 font-semibold text-[#0a267a]">
                {product.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

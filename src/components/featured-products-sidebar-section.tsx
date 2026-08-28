"use client";

import { useState } from "react";
import { ProductCard, type Product } from "@/components/product-card";
import { ShopSidebar } from "@/components/shop-sidebar";
import { cn } from "@/lib/utils";

type CategoryKey = "dairy" | "pantry" | "meat" | "fruit" | "vagetables";
type FilterKey = "all" | CategoryKey;

interface SidebarProduct extends Product {
  categories: CategoryKey[];
  /** Valeur numérique du prix, pour le filtre par curseur (`price` reste le
   *  libellé formaté verbatim, ex. "$43.00", jamais recalculé). */
  priceValue: number;
}

interface FilterTab {
  key: FilterKey;
  label: string;
}

// Mêmes 5 onglets `data-filter` (et mêmes libellés affichés) que
// `shop-products.html` / `/shop` — vérifié identique dans le HTML source de
// cette page (`shop-products-sidebar.html`).
const CATEGORY_FILTERS: FilterTab[] = [
  { key: "all", label: "All" },
  { key: "dairy", label: "Cyber" },
  { key: "pantry", label: "Digital" },
  { key: "meat", label: "Software" },
  { key: "fruit", label: "Technology" },
  { key: "vagetables", label: "Development" },
];

/**
 * Les 8 `.product-block` de `shop-products-sidebar.html`. Mêmes titres et
 * mêmes classes de catégorie `.mix` que `/shop` (`featured-products-section.tsx`),
 * mais avec des PRIX DIFFÉRENTS pour 4 des 8 produits — vérifié verbatim
 * dans le HTML source de cette page, pas réutilisé depuis `/shop` :
 * Watch $43.00 (vs $42.00 sur `/shop`), Charger $52.00 (vs $25.00),
 * USB Cable $25.00 (vs $20.00), SD Card $30.00 (vs $40.00). Les 4 autres
 * (Headphone, Lagage, Headset, Battery) partagent le même prix sur les deux
 * pages, coïncidence de la source, pas une erreur de recopie.
 *
 * Images `images/resource/products/1.jpg` à `8.jpg` : 404 confirmé (même
 * constat que `/shop`) -> `image: null`, panneau `bg-theme-3` géré par
 * `ProductCard`.
 */
const PRODUCTS: SidebarProduct[] = [
  { id: "1", image: null, title: "Headphone", price: "$32.00", priceValue: 32, href: "/shop/product", categories: ["pantry", "fruit"] },
  { id: "2", image: null, title: "Lagage", price: "$52.00", priceValue: 52, href: "/shop/product", categories: ["dairy", "meat", "fruit"] },
  { id: "3", image: null, title: "Watch", price: "$43.00", priceValue: 43, href: "/shop/product", categories: ["pantry", "fruit", "vagetables"] },
  { id: "4", image: null, title: "Headset", price: "$22.00", priceValue: 22, href: "/shop/product", categories: ["dairy", "meat", "vagetables"] },
  { id: "5", image: null, title: "Battery", price: "$34.00", priceValue: 34, href: "/shop/product", categories: ["pantry", "meat", "fruit"] },
  { id: "6", image: null, title: "Charger", price: "$52.00", priceValue: 52, href: "/shop/product", categories: ["dairy", "pantry"] },
  { id: "7", image: null, title: "USB Cable", price: "$25.00", priceValue: 25, href: "/shop/product", categories: ["fruit", "vagetables"] },
  { id: "8", image: null, title: "SD Card", price: "$30.00", priceValue: 30, href: "/shop/product", categories: ["dairy", "pantry", "meat", "vagetables"] },
];

interface PriceFilter {
  min: number;
  max: number;
}

/**
 * `.featured-products` de `shop-products-sidebar.html` : même règle de
 * padding dédiée que `/shop` (`padding: 120px 0 90px`, style.css) — mise en
 * page à deux colonnes en plus (`.row.clearfix` > `.col-lg-3.shop-sidebar` +
 * `.col-lg-9.content-side`, gouttière Bootstrap 30px), d'où la grille de
 * produits en 3 colonnes au lieu de 4 (`.product-block` porte `col-lg-4` ici
 * contre `col-lg-3` sur `/shop` — vérifié dans les deux HTML sources).
 *
 * Le filtre par catégories (`.filter-tabs`) est le seul lien réel avec
 * MixItUp en source ; le curseur de prix n'y est jamais câblé (cf.
 * `shop-sidebar.tsx`). Le filtrage par prix implémenté ici (au clic sur
 * "Filter", combiné en ET avec l'onglet de catégorie actif) est une
 * reconstruction fidèle de l'intention du widget ("Filter by Price" + bouton
 * "Filter") plutôt qu'un bouton décoratif mort, dans le même esprit que le
 * remplacement de MixItUp (non fonctionnel sur le miroir de démo) par un
 * filtre React réel sur `/shop`.
 */
export function FeaturedProductsSidebarSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [priceFilter, setPriceFilter] = useState<PriceFilter | null>(null);

  const visibleProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeFilter === "all" || product.categories.includes(activeFilter);
    const matchesPrice =
      !priceFilter ||
      (product.priceValue >= priceFilter.min && product.priceValue <= priceFilter.max);
    return matchesCategory && matchesPrice;
  });

  return (
    <section className="featured-products relative overflow-hidden pt-[120px] pb-[90px]">
      <div className="auto-container">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <ShopSidebar onApplyPriceFilter={(min, max) => setPriceFilter({ min, max })} />
          </div>

          <div className="content-side lg:col-span-9">
            <div className="mixitup-gallery">
              <div className="filters mb-10 text-center">
                <ul className="filter-tabs filter-btns inline-block">
                  {CATEGORY_FILTERS.map((filter) => {
                    const isActive = activeFilter === filter.key;
                    return (
                      <li key={filter.key} className="inline-block last:mr-0">
                        <button
                          type="button"
                          onClick={() => setActiveFilter(filter.key)}
                          aria-pressed={isActive}
                          className={cn(
                            "filter group relative mx-3 cursor-pointer px-0.5 pb-[10px] text-lg leading-6 font-medium text-[#797f7d] transition-colors duration-300 ease-in-out hover:text-theme-1",
                            isActive && "active text-theme-1"
                          )}
                        >
                          {filter.label}
                          <span
                            aria-hidden
                            className={cn(
                              "absolute bottom-2 left-0 h-[2px] w-full origin-top-right scale-x-0 bg-theme-2 transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] group-hover:origin-bottom-left group-hover:scale-x-100",
                              isActive && "origin-bottom-left scale-x-100"
                            )}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {visibleProducts.length > 0 ? (
                <div className="filter-list grid grid-cols-1 gap-x-[30px] md:grid-cols-2 lg:grid-cols-3">
                  {visibleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <p className="text-body-text">No products match your filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

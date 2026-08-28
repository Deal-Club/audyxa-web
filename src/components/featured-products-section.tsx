"use client";

import { useState } from "react";
import { ProductCard, type Product } from "@/components/product-card";
import { cn } from "@/lib/utils";

type CategoryKey = "dairy" | "pantry" | "meat" | "fruit" | "vagetables";
type FilterKey = "all" | CategoryKey;

interface ShopProduct extends Product {
  categories: CategoryKey[];
}

interface FilterTab {
  key: FilterKey;
  label: string;
}

// Libellés des onglets `data-role="button" data-filter="..."` du HTML
// source — les clés internes ("dairy", "pantry", ...) sont les vraies
// classes du thème (choix de nommage d'origine incohérent avec les
// libellés affichés, ex. ".dairy" -> "Cyber" : conservé tel quel, contenu
// réel de la démo, pas une erreur à corriger).
const CATEGORY_FILTERS: FilterTab[] = [
  { key: "all", label: "All" },
  { key: "dairy", label: "Cyber" },
  { key: "pantry", label: "Digital" },
  { key: "meat", label: "Software" },
  { key: "fruit", label: "Technology" },
  { key: "vagetables", label: "Development" },
];

/**
 * Les 8 `.product-block` de `shop-products.html`, verbatim (titre, prix,
 * classes de catégorie `.mix`). Images `images/resource/products/1.jpg` à
 * `8.jpg` : 404 confirmé par curl sur le serveur source (kodesolution.com)
 * ET sur le miroir de démo (h-k.com.hk) — `image: null` partout, panneau
 * neutre géré par `ProductCard`. Toutes les cartes pointent vers la même
 * fiche produit générique (`shop-product-details.html` -> `/shop/product`),
 * comme en source (pas de route par produit dans ce thème).
 *
 * Note pour un futur agent `/shop/sidebar` : `shop-products-sidebar.html`
 * réutilise les mêmes 8 titres/catégories mais avec des PRIX DIFFÉRENTS
 * (Watch $43 au lieu de $42, Charger $52 au lieu de $25, USB Cable $25 au
 * lieu de $20, SD Card $30 au lieu de $40 — vérifié dans le HTML source).
 * Ce n'est pas la même source de données : ne pas réutiliser ce tableau
 * tel quel pour cette page, seul `ProductCard` (présentation) est prévu
 * pour être partagé.
 */
const PRODUCTS: ShopProduct[] = [
  { id: "1", image: null, title: "Headphone", price: "$32.00", href: "/shop/product", categories: ["pantry", "fruit"] },
  { id: "2", image: null, title: "Lagage", price: "$52.00", href: "/shop/product", categories: ["dairy", "meat", "fruit"] },
  { id: "3", image: null, title: "Watch", price: "$42.00", href: "/shop/product", categories: ["pantry", "fruit", "vagetables"] },
  { id: "4", image: null, title: "Headset", price: "$22.00", href: "/shop/product", categories: ["dairy", "meat", "vagetables"] },
  { id: "5", image: null, title: "Battery", price: "$34.00", href: "/shop/product", categories: ["pantry", "meat", "fruit"] },
  { id: "6", image: null, title: "Charger", price: "$25.00", href: "/shop/product", categories: ["dairy", "pantry"] },
  { id: "7", image: null, title: "USB Cable", price: "$20.00", href: "/shop/product", categories: ["fruit", "vagetables"] },
  { id: "8", image: null, title: "SD Card", price: "$40.00", href: "/shop/product", categories: ["dairy", "pantry", "meat", "vagetables"] },
];

/**
 * `.featured-products` (`shop-products.html`) : filtre MixItUp + grille de
 * 8 produits. La librairie `js/mixitup.js` n'expose rien d'utilisable sur
 * le miroir de démo (comme Owl Carousel, cf. BEHAVIORS.md), mais la
 * config source (`$('.filter-list').mixItUp({})`, défaut : un seul
 * `data-filter` actif à la fois, cible `.mix`) est reproduite ici par un
 * filtre client React fonctionnel (state `activeFilter`), pas par un
 * bouton décoratif.
 *
 * `.featured-products { padding: 120px 0 90px }` est une vraie règle
 * dédiée du thème (style.css) — PAS le piège des classes Bootstrap
 * fantômes documenté dans BEHAVIORS.md : la valeur asymétrique (120/90)
 * est donc conservée telle quelle, pas uniformisée à 120/120.
 *
 * `.bg-shape` (fond `images/icons/pattern-7.png`) omis : tout
 * `images/icons/*` est en 404 confirmé sur le site source (cf.
 * BEHAVIORS.md / PAGE_TOPOLOGY.md), décor absent du rendu réel.
 *
 * Aucune classe `wow`/`data-wow-delay` sur `.product-block` en source :
 * pas de `<ScrollReveal>` ici, même lecture que `team-section.tsx` /
 * `projects-page-gallery.tsx`.
 */
export function FeaturedProductsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visibleProducts =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.categories.includes(activeFilter));

  return (
    <section className="featured-products relative overflow-hidden pt-[120px] pb-[90px]">
      <div className="auto-container">
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

          <div className="filter-list grid grid-cols-1 gap-x-[30px] md:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

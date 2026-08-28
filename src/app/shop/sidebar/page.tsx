import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { FeaturedProductsSidebarSection } from "@/components/featured-products-sidebar-section";

export const metadata: Metadata = {
  title: "Products with Sidebar | Amiso",
  description:
    "Amiso - agence de design web et applications. Clone fidèle du thème Amiso.",
};

/**
 * Page `/shop/sidebar` (`shop-products-sidebar.html` côté source). Même
 * bannière que `/shop` (h1 "Shop", fil d'Ariane "Home" / "Products" —
 * vérifié identique dans le HTML source) mais la grille "Featured Products"
 * est ici accompagnée d'une colonne `.shop-sidebar` (recherche, catégories,
 * filtre de prix, produits populaires) : voir
 * `featured-products-sidebar-section.tsx` et `shop-sidebar.tsx`.
 */
export default function ShopSidebarPage() {
  return (
    <main>
      <PageTitle title="Shop" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]} />
      <FeaturedProductsSidebarSection />
    </main>
  );
}

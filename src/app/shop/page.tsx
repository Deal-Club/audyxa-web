import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { FeaturedProductsSection } from "@/components/featured-products-section";

export const metadata: Metadata = {
  title: "Shop | Amiso",
  description:
    "Amiso - agence de design web et applications. Clone fidèle du thème Amiso.",
};

/**
 * Page `/shop` (`shop-products.html` côté source, gabarit "Featured
 * Products"). Le h1 de la bannière est "Shop", le fil d'Ariane
 * n'a que 2 niveaux ("Home" / "Products", sans crumb intermédiaire
 * "Pages" contrairement à `/team` ou `/faq`) : conforme au HTML source
 * (`<ul class="page-breadcrumb"><li><a>Home</a></li><li>Products</li></ul>`).
 * Une seule section : la grille filtrable de produits (voir
 * `featured-products-section.tsx`).
 */
export default function ShopPage() {
  return (
    <main>
      <PageTitle title="Shop" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]} />
      <FeaturedProductsSection />
    </main>
  );
}

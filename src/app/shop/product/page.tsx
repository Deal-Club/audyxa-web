import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ProductDetailsSection } from "@/components/product-details-section";
import { ProductDescriptionTabs } from "@/components/product-description-tabs";
import { RelatedProductsSection } from "@/components/related-products-section";

export const metadata: Metadata = {
  title: "Product Details | Amiso",
  description:
    "Amiso - agence de design web et applications. Clone fidèle du thème Amiso.",
};

/**
 * Page `/shop/product` (`shop-product-details.html` côté source) : gabarit
 * générique de fiche produit, partagé par toutes les entrées du shop (tous
 * les liens "voir le produit" du thème pointent vers cette même page,
 * quel que soit le produit d'origine — même motif que `/services/details`
 * et `/team/details`).
 *
 * Le H1 réel de la bannière est "Product Deatils" (faute d'orthographe
 * authentique du thème source, vérifiée dans le HTML : `<h1 class="title">
 * Product Deatils</h1>`) — conservé verbatim, contrairement au `<title>`
 * de la balise `<head>` (métadonnée invisible, pas du contenu affiché) qui
 * reprend ici l'orthographe correcte, comme les autres pages `/details`
 * déjà construites.
 */
export default function ShopProductPage() {
  return (
    <main>
      <PageTitle
        title="Product Deatils"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />
      <ProductDetailsSection />
      <ProductDescriptionTabs />
      <RelatedProductsSection />
    </main>
  );
}

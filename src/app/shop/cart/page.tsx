import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { CartPageContent } from "@/components/cart-page-content";

export const metadata: Metadata = {
  title: "Cart | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
  robots: { index: false, follow: false },
};

/**
 * Page `/shop/cart` (`shop-cart.html` côté source) : tableau du panier de
 * démo, formulaire de coupon, calcul d'expédition et encadré des totaux.
 * Breadcrumb à 2 niveaux ("Home" / "Cart"), sans item "Pages" intermédiaire
 * — confirmé dans le HTML source (`<ul class="page-breadcrumb">`).
 */
export default function CartPage() {
  return (
    <main>
      <PageTitle title="Cart" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
      <CartPageContent />
    </main>
  );
}

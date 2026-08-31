import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { CheckoutForm } from "@/components/checkout-form";

export const metadata: Metadata = {
  title: "Checkout | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
};

/**
 * Page `/shop/checkout` (shop-checkout.html côté source) : formulaire de
 * facturation, récapitulatif de commande et accordéon des moyens de
 * paiement, délégués à `CheckoutForm` (formulaire unique, sans backend
 * réel — hors périmètre projet).
 *
 * Fil d'ariane à 2 niveaux (Home > Shop, "Shop" sans lien actif), identique
 * au HTML source (`<ul class="page-breadcrumb"><li><a>Home</a></li>
 * <li>Shop</li></ul>`).
 */
export default function CheckoutPage() {
  return (
    <main>
      <PageTitle
        title="Checkout"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />
      <CheckoutForm />
    </main>
  );
}

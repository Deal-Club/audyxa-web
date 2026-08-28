"use client";

import type { FormEvent } from "react";
import { CheckoutOrderSummary } from "@/components/checkout-order-summary";
import { CheckoutPaymentAccordion } from "@/components/checkout-payment-accordion";

/**
 * `.form-control` (style.css:333) : fond et bordure `#f4f5f8`, texte
 * `#686a6f`, hauteur `calc(2.25rem + 27px)`, padding `14px 30px`. Utilisé
 * tel quel pour les `<input>` ET les `<select>` (même classe en source).
 *
 * Tous les champs de facturation portent `type="email"` dans le HTML
 * source, y compris "First Name"/"City"/"Zip Code" — coquille du thème
 * (probable copier-coller), reproduite à l'identique par fidélité
 * comportementale : un champ non vide et non conforme au format email y
 * bloque réellement la soumission native du formulaire, comme sur le site
 * source (aucun de ces champs n'a `required`, donc laissé vide il ne bloque
 * rien).
 */
const fieldClass =
  "block h-[calc(2.25rem+27px)] w-full border border-[#f4f5f8] bg-[#f4f5f8] px-[30px] py-[14px] text-[0.9rem] text-[#686a6f] outline-none placeholder:text-[#686a6f]";

const textareaClass =
  "block w-full resize-none border border-[#f4f5f8] bg-[#f4f5f8] px-[30px] py-[15px] text-[0.9rem] text-[#686a6f] outline-none placeholder:text-[#686a6f]";

const h3Class = "mb-4 text-[36px] leading-[1.2em] font-bold text-theme-1";

interface CountrySelectProps {
  label: string;
}

/**
 * `<select class="form-control">` : mêmes options ("Select Country",
 * "Australia", "UK", "USA") pour les deux champs "State/Province" ET
 * "Country" dans le HTML source — incohérence réelle du thème (le champ
 * "State/Province" propose une liste de pays), non corrigée ici.
 */
function CountrySelect({ label }: CountrySelectProps) {
  return (
    <div>
      <label className="mb-2 block">{label}</label>
      <select className={fieldClass}>
        <option>Select Country</option>
        <option>Australia</option>
        <option>UK</option>
        <option>USA</option>
      </select>
    </div>
  );
}

/**
 * Formulaire complet de `shop-checkout.html` : coordonnées de facturation,
 * notes de commande, récapitulatif de commande et choix du moyen de
 * paiement, dans un unique `<form id="checkout-form">` (comme en source).
 *
 * Aucun bouton "Place order" générique dans le HTML source : le seul
 * bouton de soumission visible est "Make Payment", à l'intérieur du
 * panneau "Credit Card" de l'accordéon (voir `checkout-payment-accordion.tsx`).
 * Le formulaire est purement démonstratif — aucun backend réel (hors
 * périmètre projet) : `onSubmit` se contente d'un `preventDefault`, sans
 * état de confirmation ni numéro de commande inventés.
 *
 * Récapitulatif de commande (`CheckoutOrderSummary`) : contenu statique
 * verbatim du HTML source (Headphone/Lagage/Watch, sous-total 180 $,
 * livraison gratuite, total 250 $). Une table `Winter Black Jacket` /
 * `Swan Crop V-Neck Tee` (contenu de `shop-cart.html`) a été observée un
 * instant dans le même onglet de navigateur pendant l'extraction — après
 * vérification (curl de `shop-checkout.html` + re-navigation isolée), il
 * s'agissait d'un agent voisin qui construit `/shop/cart` en parallèle et
 * partageait la même session de navigateur, pas d'un comportement JS réel
 * du thème : le HTML statique de `shop-checkout.html` est confirmé
 * identique, avec ou sans JS, sur une navigation isolée.
 */
export function CheckoutForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="auto-container">
        <form id="checkout-form" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
            {/* Billing Details */}
            <div className="billing-details">
              <h3 className={h3Class}>Billing Details</h3>
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-12">
                <div className="md:col-span-6">
                  <label htmlFor="checkuot-form-fname" className="mb-2 block">
                    First Name
                  </label>
                  <input
                    id="checkuot-form-fname"
                    type="email"
                    placeholder="First Name"
                    className={fieldClass}
                  />
                </div>
                <div className="md:col-span-6">
                  <label htmlFor="checkuot-form-lname" className="mb-2 block">
                    Last Name
                  </label>
                  <input
                    id="checkuot-form-lname"
                    type="email"
                    placeholder="Last Name"
                    className={fieldClass}
                  />
                </div>

                <div className="grid grid-cols-1 gap-y-4 md:col-span-12">
                  <div>
                    <label htmlFor="checkuot-form-cname" className="mb-2 block">
                      Company Name
                    </label>
                    <input
                      id="checkuot-form-cname"
                      type="email"
                      placeholder="Company Name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="checkuot-form-email" className="mb-2 block">
                      Email Address
                    </label>
                    <input
                      id="checkuot-form-email"
                      type="email"
                      placeholder="Email Address"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="checkuot-form-address" className="mb-2 block">
                      Address
                    </label>
                    <input
                      id="checkuot-form-address"
                      type="email"
                      placeholder="Street address"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Apartment, suite, unit etc. (optional)"
                      className={fieldClass}
                      aria-label="Apartment, suite, unit etc. (optional)"
                    />
                  </div>
                </div>

                <div className="md:col-span-6">
                  <label htmlFor="checkuot-form-city" className="mb-2 block">
                    City
                  </label>
                  <input
                    id="checkuot-form-city"
                    type="email"
                    placeholder="City"
                    className={fieldClass}
                  />
                </div>
                <div className="md:col-span-6">
                  <CountrySelect label="State/Province" />
                </div>

                <div className="md:col-span-6">
                  <label htmlFor="checkuot-form-zip" className="mb-2 block">
                    Zip/Postal Code
                  </label>
                  <input
                    id="checkuot-form-zip"
                    type="email"
                    placeholder="Zip/Postal Code"
                    className={fieldClass}
                  />
                </div>
                <div className="md:col-span-6">
                  <CountrySelect label="Country" />
                </div>
              </div>
            </div>

            {/* Additional information */}
            <div>
              <h3 className={h3Class}>Additional information</h3>
              <label htmlFor="order_comments" className="mb-2 block">
                Order notes{" "}
                <span className="optional">(optional)</span>
              </label>
              <textarea
                id="order_comments"
                rows={3}
                placeholder="Notes about your order, e.g. special notes for delivery."
                className={textareaClass}
              />
            </div>
          </div>

          <CheckoutOrderSummary />
          <CheckoutPaymentAccordion />
        </form>
      </div>
    </section>
  );
}

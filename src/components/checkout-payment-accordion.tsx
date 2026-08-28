"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const fieldClass =
  "block h-[calc(2.25rem+27px)] w-full border border-[#f4f5f8] bg-[#f4f5f8] px-[30px] py-[14px] text-[0.9rem] text-[#686a6f] outline-none placeholder:text-[#686a6f]";

const BANK_TRANSFER_TEXT =
  "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.";

/**
 * Libellés verbatim de `.payment-method .accordion-box` (source
 * `shop-checkout.html`) — dont la coquille "Credir Card" du thème, non
 * corrigée. Les 3 derniers panneaux partagent le même paragraphe de démo
 * (copié-collé du thème, vérifié identique aux trois), reproduit tel quel.
 */
const SIMPLE_METHODS = [
  { label: "Direct Bank Transfer" },
  { label: "Cheque Payment" },
  { label: "Other Payment" },
];

/**
 * Accordéon "Choose a Payment Method" de `shop-checkout.html`. Réutilise le
 * même mécanisme que `.accordion-box` sur la page FAQ (voir
 * `faq-page-accordion.tsx` : toujours un panneau ouvert, cliquer sur le
 * panneau déjà actif ne fait rien) mais avec un habillage visuel propre à
 * `.payment-method .accordion-box` (style.css:9709-9743) : boutons
 * toujours à fond blanc (padding 19px/30px au lieu de 25px/40px), icône
 * `lnr-icon-chevron-down` à droite plutôt qu'un `+`/chevron FontAwesome.
 *
 * Particularité vérifiée en direct (getComputedStyle sur le miroir) : sur
 * le panneau actif, l'icône passe à `color:#fff` (règle
 * `.acc-btn.active .icon-outer`) alors que le fond du bouton reste blanc —
 * l'icône devient donc invisible. C'est un vrai bug visuel du thème
 * source, reproduit à l'identique plutôt que "corrigé".
 *
 * Premier panneau (Credit Card) ouvert par défaut (`active-block` /
 * `acc-btn active` / `acc-content current` dans le HTML source) : c'est le
 * seul à contenir un vrai sous-formulaire (nom/numéro/expiration/CVC) et le
 * bouton "Make Payment" — qui est le SEUL bouton de soumission visible sur
 * toute la page (pas de bouton générique "Place order" dans le HTML
 * source, contrairement à un gabarit WooCommerce classique).
 */
export function CheckoutPaymentAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      <h3 className="mb-4 text-[36px] leading-[1.2em] font-bold text-theme-1">
        Choose a Payment Method
      </h3>
      <ul className="accordion-box relative list-none">
        {/* Panneau 0 : Credit Card / Debit Card (coquille "Credir" verbatim) */}
        <AccordionItem
          label="Credir Card / Debit Card"
          isActive={openIndex === 0}
          onOpen={() => setOpenIndex(0)}
          isLast={false}
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-12">
            <div className="md:col-span-6">
              <input
                type="text"
                name="name"
                placeholder="Name on the Card"
                required
                className={fieldClass}
              />
            </div>
            <div className="md:col-span-6">
              <input
                type="text"
                name="number"
                placeholder="Card Number"
                required
                className={fieldClass}
              />
            </div>
            <div className="md:col-span-6 [@media(min-width:992px)]:col-span-3">
              <input
                type="text"
                name="date"
                placeholder="Expiry Date"
                required
                className={fieldClass}
              />
            </div>
            <div className="md:col-span-6 [@media(min-width:992px)]:col-span-3">
              <input
                type="text"
                name="code"
                placeholder="Security Code"
                required
                className={fieldClass}
              />
            </div>
            <div className="flex md:col-span-12 [@media(min-width:992px)]:col-span-6">
              <button
                type="submit"
                className="group relative z-0 inline-flex items-center justify-center self-center overflow-hidden whitespace-nowrap rounded-[10px] bg-theme-2 px-[50px] py-[15px] text-base font-extrabold leading-7 text-white transition-all duration-500"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 -z-10 w-6 rounded-[10px] bg-theme-2-dark transition-[width] duration-300 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:w-full"
                />
                <span className="btn-title relative z-[2]">Make Payment</span>
              </button>
            </div>
          </div>
        </AccordionItem>

        {SIMPLE_METHODS.map((method, i) => {
          const index = i + 1;
          return (
            <AccordionItem
              key={method.label}
              label={method.label}
              isActive={openIndex === index}
              onOpen={() => setOpenIndex(index)}
              isLast={index === SIMPLE_METHODS.length}
            >
              <p className="mb-0 text-base leading-[30px] text-body-text">
                {BANK_TRANSFER_TEXT}
              </p>
            </AccordionItem>
          );
        })}
      </ul>
    </div>
  );
}

interface AccordionItemProps {
  label: string;
  isActive: boolean;
  onOpen: () => void;
  isLast: boolean;
  children: React.ReactNode;
}

function AccordionItem({ label, isActive, onOpen, isLast, children }: AccordionItemProps) {
  return (
    <li
      className={cn(
        "accordion block relative overflow-hidden rounded-[10px] bg-[#f4f5f4]",
        isLast ? "mb-0" : "mb-5"
      )}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
        aria-expanded={isActive}
        className={cn(
          "acc-btn relative cursor-pointer border border-[#e2e2e2] bg-white px-[30px] pt-[19px] pb-[22px] text-[18px] leading-[25px] font-bold tracking-[-0.04em] text-theme-1 transition-all duration-500 ease-in-out",
          isActive ? "rounded-t-xl rounded-b-none text-theme-2" : "rounded-xl"
        )}
      >
        {label}
        <div
          className={cn(
            "icon-outer absolute top-1/2 right-[30px] -translate-y-1/2 text-[28px]",
            isActive ? "text-white" : "text-[#1e2434]"
          )}
        >
          <i className="lnr-icon-chevron-down" aria-hidden />
        </div>
      </div>
      <div className={cn("acc-content relative", isActive ? "block" : "hidden")}>
        <div className="payment-info bg-white px-[30px] pt-[30px] pb-[10px]">
          {children}
        </div>
      </div>
    </li>
  );
}

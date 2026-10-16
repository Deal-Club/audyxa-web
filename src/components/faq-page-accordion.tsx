"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

import type { FaqItem } from "@/lib/faq-schema";

/**
 * Accordéon de la page `/faq` (`page-faq.html`, section `.accordion-box`
 * hors `.faqs-section` — liste seule, sans colonne image ni jauges, à la
 * différence de la teaser FAQ de la home dans `faq-section.tsx`).
 *
 * Comportement vérifié en direct (script.js `.accordion-box` handler + test
 * navigateur sur le miroir de démo) : contrairement à la teaser home, cliquer
 * sur le panneau déjà ouvert ne le referme PAS (`if next('.acc-content')
 * .is(':visible') return false`). Il y a donc toujours exactement un panneau
 * ouvert — jamais zéro. Un state `openIndex: number` (non nullable) suffit :
 * cliquer sur l'index déjà actif ne change rien, cliquer sur un autre bascule.
 * Premier item ouvert par défaut (`.active-block` / `.acc-btn.active` /
 * `.acc-content.current` dans le HTML source).
 *
 * Icône : vérifié en direct que `.acc-btn.active .icon:before { content:
 * "\f106" }` (glyphe "angle-up") remplace le "+" par défaut — différent du
 * chevron pivoté à 180° utilisé par la teaser home. Reproduit ici par un
 * changement de classe FontAwesome plutôt qu'une rotation CSS.
 */
export function FaqPageAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative">
      <div className="auto-container py-[120px]">
        <ScrollReveal as="ul" animation="fadeInRight" className="accordion-box relative">
          {items.map((item, index) => {
            const isActive = openIndex === index;
            return (
              <li
                key={item.question}
                className={cn(
                  "accordion block relative mb-5 overflow-hidden rounded-[10px] bg-white last:mb-0",
                  isActive && "shadow-[0_10px_60px_rgba(0,0,0,0.07)]"
                )}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenIndex(index);
                    }
                  }}
                  aria-expanded={isActive}
                  className={cn(
                    "acc-btn relative cursor-pointer rounded-xl border border-[#e2e2e2] bg-white py-[25px] pr-[70px] pl-10 text-[18px] leading-[25px] font-bold tracking-[-0.04em] text-theme-1 transition-all duration-500 ease-in-out",
                    isActive && "rounded-t-xl rounded-b-none text-theme-2"
                  )}
                >
                  {item.question}
                  <div
                    className={cn(
                      "icon absolute top-5 right-5 flex h-[35px] w-[35px] items-center justify-center text-[18px] text-theme-1 transition-all duration-500 ease-in-out",
                      isActive && "text-theme-2"
                    )}
                  >
                    <i className={isActive ? "fa fa-angle-up" : "fa fa-plus"} />
                  </div>
                </div>
                <div className={cn("acc-content relative", isActive ? "block" : "hidden")}>
                  <div className="content rounded-b-[10px] border border-t-0 border-[#e2e2e2] px-10 pt-5 pb-[30px]">
                    <div className="text mb-0 block text-base leading-[30px] text-[#808287]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}

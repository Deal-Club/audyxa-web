"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { PieStat } from "@/components/pie-stat";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Contenu verbatim de la section FAQ source (3 réponses identiques dans le
 * thème d'origine — contenu de démo réel, on ne diversifie pas).
 */
const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Interdum et malesuada fames ac ante ipsum",
    answer:
      "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.",
  },
  {
    question: "Maecenas condimentum sollicitudin ligula,",
    answer:
      "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.",
  },
  {
    question: "Duis rhoncus orci ut metus rhoncus",
    answer:
      "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.",
  },
];

/**
 * Section FAQ du thème Amiso (.faqs-section). Accordéon fait main (state
 * local, un seul panneau ouvert à la fois) car il reproduit exactement le
 * comportement jQuery `slideToggle` du source : clic sur le panneau ouvert
 * -> fermeture, clic sur un autre -> fermeture du premier + ouverture du
 * nouveau. Premier item ouvert par défaut (.active-block / .acc-btn.active
 * / .acc-content.current dans le HTML source).
 *
 * `<div class="bg bg-pattern-4"></div>` du source pointe vers un asset en
 * 404 sur le site live : non reproduit (aucune image de fond de substitution).
 */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faqs-section relative bg-theme-3 pt-[120px] pb-[70px]">
      <div className="auto-container">
        <SectionTitle
          center
          subTitle="You’ve have Any Questions?"
          title="Frequently asked questions"
        />

        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[50px] lg:grid-cols-2">
          {/* Colonne FAQ */}
          <div className="faq-column relative mb-[50px] lg:mb-0">
            <div className="inner-column relative pr-0 lg:pr-[10px]">
              <ScrollReveal as="ul" animation="fadeInRight" className="accordion-box relative">
                {FAQ_ITEMS.map((item, index) => {
                  const isActive = openIndex === index;
                  return (
                    <li
                      key={item.question}
                      className={cn(
                        "accordion block relative mb-5 overflow-hidden rounded-[10px] bg-white",
                        isActive && "shadow-[0_10px_60px_rgba(0,0,0,0.07)]"
                      )}
                    >
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => toggle(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggle(index);
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
                            isActive && "rotate-180 text-theme-2"
                          )}
                        >
                          <i className="fa fa-angle-down" />
                        </div>
                      </div>
                      <div
                        className={cn(
                          "acc-content relative",
                          isActive ? "block" : "hidden"
                        )}
                      >
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
          </div>

          {/* Colonne image + graphiques circulaires */}
          <div className="image-column relative">
            <div className="inner-column relative pr-[220px]">
              <div className="image-box relative">
                <figure className="image relative overflow-hidden rounded-[10px]">
                  <Image
                    src="/images/resource/faq.jpg"
                    alt=""
                    width={480}
                    height={520}
                    className="h-auto w-full rounded-[10px] object-cover"
                  />
                </figure>
              </div>

              {/* Positionnement exact du source : .graph-box n'a aucune règle
                  responsive dans le CSS extrait, il reste absolu à toutes les
                  largeurs (right:0; top:0; width:220px). */}
              <div className="graph-box absolute top-0 right-0 w-[220px] text-center">
                <div className="pie-graph relative mb-[25px] border-b border-[#e2e2e2] pb-[25px] last:mb-0 last:border-b-0 last:pb-0">
                  <PieStat
                    percent={90}
                    label={
                      <>
                        Affordable <br />
                        cost
                      </>
                    }
                    speed={2000}
                    fgColor="#ff3838"
                    bgColor="#f9f9f9"
                    size={125}
                  />
                </div>
                <div className="pie-graph relative mb-[25px] border-b border-[#e2e2e2] pb-[25px] last:mb-0 last:border-b-0 last:pb-0">
                  <PieStat
                    percent={50}
                    label={
                      <>
                        Quality <br />
                        of work
                      </>
                    }
                    speed={2000}
                    fgColor="#ff3838"
                    bgColor="#f9f9f9"
                    size={125}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

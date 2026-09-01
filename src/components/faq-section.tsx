"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { PieStat } from "@/components/pie-stat";
import { ScrollReveal } from "@/components/scroll-reveal";
import { imageHoverOverlayClass } from "@/lib/image-hover";
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
    question: "Par où commencer quand tout semble prioritaire ?",
    answer:
      "Nous commençons par un diagnostic pour distinguer ce qui relève d'un vrai blocage métier, d'un problème de processus, de donnée ou d'outil. Cela évite de lancer des projets inutiles.",
  },
  {
    question: "Est-ce que vous intervenez seulement sur le conseil ?",
    answer:
      "Non. Audyxa combine conseil et exécution : audit, priorisation, automatisation, intégration IA, développement d'outils métier, accompagnement au déploiement et suivi des résultats.",
  },
  {
    question: "Comment savoir si un projet digital sera rentable ?",
    answer:
      "Nous relions chaque chantier à des indicateurs concrets : temps gagné, erreurs évitées, capacité libérée, meilleure qualité de donnée, gain commercial ou meilleure visibilité sur l'activité.",
  },
  {
    question: "Travaillez-vous avec des entreprises en France et en Afrique francophone ?",
    answer:
      "Oui. Notre positionnement est pensé pour accompagner des entreprises des deux marchés avec un langage simple, des solutions pragmatiques et une logique forte de retour sur investissement.",
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
interface FaqSectionProps {
  items?: FaqItem[];
  subTitle?: string;
  title?: React.ReactNode;
  imageSrc?: string;
  layout?: "with-image" | "two-columns";
}

function AccordionItem({
  item,
  isActive,
  onToggle,
}: {
  item: FaqItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <li
      className={cn(
        "accordion block relative mb-5 overflow-hidden rounded-[10px] bg-white",
        isActive && "shadow-[0_10px_60px_rgba(0,0,0,0.07)]"
      )}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
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
      <div className={cn("acc-content relative", isActive ? "block" : "hidden")}>
        <div className="content rounded-b-[10px] border border-t-0 border-[#e2e2e2] px-10 pt-5 pb-[30px]">
          <div className="text mb-0 block text-base leading-[30px] text-[#808287]">
            {item.answer}
          </div>
        </div>
      </div>
    </li>
  );
}

export function FaqSection({
  items = FAQ_ITEMS,
  subTitle = "Questions frequentes",
  title = "Ce que les entreprises nous demandent le plus",
  imageSrc = "/images/resource/faq.jpg",
  layout = "with-image",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  if (layout === "two-columns") {
    const midpoint = Math.ceil(items.length / 2);
    const columns = [items.slice(0, midpoint), items.slice(midpoint)];

    return (
      <section className="faqs-section relative bg-theme-3 pt-[90px] pb-[60px]">
        <div className="auto-container">
          <SectionTitle center subTitle={subTitle} title={title} />

          <div className="grid grid-cols-1 gap-x-[30px] lg:grid-cols-2">
            {columns.map((column, columnIndex) => (
              <ScrollReveal
                key={columnIndex}
                as="ul"
                animation={columnIndex === 0 ? "fadeInRight" : "fadeInLeft"}
                className="accordion-box relative mb-[50px] lg:mb-0"
              >
                {column.map((item) => {
                  const globalIndex = items.indexOf(item);
                  return (
                    <AccordionItem
                      key={item.question}
                      item={item}
                      isActive={openIndex === globalIndex}
                      onToggle={() => toggle(globalIndex)}
                    />
                  );
                })}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="faqs-section relative bg-theme-3 pt-[90px] pb-[60px]">
      <div className="auto-container">
        <SectionTitle
          center
          subTitle={subTitle}
          title={title}
        />

        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[50px] lg:grid-cols-2">
          {/* Colonne FAQ */}
          <div className="faq-column relative mb-[50px] lg:mb-0">
            <div className="inner-column relative pr-0 lg:pr-[10px]">
              <ScrollReveal as="ul" animation="fadeInRight" className="accordion-box relative">
                {items.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    item={item}
                    isActive={openIndex === index}
                    onToggle={() => toggle(index)}
                  />
                ))}
              </ScrollReveal>
            </div>
          </div>

          {/* Colonne image + graphiques circulaires */}
          <div className="image-column relative">
            <div className="inner-column relative pr-[220px]">
              <div className="image-box relative">
                <figure className={cn("image rounded-[10px]", imageHoverOverlayClass)}>
                  <Image
                    src={imageSrc}
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
                    percent={92}
                    label={
                      <>
                        Focus <br />
                        resultats
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
                    percent={88}
                    label={
                      <>
                        Approche <br />
                        terrain
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

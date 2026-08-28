"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Contenu verbatim de la section FAQ de `page-service-details.html` (texte
 * de réponse identique et dupliqué pour les 4 questions en source — contenu
 * réel du thème, non inventé, distinct du texte de `/faq`).
 */
const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is my technology allowed on tech?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "How to soft launch your business?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "How to turn visitors into contributors",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "How can i find my solutions?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
];

/**
 * Accordéon `.accordion-box` de la section Services Details. Même
 * comportement vérifié que `faq-page-accordion.tsx` (script.js partagé) :
 * un panneau toujours ouvert, cliquer sur celui déjà actif ne le referme
 * pas. Seule différence avec `/faq` : en source, c'est le 2e item ("How to
 * soft launch your business?", `class="accordion block active-block"`) qui
 * est ouvert par défaut ici, pas le premier.
 */
export function ServiceDetailsFaq() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <ScrollReveal as="ul" animation="fadeInRight" className="accordion-box relative mt-6">
      {FAQ_ITEMS.map((item, index) => {
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
  );
}

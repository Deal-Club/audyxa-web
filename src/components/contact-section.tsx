"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

/**
 * Style commun aux champs `.contact-form .form-group input/textarea` du
 * thème Amiso : fond bg-theme-3 (#f3f3f3), bordure blanche translucide,
 * bordure rouge (theme-2) au focus.
 */
const fieldClass =
  "block w-full rounded-[5px] border border-white/15 bg-theme-3 px-[30px] py-[15px] text-sm leading-[30px] text-[#6a6a6a] transition-all duration-300 outline-none focus:border-theme-2";

// Note : le ::before en pointillés de .contact-section (background-image dots-2.png) n'a pas
// d'asset source disponible dans le projet (seul contact.jpg est fourni pour cette section) :
// décor non reproduit, comme pour le pattern équivalent de FaqSection.

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Formulaire statique : pas de backend réel dans ce clone (hors périmètre, cf. PAGE_TOPOLOGY.md).
    event.preventDefault();
  };

  return (
    // .contact-section.pt-0.pb-0 : les utilitaires Bootstrap du HTML source annulent le
    // "padding: 120px 0" par défaut de .contact-section, la section colle donc à ses voisines.
    // overflow-hidden confine le débordement volontaire de l'image (cf. commentaire plus bas)
    // à la largeur du viewport, pour éviter une barre de défilement horizontale.
    <section className="relative overflow-hidden py-0">
      <div className="auto-container">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[50px] lg:grid-cols-2 lg:gap-y-0">
          {/* Colonne formulaire */}
          <div className="relative">
            <ScrollReveal animation="fadeInLeft" className="relative">
              <SectionTitle subTitle="Contact Now" title="Get in touch with us" />

              <form onSubmit={handleSubmit} className="relative">
                <div className="grid grid-cols-1 gap-x-[30px] gap-y-5 lg:grid-cols-2">
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Your name"
                    required
                    className={fieldClass}
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    required
                    className={fieldClass}
                  />
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Phone"
                    required
                    className={fieldClass}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className={fieldClass}
                  />
                  <textarea
                    name="message"
                    placeholder="Write a Message"
                    required
                    className={cn(fieldClass, "h-[150px] resize-none lg:col-span-2")}
                  />

                  <button
                    type="submit"
                    className="group relative z-0 mt-[5px] inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[10px] bg-theme-2 px-[50px] py-[15px] text-base font-extrabold leading-7 text-white transition-all duration-500 lg:col-span-2"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 -z-10 w-6 rounded-[10px] bg-theme-2-dark transition-[width] duration-300 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:w-full"
                    />
                    <span className="relative z-[2]">Submit Message</span>
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>

          {/* Colonne image */}
          <div className="relative">
            {/*
              .contact-section .image-column .inner-column a un margin-right: -375px sur desktop :
              l'image déborde volontairement du conteneur vers le bord du viewport. Reproduit
              uniquement à partir de lg (le breakpoint où le thème source fait aussi passer les
              colonnes de "empilées" à "côte à côte" - .col-lg-6 - annulant ce débordement en
              dessous). overflow-hidden sur la <section> évite la barre de défilement horizontale
              que ce débordement provoquerait sur les très grands écrans.
            */}
            <div className="relative lg:-mr-[375px] lg:pl-[70px]">
              <figure className="relative mb-0">
                <span
                  aria-hidden
                  className="absolute -left-5 top-[60px] bottom-0 hidden w-5 rounded-tl-[10px] bg-theme-2 lg:block"
                />
                <Image
                  src="/images/resource/contact.jpg"
                  alt=""
                  width={862}
                  height={631}
                  className="h-auto w-full rounded-tl-[10px] object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

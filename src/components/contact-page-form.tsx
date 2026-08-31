"use client";

import type { FormEvent } from "react";
import { SectionTitle } from "@/components/section-title";

/**
 * Champs `.team-contact-form .form-control` : fond blanc (surchargé depuis
 * le blanc-cassé #f4f5f8 par défaut de `.form-control`), bordure fine
 * assortie, texte #686a6f, sans arrondi (aucun border-radius déclaré en
 * source). Hauteur calc(2.25rem + 27px) = 63px pour les champs simples.
 */
const fieldClass =
  "block w-full border border-[#f4f5f8] bg-white px-[30px] py-[14px] text-[0.9rem] text-[#686a6f] outline-none placeholder:text-[#686a6f]";

/**
 * Section `.team-contact-form` de page-contact.html : formulaire de contact
 * complet (nom/email/sujet/téléphone/message). Aucune classe `wow` sur ces
 * éléments en source : pas d'animation d'entrée ajoutée.
 *
 * Formulaire statique : pas de backend réel dans ce clone (hors périmètre,
 * cf. PAGE_TOPOLOGY.md) — `onSubmit` se contente d'un `preventDefault`,
 * sans état de succès ni endpoint inventé.
 */
export function ContactPageForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="bg-[#eef0f6] pt-[120px] pb-[120px]">
      <div className="auto-container">
        <SectionTitle
          center
          subTitle="Échange stratégique"
          title={
            <>
              Décrivez votre contexte, vos <br /> blocages et vos objectifs
            </>
          }
          text="Plus votre brief est concret, plus nous pouvons cadrer rapidement les bons leviers de transformation."
        />

        <div className="mx-auto w-full sm:w-10/12 lg:w-8/12">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-4 sm:grid-cols-2">
              <input
                name="form_name"
                type="text"
                placeholder="Nom"
                className={fieldClass}
              />
              <input
                name="form_email"
                type="email"
                placeholder="Email"
                required
                className={fieldClass}
              />
              <input
                name="form_subject"
                type="text"
                placeholder="Sujet"
                required
                className={fieldClass}
              />
              <input
                name="form_phone"
                type="text"
                placeholder="Téléphone"
                className={fieldClass}
              />
              <textarea
                name="form_message"
                placeholder="Décrivez votre besoin, vos outils actuels, vos pertes de temps ou le projet à cadrer"
                rows={5}
                required
                className={`${fieldClass} h-[180px] resize-none sm:col-span-2`}
              />

              <div className="flex flex-wrap justify-center gap-[15px] sm:col-span-2">
                <button
                  type="submit"
                  className="group relative z-0 inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[10px] bg-theme-2 px-[50px] py-[15px] text-base font-extrabold leading-7 text-white transition-all duration-500"
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 -z-10 w-6 rounded-[10px] bg-theme-2-dark transition-[width] duration-300 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:w-full"
                  />
                  <span className="relative z-[2]">Envoyer la demande</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import type { FormEvent } from "react";
import { ThemeBtn } from "@/components/theme-btn";

/**
 * Section `.error-page__inner` de `page-404.html` : seule page du thème dont
 * la `<section>` source n'a pas de classe et n'est PAS précédée d'une
 * bannière `.page-title` — on enchaîne header -> contenu 404 directement,
 * pas de `<PageTitle />` ici (voir docs/research/PAGE_TOPOLOGY.md).
 *
 * `pt-120`/`pb-70` sur `.auto-container` sont des classes fantômes sans
 * règle CSS (cf. BEHAVIORS.md "Classes utilitaires Bootstrap fantômes") :
 * seule règle réelle applicable est `section > .container { padding-top:
 * var(--container-pt); padding-bottom: var(--container-pt) }` avec
 * `--container-pt: 120px` -> 120px en haut ET en bas, reproduit ici en
 * `pt-[120px] pb-[120px]`.
 *
 * `images/resource/404.jpg` (hébergée sur le domaine externe
 * kodesolution.com dans le HTML source) répond 404 à la fois sur le miroir
 * source (h-k.com.hk/demo/k) et sur kodesolution.com lui-même : remplacée
 * par un panneau neutre `bg-theme-3`, sans illustration inventée (même
 * traitement que `news-details-content.tsx` pour `news-details.jpg`). Le
 * CSS source ne contraint pas la taille de cette image (`.error-page__title`
 * à 280px n'est pas utilisé dans le markup, seul `.error-page__title-box`
 * l'enveloppe) : dimensions du panneau (300px, carré) estimées, cohérentes
 * avec une illustration d'erreur 404 typique.
 *
 * Formulaire de recherche décoratif, comme le popup de recherche du header :
 * `onSubmit` se limite à `preventDefault`, aucun backend de recherche réel
 * (hors périmètre du clone).
 */
export function ErrorPageContent() {
  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section>
      <div className="auto-container pt-[120px] pb-[120px]">
        <div className="text-center">
          {/* error-page__title-box */}
          <div className="relative block">
            <div className="mx-auto mb-5 aspect-square w-full max-w-[300px] rounded-[10px] bg-theme-3" />
            <h3 className="-mt-4 text-[40px] leading-[50px] tracking-[0.1em] text-theme-1 uppercase">
              Page not found!
            </h3>
          </div>

          {/* error-page__text */}
          <p className="text-center text-[20px] leading-[30px] text-body-text">
            Sorry we can’t find that page! The page you are looking <br />
            for was never existed.
          </p>

          {/* error-page__form */}
          <form onSubmit={handleSearchSubmit} className="relative mt-[42px] mb-5 block">
            <div className="error-page__form-input relative mx-auto block w-full max-w-[570px]">
              <input
                type="search"
                placeholder="Search here"
                className="h-[60px] w-full rounded-[7px] border-none bg-[#f5f5f5] pr-[75px] pl-[50px] text-sm text-[#333] outline-none"
              />
              <button
                type="submit"
                aria-label="Rechercher"
                className="absolute inset-y-0 right-0 flex w-[72px] items-center justify-center border-none bg-transparent p-0 text-[22px] text-theme-1 outline-none"
              >
                <i className="lnr-icon-magnifier" aria-hidden />
              </button>
            </div>
          </form>

          <ThemeBtn href="/">Back to Home</ThemeBtn>
        </div>
      </div>
    </section>
  );
}

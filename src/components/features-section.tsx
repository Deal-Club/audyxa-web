import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { imageHoverOverlayClass } from "@/lib/image-hover";
import { cn } from "@/lib/utils";

interface FeatureBlockData {
  title: string;
  text: string;
}

/**
 * Contenu verbatim de la source : les 3 textes sont bien identiques dans le
 * HTML d'origine (index.html, section .features-section), ce n'est pas une
 * erreur de recopie.
 */
const FEATURES: FeatureBlockData[] = [
  {
    title: "Diagnostiquer avant d'acheter",
    text: "Nous analysons les objectifs métier, les processus et les données avant de recommander un seul outil.",
  },
  {
    title: "Déployer ce qui change vraiment le quotidien",
    text: "Nous priorisons les actions qui réduisent les erreurs, accélèrent l'exécution et libèrent du temps utile.",
  },
  {
    title: "Mesurer les résultats dans la durée",
    text: "Une transformation utile se pilote avec des indicateurs clairs, des économies visibles et une adoption réelle.",
  },
];

/**
 * .features-section du thème Amiso ("Welcome to Agency").
 * Colonne de contenu (3 feature-blocks) à gauche, colonne image à droite
 * qui déborde du conteneur via une marge négative en desktop (fidèle à la
 * source : `.image-column .inner-column { margin-right: -375px }`, annulée
 * sous 1024px où les colonnes s'empilent).
 */
export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden pt-[80px] pb-[70px]">
      {/*
        .bg.bg-pattern-1 : pointe vers images/icons/pattern-1.jpg en source,
        fichier qui répond 404 sur le serveur source lui-même. Div gardé
        pour la structure (accroche CSS future) mais sans image de fond :
        rendu invisible, fidèle au site live.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 right-0 lg:right-[360px]"
      />
      <div className="auto-container">
        <div className="flex flex-wrap">
          {/* Content Column */}
          <div className="w-full lg:w-7/12 lg:max-w-[520px] lg:pr-[30px] xl:w-1/2">
            <ScrollReveal animation="fadeInRight">
              <SectionTitle
                subTitle="Notre méthode"
                title="Une transformation digitale utile, pas théorique"
                className="mb-[34px]"
              />

              {FEATURES.map((feature, index) => {
                const isLast = index === FEATURES.length - 1;
                return (
                  <div key={feature.title} className="relative z-[1] mb-[18px]">
                    <div className="group relative overflow-hidden pl-[74px] transition-all duration-300">
                      <div
                        className={cn(
                          "mb-[8px] border-b border-[#dcdcdd] pb-[22px]",
                          isLast && "mb-0 border-b-0 pb-0"
                        )}
                      >
                        <span className="absolute left-0 top-[2px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-theme-2 text-base text-white transition-all duration-300 group-hover:bg-white group-hover:text-theme-2 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                          <i className="fa fa-check" aria-hidden="true" />
                        </span>
                        <h5 className="mb-[10px] font-extrabold text-theme-1">
                          {feature.title}
                        </h5>
                        <div className="mb-0 text-base leading-[30px]">{feature.text}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>

          {/* Image Column */}
          <div className="mb-[50px] w-full lg:w-5/12 xl:w-1/2">
            <ScrollReveal
              animation="fadeInLeft"
              className="relative mt-[20px] lg:mt-0 lg:mr-[-180px]"
            >
              <div className="relative ml-auto max-w-[860px]">
                <figure className={cn("mb-0 rounded-tl-[18px] rounded-bl-[18px] border border-[#e2e2e2] p-2", imageHoverOverlayClass)}>
                  <Image
                    src="/images/resource/method.jpg"
                    alt=""
                    width={1032}
                    height={669}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="h-auto w-full rounded-tl-[14px] rounded-bl-[14px]"
                  />
                </figure>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
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
    title: "Best user interfaces",
    text: "Tincidunt elit magnis nulla facilisis sags maecenas. sapien nunc amet ultrices",
  },
  {
    title: "Smooth development",
    text: "Tincidunt elit magnis nulla facilisis sags maecenas. sapien nunc amet ultrices",
  },
  {
    title: "Quality web design",
    text: "Tincidunt elit magnis nulla facilisis sags maecenas. sapien nunc amet ultrices",
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
    <section className="relative overflow-hidden pt-[120px] pb-[70px]">
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
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <ScrollReveal animation="fadeInRight">
              <SectionTitle
                subTitle="Welcome to Agency"
                title="Experienced designers & developers"
              />

              {FEATURES.map((feature, index) => {
                const isLast = index === FEATURES.length - 1;
                return (
                  <div key={feature.title} className="relative z-[1] mb-[30px]">
                    <div className="group relative overflow-hidden pl-[90px] transition-all duration-300">
                      <div
                        className={cn(
                          "mb-[15px] border-b border-[#dcdcdd] pb-[35px]",
                          isLast && "mb-0 border-b-0 pb-0"
                        )}
                      >
                        <span className="absolute left-0 top-[5px] flex h-[58px] w-[58px] items-center justify-center rounded-[50px] bg-theme-2 text-xl text-white transition-all duration-300 group-hover:bg-white group-hover:text-theme-2 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                          <i className="fa fa-check" aria-hidden="true" />
                        </span>
                        <h5 className="mb-[18px] font-extrabold text-theme-1">
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
          <div className="mb-[50px] w-full lg:w-1/2 xl:w-7/12">
            <ScrollReveal
              animation="fadeInLeft"
              className="relative mt-[30px] lg:mt-0 lg:mr-[-375px]"
            >
              <div className="relative">
                <figure className="mb-0">
                  <Image
                    src="/images/resource/image-2.jpg"
                    alt=""
                    width={1032}
                    height={669}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="h-auto w-full"
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

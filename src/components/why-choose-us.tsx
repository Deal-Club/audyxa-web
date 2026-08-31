import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { imageHoverOverlayClass } from "@/lib/image-hover";
import { cn } from "@/lib/utils";

/**
 * Section `.why-choose-us` du thème Amiso. Colonne texte (citation +
 * lien vidéo + CTA) et colonne images en composition superposée
 * (benefit-1/2/3 + badge logo). Le fond `.bg-pattern-2` et le halo
 * `.bg-shape` (images/icons/shape-1.png) sont en 404 sur le serveur
 * source (cf. BEHAVIORS.md) : ni recréés ni substitués.
 */
interface WhyChooseUsProps {
  subTitle?: string;
  title?: React.ReactNode;
  text?: string;
  listItems?: string[];
  ctaHref?: string;
  ctaLabel?: string;
}

export function WhyChooseUs({
  subTitle = "Pourquoi Audyxa",
  title = "Une équipe engagée sur l'impact réel de votre transformation",
  text = "Nous rendons votre organisation plus simple, plus rapide et plus rentable. Conseil et exécution dans la même équipe, vision ROI, productivité et économies réelles, avec une approche concrète pensée pour les PME et les structures en croissance qui veulent mieux structurer leurs opérations, leurs outils et leur trajectoire digitale.",
  listItems = [
    "Diagnostic des priorités digitales et des pertes de temps",
    "Automatisation et intégration des outils métier",
    "Pilotage des gains, des indicateurs et de l'exécution",
  ],
  ctaHref = "/services",
  ctaLabel = "Voir nos services",
}: WhyChooseUsProps) {
  return (
    <section className="relative py-[70px] pt-[50px]">
      <div className="auto-container">
        <div className="flex flex-wrap">
          {/* Content column — col-xl-6 col-lg-7 col-md-12, order-2 à partir de lg
              (le lien vidéo passe alors visuellement à droite de la colonne image) */}
          <ScrollReveal
            as="div"
            animation="fadeInRight"
            delay="600ms"
            className="relative z-1 mb-[50px] w-full lg:order-2 lg:w-7/12 xl:w-1/2"
          >
            <div className="relative lg:pl-[42px]">
              <SectionTitle
                subTitle={subTitle}
                title={title}
                text={text}
                className="mb-6"
              />

              <div className="mb-7">
                <ul className="space-y-3 text-[15px] leading-8 text-theme-1">
                  {listItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[10px] h-2.5 w-2.5 shrink-0 rounded-full bg-theme-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center rounded-[10px] bg-theme-2 px-[36px] py-[15px] text-base font-extrabold text-white transition-colors hover:bg-theme-2-dark"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Image column — col-xl-6 col-lg-5 col-md-12 */}
          <div className="relative mb-[50px] w-full lg:w-5/12 xl:w-1/2">
            <ScrollReveal
              as="div"
              animation="fadeInLeft"
              className="relative lg:mr-[-10px]"
            >
              <div className="relative">
                <ScrollReveal
                  as="figure"
                  animation="fadeInUp"
                  className={cn("m-0 mb-5 w-full rounded-[10px] lg:w-[280px]", imageHoverOverlayClass)}
                >
                  <Image
                    src="/images/resource/benefit-1.jpg"
                    alt=""
                    width={280}
                    height={277}
                    className="h-auto w-full rounded-[10px]"
                  />
                </ScrollReveal>

                <ScrollReveal
                  as="figure"
                  animation="fadeInRight"
                  className={cn("m-0 w-full rounded-[10px] lg:w-[280px]", imageHoverOverlayClass)}
                >
                  <Image
                    src="/images/resource/benefit-2.jpg"
                    alt=""
                    width={280}
                    height={277}
                    className="h-auto w-full rounded-[10px]"
                  />
                </ScrollReveal>

                <ScrollReveal
                  as="figure"
                  animation="fadeInRight"
                  className={cn(
                    "m-0 mt-5 w-full rounded-[10px] lg:absolute lg:top-[70px] lg:right-0 lg:mt-0 lg:w-[280px]",
                    imageHoverOverlayClass
                  )}
                >
                  <Image
                    src="/images/resource/benefit-3.jpg"
                    alt=""
                    width={280}
                    height={423}
                    className="h-auto w-full rounded-[10px]"
                  />
                </ScrollReveal>

                {/* .logo : masqué sous 1200px dans le CSS source (responsive.css) */}
                <figure className="m-0 hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:block xl:-translate-x-1/2 xl:-translate-y-1/2">
                  <Image
                    src="/images/logo-mark.png"
                    alt="Audyxa"
                    width={250}
                    height={126}
                    className="h-auto w-[250px] object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.14)]"
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

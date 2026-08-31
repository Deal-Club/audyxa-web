import { ThemeBtn } from "@/components/theme-btn";
import { ScrollReveal } from "@/components/scroll-reveal";

/**
 * .call-to-action du thème Amiso : bandeau plein largeur sur fond
 * --bg-theme-color2 (#ff3838), titre à gauche / bouton à droite.
 * Le calque `.bg.bg-pattern-8` de la source est un asset introuvable
 * (404 confirmé sur le site d'origine) : non reproduit, aucun fond de
 * substitution.
 */
interface CallToActionProps {
  title?: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
}

export function CallToAction({
  title = (
    <>
      Vous voulez passer un cap digital
      <br className="hidden min-[600px]:block" />
      sans multiplier les outils inutiles ?
    </>
  ),
  ctaHref = "/contact",
  ctaLabel = "Prendre contact",
}: CallToActionProps) {
  return (
    <section className="call-to-action relative z-2 bg-theme-2 py-[68px]">
      <div className="auto-container">
        <ScrollReveal
          animation="fadeIn"
          className="outer-box relative flex flex-col items-center justify-between text-center lg:flex-row lg:text-left"
        >
          <div className="title-box">
            <h2 className="title mb-5 text-[34px] text-white lg:mb-0 lg:text-[46px]">
              {title}
            </h2>
          </div>
          <div className="btn-box">
            <ThemeBtn href={ctaHref} light>
              {ctaLabel}
            </ThemeBtn>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

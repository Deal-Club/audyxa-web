import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ThemeBtn } from "@/components/theme-btn";
import { imageHoverOverlayClass } from "@/lib/image-hover";

/**
 * .about-section du thème Amiso. Deux décors sources (::before de la section
 * et ::before de .image-column .inner-column) pointent vers des images 404
 * même sur le site source (images/icons/shape.png, pattern-5.png) : ils sont
 * donc omis ici, à l'identique du rendu réel.
 *
 * Le lien "Call Anytime" a un href tel: qui ne correspond pas au numéro
 * affiché dans le texte : c'est le contenu réel de la démo, reproduit tel quel.
 *
 * Ordre visuel des colonnes : `order-2` de Bootstrap sur .content-column est
 * inconditionnel, mais responsive.css le force à `order: 0 !important` sous
 * 1024px. Résultat net : texte au-dessus de l'image en dessous de 1024px,
 * image à gauche du texte à partir de 1024px.
 */
interface AboutSectionProps {
  subTitle?: string;
  title?: React.ReactNode;
  text?: string;
  listItems?: string[];
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
  logoMode?: boolean;
}

export function AboutSection({
  subTitle = "A propos d'Audyxa",
  title = "Une équipe experte pour faire passer votre entreprise à un autre niveau digital",
  text = "Audyxa accompagne les entreprises en France et en Afrique francophone avec une logique simple : comprendre d'abord les blocages métier, puis déployer les solutions qui produisent un vrai impact.",
  listItems = [
    "Nous partons de vos processus, pas d'un catalogue d'outils.",
    "Nous transformons le temps perdu en gains opérationnels mesurables.",
    "Nous assurons le conseil, l'execution et le suivi des resultats.",
  ],
  ctaHref = "/about",
  ctaLabel = "Découvrir notre approche",
  imageSrc = "/images/resource/about-1.jpg",
  logoMode = false,
}: AboutSectionProps) {
  return (
    <section className="about-section relative pt-[90px] pb-[60px]">
      <div className="auto-container">
        <div className="row flex flex-wrap items-center -mx-[15px]">
          <ScrollReveal
            as="div"
            animation="fadeInRight"
            delay="600ms"
            className="content-column relative mb-[40px] w-full px-[15px] [@media(min-width:992px)]:order-2 [@media(min-width:992px)]:w-1/2"
          >
            <div className="inner-column relative pl-0 [@media(min-width:1440px)]:pl-[70px]">
              <SectionTitle
                subTitle={subTitle}
                title={title}
                text={text}
                className="mb-[40px]"
              />

              <ul className="list-style-two relative mb-[40px]">
                {listItems.map((item) => (
                  <li
                    key={item}
                    className="relative mb-[10px] pl-[35px] text-lg leading-[26px] font-semibold text-theme-1"
                  >
                    <i className="fa fa-check-circle absolute left-0 top-0 text-lg leading-[26px] text-theme-2" /> {item}
                  </li>
                ))}
              </ul>

              <div className="btn-box flex flex-col items-start [@media(min-width:600px)]:flex-row [@media(min-width:600px)]:items-center [@media(min-width:600px)]:justify-between">
                <ThemeBtn href={ctaHref} className="mt-[30px] [@media(min-width:600px)]:mt-0">
                  {ctaLabel}
                </ThemeBtn>
              </div>
            </div>
          </ScrollReveal>

          <div className="image-column relative mb-[35px] w-full px-[15px] [@media(min-width:992px)]:w-1/2">
            <ScrollReveal
              as="div"
              animation="fadeInLeft"
              className="inner-column relative pr-0"
            >
              {logoMode ? (
                <ScrollReveal
                  as="figure"
                  animation="fadeInUp"
                  className={`image-1 ${imageHoverOverlayClass} mb-0 flex min-h-[420px] items-center justify-center rounded-[10px] [@media(max-width:1199px)]:min-h-[320px]`}
                >
                  <Image
                    src="/images/logo-mark.png"
                    alt="Audyxa"
                    width={720}
                    height={650}
                    className="h-auto w-full max-w-[720px] object-contain"
                  />
                </ScrollReveal>
              ) : (
                <ScrollReveal
                  as="figure"
                  animation="fadeInUp"
                  className={`image-1 overlay-anim ${imageHoverOverlayClass} mb-0 rounded-[10px]`}
                >
                  <Image
                    src={imageSrc}
                    alt=""
                    width={460}
                    height={494}
                    className="h-auto w-full [@media(max-width:1199px)]:min-h-[500px] [@media(max-width:1199px)]:object-cover"
                  />
                </ScrollReveal>
              )}

            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

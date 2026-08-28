import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ThemeBtn } from "@/components/theme-btn";

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
export function AboutSection() {
  return (
    <section className="about-section relative pt-[120px] pb-[70px]">
      <div className="auto-container">
        <div className="row flex flex-wrap -mx-[15px]">
          <ScrollReveal
            as="div"
            animation="fadeInRight"
            delay="600ms"
            className="content-column relative mb-[40px] w-full px-[15px] [@media(min-width:992px)]:w-[58.3333%] [@media(min-width:1024px)]:order-2 [@media(min-width:1200px)]:w-1/2"
          >
            <div className="inner-column relative pl-0 [@media(min-width:1440px)]:pl-[70px]">
              <SectionTitle
                subTitle="Get to Know"
                title="We provide best design solution in town"
                text="Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn."
                className="mb-[40px]"
              />

              <ul className="list-style-two relative mb-[40px]">
                <li className="relative mb-[10px] pl-[35px] text-lg leading-[26px] font-semibold text-theme-1">
                  <i className="fa fa-check-circle absolute left-0 top-0 text-lg leading-[26px] text-theme-2" /> Refresing to get such a personal touch.
                </li>
                <li className="relative mb-[10px] pl-[35px] text-lg leading-[26px] font-semibold text-theme-1">
                  <i className="fa fa-check-circle absolute left-0 top-0 text-lg leading-[26px] text-theme-2" /> Duis aute irure dolor in reprehenderit in voluptate.
                </li>
                <li className="relative mb-[10px] pl-[35px] text-lg leading-[26px] font-semibold text-theme-1">
                  <i className="fa fa-check-circle absolute left-0 top-0 text-lg leading-[26px] text-theme-2" /> Velit esse cillum dolore eu fugiat nulla pariatur.
                </li>
              </ul>

              <div className="btn-box flex flex-col items-start [@media(min-width:600px)]:flex-row [@media(min-width:600px)]:items-center [@media(min-width:600px)]:justify-between">
                <a
                  href="tel:+92(8800)9806"
                  className="info-btn relative mr-[30px] block whitespace-nowrap py-2 pl-[90px] text-[22px] leading-5 font-extrabold text-[#181818] transition-colors duration-300 hover:text-theme-2"
                >
                  <i className="icon fa fa-phone absolute left-0 top-1/2 flex h-[68px] w-[68px] -translate-y-1/2 items-center justify-center rounded-full bg-[#edf0f5] text-2xl text-theme-2" />
                  <small className="mb-[10px] block text-base font-normal text-body-text">Call Anytime</small> + 9999 5555 333
                </a>
                <ThemeBtn href="/about" className="mt-[30px] [@media(min-width:600px)]:mt-0">
                  Explore now
                </ThemeBtn>
              </div>
            </div>
          </ScrollReveal>

          <div className="image-column relative mb-[35px] w-full px-[15px] [@media(min-width:992px)]:w-[41.6667%] [@media(min-width:1200px)]:w-1/2">
            <ScrollReveal
              as="div"
              animation="fadeInLeft"
              className="inner-column relative pr-0 [@media(min-width:1200px)]:pr-[110px]"
            >
              <ScrollReveal
                as="figure"
                animation="fadeInUp"
                className="image-1 overlay-anim relative mb-0 overflow-hidden rounded-[10px] after:absolute after:left-0 after:top-0 after:z-[9] after:h-0 after:w-full after:pointer-events-none after:bg-white/30 after:opacity-100 after:content-[''] hover:after:h-full hover:after:opacity-0 hover:after:transition-all hover:after:duration-[400ms] hover:after:ease-linear"
              >
                <Image
                  src="/images/resource/about-1.jpg"
                  alt=""
                  width={460}
                  height={494}
                  className="h-auto w-full [@media(max-width:1199px)]:min-h-[500px] [@media(max-width:1199px)]:object-cover"
                />
              </ScrollReveal>

              <ScrollReveal
                as="figure"
                animation="fadeInRight"
                className="image-2 overlay-anim absolute right-0 top-[60px] mb-0 hidden overflow-hidden rounded-[10px] border-[5px] border-white shadow-[0_10px_60px_rgba(0,0,0,0.1)] after:absolute after:left-0 after:top-0 after:z-[9] after:h-0 after:w-full after:pointer-events-none after:bg-white/30 after:opacity-100 after:content-[''] hover:after:h-full hover:after:opacity-0 hover:after:transition-all hover:after:duration-[400ms] hover:after:ease-linear [@media(min-width:1200px)]:block"
              >
                <Image src="/images/resource/about-2.jpg" alt="" width={200} height={254} className="h-auto w-full" />
              </ScrollReveal>

              <div className="experience bounce-y absolute bottom-[60px] left-0 hidden min-w-[220px] rounded-t-[10px] rounded-bl-[10px] bg-theme-2 px-[30px] py-5 shadow-[0_15px_60px_rgba(68,67,67,0.08)] before:absolute before:-right-5 before:bottom-0 before:hidden before:border-l-[20px] before:border-t-[20px] before:border-l-theme-2 before:border-t-transparent before:content-[''] [@media(min-width:600px)]:block [@media(min-width:768px)]:before:block [@media(min-width:1440px)]:left-[-110px]">
                <div className="inner relative pl-[75px]">
                  <i className="icon flaticon-discuss absolute left-0 top-[3px] text-[64px] text-white" />
                  <div className="text relative text-base leading-5 text-white">
                    <strong className="relative mt-[7px] block text-2xl leading-[1.2em] font-bold text-white">30+</strong> Years of <br />
                    experience
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

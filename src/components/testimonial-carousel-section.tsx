import Image from "next/image";
import { Carousel } from "@/components/carousel";

interface Testimonial {
  name: string;
  designation: string;
  text: string;
}

// Mêmes 4 blocs, mot pour mot, que ceux de la page d'accueil
// (testimonial-section.tsx) : duplication authentique de la source, avec la
// même coquille d'origine ("approachesto" sans espace) sur le 3e bloc,
// reproduite telle quelle plutôt que corrigée.
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Donald hardson",
    designation: "CEO - CO Founder",
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.",
  },
  {
    name: "Donald hardson",
    designation: "CEO - CO Founder",
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.",
  },
  {
    name: "Donald hardson",
    designation: "CEO - CO Founder",
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approachesto corporate strategy data foster to collaborative thinking.",
  },
  {
    name: "Donald hardson",
    designation: "CEO - CO Founder",
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.",
  },
];

const AVATAR_SRC = "/images/resource/testi-1.jpg";

/**
 * Section `.bg-silver-light > .testimonial-carousel` de page-testimonial.html.
 * Même carrousel Owl (classe `.testimonial-carousel`, pas `-two`/`-three`) et
 * mêmes `.testimonial-block` que `.testimonial-section` en page d'accueil,
 * mais en pleine largeur (`col-xl-12`, pas de colonne de titre ni de débord
 * `margin-right: -490px`) et sur fond clair au lieu du fond sombre #181818.
 *
 * `bg-silver-light` n'a aucune règle dans style.css ni responsive.css (classe
 * fantôme de la source, vérifié par recherche exhaustive) : aucune teinte
 * grise n'est donc inventée, le fond reste blanc (background du body). Le
 * padding vertical vient de la règle générique `section > .container` du
 * thème (120px haut/bas, cf. style.css) puisque cette section ne définit pas
 * de padding propre comme `.testimonial-section`.
 */
export function TestimonialCarouselSection() {
  return (
    <section className="bg-silver-light pt-[120px] pb-[120px]">
      <div className="auto-container">
        <div className="testimonial-column w-full">
          <div className="carousel-outer relative">
            <Carousel
              responsive={{ 0: 1, 991: 2 }}
              gap={30}
              loop
              autoplayMs={5000}
              nav={false}
              dots
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="testimonial-block relative pt-[60px]">
                  <div className="inner-box relative mb-[30px] rounded-[10px] border-t-[12px] border-theme-2 bg-white px-[50px] pt-[30px] pb-[45px] before:absolute before:top-0 before:left-0 before:h-[96px] before:w-[138px] before:rounded-[0_0_500px_0] before:bg-[#f3f3f3] before:content-['']">
                    <div className="image-box relative z-1 mb-[25px] flex items-start justify-between pl-[140px] transition-all duration-300 ease-in-out max-[599px]:flex-col max-[599px]:pl-0">
                      <figure className="image absolute -top-[100px] -left-[10px] h-[132px] w-[132px] p-3 before:absolute before:top-0 before:left-0 before:h-1/2 before:w-full before:rounded-t-[120px] before:bg-theme-2 before:content-['']">
                        <Image
                          src={AVATAR_SRC}
                          alt=""
                          width={108}
                          height={108}
                          className="relative h-full w-full rounded-full border-[5px] border-white object-cover shadow-[0_10px_60px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out"
                        />
                      </figure>

                      <div className="info-box max-[599px]:mt-[40px]">
                        <h4 className="name mb-[2px]">{testimonial.name}</h4>
                        <span className="designation block text-sm leading-[26px] font-normal text-body-text">
                          {testimonial.designation}
                        </span>
                      </div>

                      <div className="rating relative text-[14px] tracking-[0.05em] text-[#ffba25]">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>

                    <div className="text text-body-text">{testimonial.text}</div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

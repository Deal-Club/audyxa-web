import Image from "next/image";
import { Carousel } from "@/components/carousel";
import { SectionTitle } from "@/components/section-title";

interface Testimonial {
  name: string;
  designation: string;
  text: string;
}

// Les 4 blocs sont volontairement identiques (avatar + nom + poste) : c'est
// une duplication authentique du thème source, pas une erreur à corriger.
// Seul le 3e bloc porte une coquille d'origine ("approachesto" sans espace)
// reproduite telle quelle.
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
 * .testimonial-section du thème Amiso. Fond #181818 (valeur en dur dans la
 * source, distincte du token --theme-color1 / bg-theme-1) avec le carrousel
 * qui déborde du conteneur à droite (margin-right: -490px dans la source,
 * sans media query). Ce débord n'a de sens que dans la mise en page à deux
 * colonnes (>= lg) : appliqué tel quel en dessous, il casserait la mise en
 * page mobile empilée, donc restreint ici à lg: pour rester fidèle à
 * l'intention visuelle sans régression mobile.
 */
export function TestimonialSection() {
  return (
    <section className="testimonial-section relative overflow-hidden bg-[#181818] pt-[120px] pb-[90px]">
      <div className="auto-container">
        <div className="flex flex-wrap">
          <div className="title-column w-full lg:w-4/12 xl:w-5/12">
            <SectionTitle
              subTitle="Our testimonials"
              title="What they’re talking about us"
              text="Lorem Ipsum is simply dummy text of free available in market the printing and typesetting industry."
              light
            />
          </div>

          <div className="testimonial-column w-full lg:w-8/12 xl:w-7/12">
            <div className="carousel-outer relative lg:mr-[-490px]">
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
                      <div className="image-box relative z-1 mb-[25px] flex items-start justify-between pl-[140px] transition-all duration-300 ease-in-out">
                        <figure className="image absolute -top-[100px] -left-[10px] h-[132px] w-[132px] p-3 before:absolute before:top-0 before:left-0 before:h-1/2 before:w-full before:rounded-t-[120px] before:bg-theme-2 before:content-['']">
                          <Image
                            src={AVATAR_SRC}
                            alt=""
                            width={108}
                            height={108}
                            className="relative h-full w-full rounded-full border-[5px] border-white object-cover shadow-[0_10px_60px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out"
                          />
                        </figure>

                        <div className="info-box">
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
      </div>
    </section>
  );
}

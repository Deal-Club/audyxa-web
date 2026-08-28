import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";

interface NewsItem {
  image: string;
  date: string;
  author: string;
  title: string;
  text: string;
  /** data-wow-delay exact du bloc source, undefined pour le 1er bloc (pas d'attribut). */
  delay?: string;
}

/**
 * Contenu verbatim de la section News source : les 3 articles ont le même
 * titre et le même texte dans le thème d'origine (contenu de démo réel,
 * on ne diversifie pas).
 */
const NEWS_ITEMS: NewsItem[] = [
  {
    image: "/images/resource/news-1.jpg",
    date: "20 Dec, 2022",
    author: "by Admin",
    title: "Over ride the digital divide with additional",
    text: "Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.",
  },
  {
    image: "/images/resource/news-2.jpg",
    date: "20 Dec, 2022",
    author: "by Admin",
    title: "Over ride the digital divide with additional",
    text: "Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.",
    delay: "300ms",
  },
  {
    image: "/images/resource/news-3.jpg",
    date: "20 Dec, 2022",
    author: "by Admin",
    title: "Over ride the digital divide with additional",
    text: "Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.",
    delay: "600ms",
  },
];

/**
 * Section "News & Articles" du thème Amiso (.news-section).
 *
 * `<div class="bg bg-pattern-6"></div>` du source pointe vers un asset en
 * 404 sur le site live : non reproduit (aucune image de fond de substitution).
 *
 * L'effet de survol `.image-box .image a:after` du CSS source est un filet
 * blanc translucide (rgba(255,255,255,0.3)) de largeur nulle au repos
 * (left:50% / right:51% -> largeur négative donc 0) qui s'étire en pleine
 * largeur tout en s'estompant à l'opacité 0 au survol (400ms linear) — un
 * "flash" de balayage combiné au zoom de l'image (scale 1.1, 400ms ease).
 */
export function NewsSection() {
  return (
    <section className="news-section relative overflow-hidden bg-white pt-[120px] pb-[90px]">
      <div className="auto-container">
        <SectionTitle center subTitle="News & Articles" title="Latest from the blog" />

        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2 lg:grid-cols-3">
          {NEWS_ITEMS.map((item) => (
            <ScrollReveal
              key={item.image}
              animation="fadeInUp"
              delay={item.delay}
              className="relative mb-[30px]"
            >
              <div className="group relative transition-all duration-300 ease-[ease]">
                <div className="relative">
                  <figure className="relative mb-0 aspect-[370/296] overflow-hidden rounded-[14px]">
                    <Link href="/news/details" className="absolute inset-0 block">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-all duration-[400ms] ease-[ease] group-hover:scale-110"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 left-1/2 right-[51%] bg-white/30 opacity-100 transition-all duration-[400ms] ease-linear group-hover:left-0 group-hover:right-0 group-hover:opacity-0"
                      />
                    </Link>
                  </figure>
                </div>
                <div className="relative mt-[-65px] ml-[30px] rounded-[10px_0_10px_10px] bg-white p-[30px_40px_35px] transition-all duration-300 ease-[ease] group-hover:shadow-[0_10px_60px_rgba(0,0,0,0.1)]">
                  <span className="relative z-1 mr-[10px] inline-flex flex-wrap rounded-[10px] bg-theme-2 px-5 py-[5px] text-xs leading-5 font-bold text-white">
                    {item.date}
                  </span>
                  <span className="relative text-sm text-[#6a6a6a]">
                    <i className="fa fa-user-circle mr-[5px] text-theme-2" /> {item.author}
                  </span>
                  <h5 className="mt-[15px] mb-[7px] font-extrabold">
                    <Link href="/news/details" className="transition-colors hover:text-theme-2">
                      {item.title}
                    </Link>
                  </h5>
                  <div className="mb-[15px] text-body-text">{item.text}</div>
                  <Link
                    href="/news/details"
                    className="group/more relative flex items-center text-xs leading-[25px] font-bold tracking-[0.1em] text-theme-1 uppercase transition-all duration-100 ease-linear hover:translate-x-[-25px] hover:text-theme-2"
                  >
                    <i className="fa fa-long-arrow-alt-right mr-[10px] text-base transition-all duration-100 ease-linear group-hover/more:translate-x-[15px] group-hover/more:opacity-0" />
                    Read More
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

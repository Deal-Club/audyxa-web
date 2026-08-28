import Image from "next/image";
import Link from "next/link";

interface NewsGridItem {
  image: string;
  date: string;
  author: string;
  title: string;
  text: string;
}

/**
 * Contenu verbatim de `news-grid.html` (3 cartes `.news-block`). Dates
 * distinctes par carte (contrairement à la teaser de la home où les 3
 * cartes partagent "20 Dec, 2022") ; titre et texte identiques sur les 3,
 * fidèle au contenu de démo du thème source — non diversifié.
 */
const NEWS_GRID_ITEMS: NewsGridItem[] = [
  {
    image: "/images/resource/news-1.jpg",
    date: "12 Jan, 2023",
    author: "by Admin",
    title: "Over ride the digital divide with additional",
    text: "Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.",
  },
  {
    image: "/images/resource/news-2.jpg",
    date: "15 Jan, 2023",
    author: "by Admin",
    title: "Over ride the digital divide with additional",
    text: "Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.",
  },
  {
    image: "/images/resource/news-3.jpg",
    date: "22 Jan, 2023",
    author: "by Admin",
    title: "Over ride the digital divide with additional",
    text: "Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.",
  },
];

/**
 * Section `.bg-silver-light > .container.pb-90 > .row` de `news-grid.html`
 * (page `/news`). Grille pure : pas de `<SectionTitle>`, la bannière
 * `<PageTitle>` précède directement les 3 cartes `.news-block`.
 *
 * Deux classes de la section source n'ont aucune règle dans style.css ni
 * responsive.css (recherche exhaustive, confirmée) :
 * - `bg-silver-light` : aucun fond gris inventé, le fond reste blanc
 *   (comportement déjà établi sur `/testimonial`, même classe fantôme).
 * - `pb-90` (sur `.container`) : cette classe n'existe nulle part dans les
 *   feuilles capturées (Bootstrap n'est pas inclus dans le dump source), ce
 *   n'est donc PAS un utilitaire "padding-bottom: 90px". La règle générique
 *   `section > .container { padding-top/bottom: var(--container-pt) }`
 *   (style.css, --container-pt: 120px) s'applique donc intégralement et
 *   sans override : padding-top ET padding-bottom = 120px. C'est un écart
 *   assumé avec `team-section.tsx` (0/90) et `services-list-section.tsx`
 *   (120/90), qui avaient traité `pb-90` comme un vrai utilitaire 90px —
 *   aucune des deux lectures n'est contredite par une règle CSS existante,
 *   celle-ci (120/120) est la seule qui découle directement du CSS capturé.
 *
 * Les blocs `.news-block` ne portent pas de classe `wow` dans le HTML
 * source (contrairement à la home) : aucun `<ScrollReveal>` ici.
 */
export function NewsGridSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="auto-container pt-[120px] pb-[120px]">
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2 min-[1200px]:grid-cols-3">
          {NEWS_GRID_ITEMS.map((item) => (
            <NewsBlock key={item.image} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsBlock({ image, date, author, title, text }: NewsGridItem) {
  return (
    <div className="news-block relative mb-[30px]">
      {/*
        `.inner-box` porte le hover global (image + content-box) ; `group`
        Tailwind reproduit le sélecteur `.inner-box:hover .image-box img` /
        `.inner-box:hover .content-box`.
      */}
      <div className="group inner-box relative transition-all duration-300 ease-[ease]">
        <div className="image-box relative">
          <figure className="image relative mb-0 aspect-[370/296] overflow-hidden rounded-[14px]">
            <Link href="/news/details" className="absolute inset-0 block">
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[400ms] ease-[ease] group-hover:scale-110"
              />
              {/* `.image-box .image a:after` : filet blanc translucide, largeur
                  nulle au repos (left:50% / right:51%), qui s'étire en pleine
                  largeur en s'estompant au survol (400ms linear). */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-1/2 right-[51%] bg-white/30 opacity-100 transition-all duration-[400ms] ease-linear group-hover:left-0 group-hover:right-0 group-hover:opacity-0"
              />
            </Link>
          </figure>
        </div>

        {/* `.content-box` : mt:-65px / ml:30px / padding:30px 40px 35px par
            défaut. Surcharges responsive.css : <=1199px -> ml:20px (seul le
            mt reste -65px, le padding reste 30px 40px 35px) ; <=599px ->
            margin:0 (le chevauchement disparaît) et padding:30px uniforme. */}
        <div className="content-box relative mt-[-65px] ml-[30px] rounded-[10px_0_10px_10px] bg-white p-[30px_40px_35px] transition-shadow duration-300 ease-[ease] group-hover:shadow-[0_10px_60px_rgba(0,0,0,0.1)] max-[1199px]:ml-[20px] max-[599px]:m-0 max-[599px]:p-[30px]">
          <span className="date relative z-1 mr-[10px] inline-flex flex-wrap rounded-[10px] bg-theme-2 px-5 py-[5px] text-xs leading-5 font-bold text-white">
            {date}
          </span>
          <span className="post-info relative text-sm text-[#6a6a6a]">
            <i className="fa fa-user-circle mr-[5px] text-theme-2" aria-hidden /> {author}
          </span>
          <h5 className="title mt-[15px] mb-[7px] font-extrabold">
            <Link href="/news/details" className="transition-colors hover:text-theme-2">
              {title}
            </Link>
          </h5>
          <div className="text mb-[15px] text-body-text">{text}</div>
          <Link
            href="/news/details"
            className="read-more group/more relative flex items-center text-xs leading-[25px] font-bold tracking-[0.1em] text-[#0f0f0f] uppercase transition-all duration-100 ease-linear hover:translate-x-[-25px] hover:text-theme-2"
          >
            <i className="fa fa-long-arrow-alt-right mr-[10px] text-base transition-all duration-100 ease-linear group-hover/more:translate-x-[15px] group-hover/more:opacity-0" />
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { SectionTitle } from "@/components/section-title";

interface ProjectCard {
  image: string;
  category: string;
  title: string;
}

/**
 * Contenu du carrousel `.projects-carousel` — les 4 blocs sont
 * volontairement identiques (même catégorie, même titre) : c'est le
 * contenu de démo réel du thème source (index.html), reproduit tel quel.
 */
const PROJECTS: ProjectCard[] = [
  { image: "/images/resource/project-1.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-2.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-3.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-4.jpg", category: "Graphics", title: "Digital marketing web" },
];

// Toutes les cartes pointent vers page-project-details.html côté source.
const PROJECT_HREF = "/projects/details";

/**
 * `.projects-section-two` du thème Amiso : bandeau sombre pleine largeur
 * (compteur "Work Completed" + carrousel de 4 projets, Owl → primitive
 * Carousel interne, cf. src/components/carousel.tsx).
 *
 * Le "86900+" est du texte statique dans la source (pas de data-stop/
 * data-speed sur ce noeud, contrairement aux jauges de la section FAQ) :
 * aucune animation de comptage n'est ajoutée ici.
 */
export function ProjectsShowcase() {
  return (
    <section className="projects-section-two relative overflow-hidden py-[120px]">
      {/*
        .bg-image : image déjà sombre en soi dans la source (photo quasi
        noire) — aucune règle CSS (::before/::after) n'ajoute de calque
        d'assombrissement pour cette section (contrairement à
        .banner-section ou .products-section), donc aucun overlay n'est
        ajouté ici. background-size/position ne sont pas déclarés dans le
        bloc source .projects-section-two .bg-image, mais le sont sur les
        4 autres usages de .bg-image du thème (banner/video/products) :
        cover/center/no-repeat est repris ici par cohérence, l'image
        source (1894x663) étant conçue pour un fond plein cadre.
      */}
      <div
        className="bg-image absolute left-0 top-0 h-full w-full max-h-[660px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/background/2.jpg)" }}
      />

      {/* z-2 : fait remonter le contenu au-dessus de .bg-image (position:absolute),
          comme le fait déjà SectionTitle pour son propre sous-arbre. */}
      <div className="auto-container relative z-2">
        <div className="upper-box relative flex flex-col items-center justify-between border-b border-white/10 pt-20 pb-[50px] mb-[50px] [@media(min-width:600px)]:pb-20 [@media(min-width:600px)]:mb-[100px] [@media(min-width:1024px)]:flex-row">
          <div className="counter-column">
            <div className="count-box relative text-center [@media(min-width:1024px)]:text-right">
              <span className="title pr-2.5 text-sm uppercase text-white">Work Completed</span>
              <div className="numbers text-[60px] font-extrabold leading-none text-theme-2 [@media(min-width:600px)]:text-[80px] [@media(min-width:768px)]:text-[100px]">
                86900+
              </div>
            </div>
          </div>

          <div className="text-column max-w-[640px] border-0 px-0 pb-0 pt-5 text-center [@media(min-width:1024px)]:border-l [@media(min-width:1024px)]:border-white/10 [@media(min-width:1024px)]:pb-5 [@media(min-width:1024px)]:pl-[70px] [@media(min-width:1024px)]:text-left">
            <div className="text text-lg leading-9 text-[#8f8f8f]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>

        <SectionTitle subTitle="Recent Work" title="Work showcase" center light />

        {/*
          .carousel-outer { margin: 0 -260px } dans style.css, mais
          responsive.css la remet à 0 dès (max-width: 1439px) : le bleed
          n'existe donc qu'à partir de 1440px, reproduit tel quel ici.
          overflow-hidden sur la section sert de filet pour ce bleed connu
          du thème source (il dépasse la largeur de viewport à 1440-1719px).
        */}
        <div className="carousel-outer mx-0 [@media(min-width:1440px)]:mx-[-260px]">
          <Carousel
            responsive={{ 0: 1, 600: 1, 767: 2, 1023: 3, 1200: 4 }}
            gap={30}
            loop
            autoplayMs={5000}
            nav={false}
            dots
          >
            {PROJECTS.map((project) => (
              <ProjectBlock key={project.image} {...project} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function ProjectBlock({ image, category, title }: ProjectCard) {
  return (
    <div className="project-block relative">
      <div className="inner-box group relative">
        <div className="image-box relative transition-all duration-300 ease-in-out">
          <figure className="image relative mb-0 overflow-hidden rounded-[10px] bg-theme-1">
            <Link href={PROJECT_HREF}>
              <Image
                src={image}
                alt=""
                width={400}
                height={435}
                className="w-full transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-40"
              />
            </Link>
          </figure>

          <Link
            href={PROJECT_HREF}
            aria-label="Voir le projet"
            className="read-more absolute right-5 top-[-26px] z-3 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-theme-2 text-lg text-white transition-all duration-300 ease-in-out hover:bg-theme-1 hover:text-white"
          >
            <i className="fa fa-long-arrow-alt-right" />
          </Link>

          <div className="info-box absolute bottom-0 left-0 z-1 min-w-[270px] rounded-r-[10px] bg-white px-[30px] py-[25px] opacity-0 invisible transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:visible group-hover:opacity-100">
            {/* .cat n'a aucune règle CSS dédiée dans le thème source (seul
                .product-block .cat, un composant différent, en a une) :
                rendu ici sans style additionnel, fidèle à la source. */}
            <span className="cat">{category}</span>
            <h6 className="title mb-0">
              <Link href={PROJECT_HREF} className="hover:text-theme-2">
                {title}
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

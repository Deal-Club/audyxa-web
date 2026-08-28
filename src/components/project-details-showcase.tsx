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
 * Contenu du carrousel `.projects-carousel` de `page-project-details.html` —
 * identique aux 4 blocs de la home (project-1..4.jpg, "Graphics" / "Digital
 * marketing web" répétés), contenu de démo réel du thème source repris tel
 * quel.
 */
const PROJECTS: ProjectCard[] = [
  { image: "/images/resource/project-1.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-2.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-3.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-4.jpg", category: "Graphics", title: "Digital marketing web" },
];

const PROJECT_HREF = "/projects/details";

/**
 * Variante de `.projects-section-two` propre à `page-project-details.html` :
 * contrairement à celle de la home (`projects-showcase.tsx`), cette page
 * n'a ni `.bg-image` (donc pas de fond sombre), ni `.upper-box` (compteur
 * "Work Completed" + texte) — juste `.sec-title` centré puis le carrousel.
 * La classe source est `class="projects-section-two pt-0"` : padding-top à
 * 0 (utilitaire Bootstrap), padding-bottom hérité de la règle de base
 * `.projects-section-two { padding: 120px 0 }`, donc 120px conservé en bas
 * uniquement.
 *
 * Sans `.bg-image`, la section reste sur le fond clair par défaut : le
 * `SectionTitle` n'est donc pas rendu en variante `light` ici (contraste
 * sombre sur clair), à la différence de la home.
 */
export function ProjectDetailsShowcase() {
  return (
    <section className="pt-0 pb-[120px]">
      <div className="auto-container">
        <SectionTitle subTitle="Recent Work" title="Work showcase" center />

        {/*
          .carousel-outer { margin: 0 -260px } dans style.css, remis à 0
          jusqu'à 1440px par responsive.css — même lecture que
          projects-showcase.tsx (home).
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

import Image from "next/image";
import Link from "next/link";

interface ProjectCard {
  image: string;
  category: string;
  title: string;
}

// Toutes les cartes pointent vers page-project-details.html côté source.
const PROJECT_DETAILS_HREF = "/projects/details";

/**
 * Contenu verbatim de la section "Gallery Section" de `page-projects.html` :
 * 6 cartes réutilisant les 4 photos `images/resource/project-{1..4}.jpg` du
 * thème (project-4 et project-2 apparaissent chacune deux fois, project-1
 * qu'une seule) — même catégorie "Graphics" et même titre "Digital marketing
 * web" pour les 6, à l'identique de la source (vérifié via getComputedStyle
 * sur le miroir de démo, pas une supposition).
 */
const PROJECTS: ProjectCard[] = [
  { image: "/images/resource/project-1.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-2.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-4.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-4.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-3.jpg", category: "Graphics", title: "Digital marketing web" },
  { image: "/images/resource/project-2.jpg", category: "Graphics", title: "Digital marketing web" },
];

/**
 * "Gallery Section" de `page-projects.html` : une grille statique de
 * `.project-block` (3 colonnes desktop / 2 tablette / 1 mobile, via
 * `col-lg-4 col-md-6 col-sm-12` côté source). Pas de carrousel ici,
 * contrairement à `.projects-section-two` de la home (src/components/
 * projects-showcase.tsx) — composant volontairement distinct.
 *
 * Pas de filtre par catégorie : le seul script pertinent côté source
 * (`$('.filter-list').mixItUp({})` dans script.js) ne s'active que si un
 * élément `.filter-list` existe sur la page, or ce gabarit de gallery n'a
 * ni boutons de filtre ni attribut `data-filter` dans le HTML — confirmé
 * absent aussi sur le miroir de démo. Les 6 cartes partagent d'ailleurs
 * toutes la même catégorie "Graphics", donc un filtre n'aurait de toute
 * façon rien à filtrer.
 *
 * `<section class="">` avec `<div class="container">` en enfant direct
 * côté source : la règle globale `section > .container { padding: var(
 * --container-pt) 0 }` (120px, style.css ligne 104/321-325) s'applique
 * donc pleinement ici (pas de classe `pb-*` qui la réduirait, contrairement
 * à `page-team.html`) — confirmé à 120px top ET bottom via getComputedStyle
 * sur le miroir de démo (h-k.com.hk/demo/k/page-projects.html).
 *
 * Aucune classe `wow`/`data-wow-delay` sur `.project-block` dans la source :
 * pas de `<ScrollReveal>` ici, comme pour `team-section.tsx`.
 */
export function ProjectsPageGallery() {
  return (
    <section className="relative overflow-hidden">
      <div className="auto-container py-[120px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectBlock key={`${project.image}-${index}`} {...project} />
          ))}
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
          {/* width/height 400x435 : dimensions natives de la source (aucun
              recadrage CSS, la largeur 100% laisse l'image respirer à son
              ratio d'origine, confirmé par getBoundingClientRect sur le
              miroir de démo : 361.3x392.9 à 1200px de viewport = même ratio). */}
          <figure className="image relative mb-0 overflow-hidden rounded-[10px] bg-theme-1">
            <Link href={PROJECT_DETAILS_HREF}>
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
            href={PROJECT_DETAILS_HREF}
            aria-label="Voir le projet"
            className="read-more absolute right-5 top-[-26px] z-3 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-theme-2 text-lg text-white transition-all duration-300 ease-in-out hover:bg-theme-1 hover:text-white"
          >
            <i className="fa fa-long-arrow-alt-right" />
          </Link>

          <div className="info-box absolute bottom-0 left-0 z-1 min-w-[270px] rounded-r-[10px] bg-white px-[30px] py-[25px] opacity-0 invisible transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:visible group-hover:opacity-100">
            {/* .cat n'a aucune règle CSS dédiée dans le thème source : rendu
                ici sans style additionnel, fidèle à la source (même choix
                que projects-showcase.tsx). */}
            <span className="cat">{category}</span>
            <h6 className="title mb-0">
              <Link href={PROJECT_DETAILS_HREF} className="hover:text-theme-2">
                {title}
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

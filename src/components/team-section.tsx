import Link from "next/link";

interface TeamMember {
  name: string;
  designation: string;
}

interface SocialLink {
  icon: string;
  label: string;
}

/**
 * Contenu verbatim de `page-team.html` (3 cartes, même intitulé de poste
 * "designer" pour chacune, casse d'origine conservée y compris le nom de
 * famille en minuscules — c'est le contenu réel de la démo, pas une faute
 * à corriger).
 *
 * Les 3 photos `images/resource/team-{1,2,3}.jpg` sont en 404 confirmé, à
 * la fois sur le serveur source (kodesolution.com) et sur le miroir de
 * démo (h-k.com.hk) — vérifié via curl sur les deux domaines et plusieurs
 * variantes de nom de fichier. Un `<Image>` next/image pointant vers un
 * fichier local absent échoue à la requête d'optimisation (400, pas un
 * simple "broken image" gracieux) : panneau neutre `bg-theme-3` à la place,
 * même traitement que `team-details-section.tsx` et les autres photos
 * manquantes du projet — aucun visuel inventé, juste un espace réservé.
 */
const TEAM_MEMBERS: TeamMember[] = [
  { name: "Aleesha brown", designation: "designer" },
  { name: "Kevin martin", designation: "designer" },
  { name: "Christine eve", designation: "designer" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: "fab fa-twitter", label: "Twitter" },
  { icon: "fab fa-facebook-f", label: "Facebook" },
  { icon: "fab fa-pinterest-p", label: "Pinterest" },
  { icon: "fab fa-instagram", label: "Instagram" },
];

// Toutes les cartes pointent vers page-team-details.html côté source, qui
// affiche un contenu statique ("Aleesha Brown") quelle que soit la carte
// d'origine : pas de fiche par membre dans ce thème, un seul gabarit générique.
const TEAM_DETAILS_HREF = "/team/details";

/**
 * `.team-block-two` du thème Amiso, section grille de l'équipe
 * (`page-team.html`). Contrairement aux autres sections déjà construites,
 * la source ne porte aucune classe `wow`/`data-wow-delay` sur ces blocs :
 * aucun reveal au scroll ici (`<ScrollReveal>` volontairement absent).
 *
 * `<section class="">` dans la source (classe vide) : `.container.pb-90`
 * — `.pb-90` n'a AUCUNE règle dans style.css, responsive.css,
 * bootstrap.min.css ni les CSS utilitaires du thème (vérifié
 * exhaustivement) — classe fantôme, sans effet. Seule la règle générique
 * `section > .container { padding-top/bottom: var(--container-pt) }`
 * (style.css:320-324, 120px) s'applique, confirmé via getComputedStyle en
 * direct sur /page-projects.html (même motif `container` sans override).
 */
export function TeamSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="auto-container pt-[120px] pb-[120px]">
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <TeamBlock key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamBlock({ name, designation }: TeamMember) {
  return (
    <div className="team-block-two relative mb-10">
      {/* padding-right: 40px réservait de l'espace au décor .image-box:before
          (images/icons/team-bg.png, 404 — voir plus bas) ; conservé car
          responsive.css le retire explicitement sous 768px (mb-md-30 sur les
          2 premières cartes, non repris ici : classe utilitaire absente des
          feuilles de style capturées, effet réduit à un espace blanc en bas
          de grille invisible). */}
      <div className="group inner-box relative pr-0 md:pr-10">
        <div className="image-box relative">
          {/*
            .image-box:before (images/icons/team-bg.png) est en 404 sur le
            serveur source : décor omis, comme documenté dans BEHAVIORS.md
            pour les autres assets `images/icons/*`.
          */}
          <figure className="image relative z-1 mb-0 aspect-[4/5] overflow-hidden rounded-[10px] bg-theme-3">
            <Link href={TEAM_DETAILS_HREF} className="absolute inset-0 block" aria-label={name} />
          </figure>

          {/* .social-links : masqué (scaleY(0), opacity 0) au repos, déployé
              vers le haut au survol de .inner-box. */}
          <div className="social-links absolute right-5 bottom-5 z-3 flex origin-bottom scale-y-0 flex-col items-center rounded-t-lg bg-white py-[15px] opacity-0 transition-all duration-[400ms] ease-in-out group-hover:scale-y-100 group-hover:opacity-100">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.icon}
                href="#"
                aria-label={social.label}
                className="relative flex h-[35px] w-[50px] items-center justify-center text-sm text-theme-1 transition-colors duration-300 ease-in-out hover:text-theme-2"
              >
                <i className={social.icon} aria-hidden />
              </a>
            ))}
          </div>

          {/* Badge "+" statique, toujours visible (contrairement à .social-links). */}
          <span className="share-icon absolute right-5 -bottom-[25px] z-3 flex h-[50px] w-[50px] items-center justify-center rounded-[7px] bg-theme-2 text-base text-white">
            <i className="fa fa-plus" aria-hidden />
          </span>
        </div>

        <div className="info-box relative pt-5">
          <h4 className="name z-2 mb-[7px] font-extrabold">
            <Link href={TEAM_DETAILS_HREF} className="hover:text-theme-2">
              {name}
            </Link>
          </h4>
          <span className="designation relative z-2 block text-sm leading-[1em] font-medium tracking-[1px] text-[#6a6a6a] uppercase">
            {designation}
          </span>
        </div>
      </div>
    </div>
  );
}

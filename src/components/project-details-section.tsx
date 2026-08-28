interface DetailRow {
  label: string;
  value: string;
}

interface SocialLink {
  icon: string;
  href: string;
}

const DETAILS: DetailRow[] = [
  { label: "Date", value: "10 January, 2023" },
  { label: "Client", value: "Kodesolution Ltd" },
  { label: "Website", value: "www.domain.com" },
  { label: "Location", value: "New York, USA" },
  { label: "Value", value: "$12,367" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: "fab fa-twitter", href: "#" },
  { icon: "fab fa-facebook", href: "#" },
  { icon: "fab fa-pinterest-p", href: "#" },
  { icon: "fab fa-instagram", href: "#" },
];

/**
 * Section `.project-details` de `page-project-details.html` : image de
 * couverture, texte de présentation (2 paragraphes) + encadré infos projet
 * (Date/Client/Website/Location/Value + réseaux sociaux), puis pagination
 * précédent/suivant.
 *
 * Le paragraphe et les deux colonnes reprennent le texte de démo réel du
 * thème source verbatim (lorem ipsum inclus dans le 2e paragraphe) : c'est
 * le contenu réellement présent sur la page à cloner, pas du contenu
 * inventé pour ce projet.
 *
 * `images/resource/project-details.jpg` est en 404 confirmé (site source
 * ET kodesolution.com) : pas de substitut inventé, panneau neutre
 * (bg-theme-3) à la place de l'image, comme `team-details-section.tsx`.
 * Aucun ratio n'est fourni par la source (pas d'attributs width/height sur
 * le `<img>`) : 2.4/1 retenu comme bannière large plausible, valeur non
 * garantie par la source.
 *
 * `.project-details__bg-shape` (div vide dans le HTML source) n'a aucune
 * règle CSS dans style.css/responsive.css (contrairement aux autres
 * `.bg-shape` du thème, tous scopés à leur section) : omis ici, il n'a
 * aucun effet visuel dans la source.
 *
 * Les 4 `<li class="count"><a href="#"></a></li>` de la pagination source
 * sont des ancres vides (aucun texte, aucune règle CSS dédiée) : omises
 * ici plutôt que reproduites comme liens interactifs sans contenu
 * accessible, cf. politique de fidélité qui n'impose pas de reproduire un
 * défaut d'accessibilité invisible à l'écran.
 *
 * Piège CSS relevé en source : `.project-details__name` (classe, sur un
 * `<h4>`) écrase la taille/interligne par défaut du sélecteur `h4` (24px/
 * 1.2em → 16px/24px, spécificité classe > élément) mais ne touche pas le
 * `font-weight` : la valeur reste donc en 16px/24px, gras, hérité du `h4`.
 *
 * Aucune classe `wow` sur cette section en source : pas de ScrollReveal
 * ajouté ici (même lecture que `team-details-section.tsx` /
 * `service-details-section.tsx`).
 */
export function ProjectDetailsSection() {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="auto-container">
        {/* project-details__top */}
        <div className="relative block aspect-[2.4/1] w-full overflow-hidden rounded-[10px] bg-theme-3" />

        {/* project-details__content */}
        <div className="mt-[50px] flex flex-wrap -mx-[15px]">
          <div className="w-full px-[15px] [@media(min-width:992px)]:w-8/12">
            <div className="mt-[31px]">
              <h3 className="mb-6 text-[36px] leading-[1.2em] font-bold text-theme-1">
                Here to Know About This Project
              </h3>
              <p className="mb-5 text-body-text">
                Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
                Asperiores, repellat aliquid. Est corrupti officiis
                dignissimos deserunt sunt minima iusto quia saepe tempora
                consectetur dolor deleniti voluptatum et, eos vitae pariatur
                molestiae odit quos enim voluptas nobis ullam voluptatem cum
                iste. Dolore modi, animi optio, dignissimos delectus
                pariatur similique harum eos.
              </p>
              <p className="mb-12 text-body-text">
                Beyond more stoic this along goodness hey this this wow
                manatee mongoose one as since a far flustered impressive
                manifest Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Nostrum illo ea ad, nam quisquam optio vel tempora,
                minus placeat, ut nisi quam quos laboriosam eos quibusdam
                cum atque suscipit quod dignissimos magni doloribus facere
                eius soluta possimus. Officiis, autem similique sequi labore
                aliquid corporis illo omnis voluptate optio possimus
                doloremque, error reiciendis delectus ex tempore, architecto
                eaque, inventore nihil pariatur quibusdam facere
                reprehenderit? Doloribus deleniti sapiente, dicta, dolorem
                unde deserunt quisquam. Dolore consequuntur reiciendis
                corporis perspiciatis quam fuga magnam molestiae minima
                culpa ab beatae vel itaque cumque et adipisci autem nisi qui
                esse in, deserunt numquam hic? Et, eligendi, assumenda.
              </p>
            </div>
          </div>

          <div className="w-full px-[15px] [@media(min-width:992px)]:w-4/12">
            <div className="mt-10">
              <div className="relative z-1 rounded-[10px] bg-[#f5f5f5] px-[50px] pt-[43px] pb-[50px]">
                <ul className="list-none">
                  {DETAILS.map((row) => (
                    <li key={row.label} className="relative mt-6 first:mt-0">
                      <p className="m-0 text-base leading-6 text-[#838d9e]">
                        {row.label}
                      </p>
                      <h4 className="text-base leading-6 font-bold text-theme-1">
                        {row.value}
                      </h4>
                    </li>
                  ))}
                  <li className="relative mt-6">
                    <div className="flex items-center">
                      {SOCIAL_LINKS.map((social) => (
                        <a
                          key={social.icon}
                          href={social.href}
                          className="ml-[10px] flex h-10 w-10 items-center justify-center rounded-full bg-theme-2 text-[15px] text-white transition-colors duration-500 first:ml-0 hover:bg-theme-1 hover:text-white"
                        >
                          <i className={social.icon} aria-hidden />
                        </a>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* project-details__pagination-box */}
        <div className="mt-[117px] border-y border-[#ece9e0] py-[30px] text-center">
          <ul className="flex list-none items-center justify-between">
            <li className="flex items-center">
              <a
                href="#"
                aria-label="Previous"
                className="group flex items-center text-sm font-normal text-[#757873] transition-colors duration-500 hover:text-theme-1"
              >
                <i className="lnr-icon-arrow-left mr-5 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-theme-2 text-base text-theme-2 transition-colors duration-500 group-hover:bg-theme-2 group-hover:text-white" />
                <span className="text-left">Previous</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                aria-label="Next"
                className="group flex items-center text-sm font-normal text-[#757873] transition-colors duration-500 hover:text-theme-1"
              >
                <span className="text-right">Next</span>
                <i className="lnr-icon-arrow-right ml-5 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-theme-2 text-base text-theme-2 transition-colors duration-500 group-hover:bg-theme-2 group-hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

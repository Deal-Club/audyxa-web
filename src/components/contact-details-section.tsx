import { SectionTitle } from "@/components/section-title";

/**
 * Section `.contact-details` de page-contact.html : colonne coordonnées
 * (sec-title + liste tel/email/adresse) et colonne carte Google Maps.
 *
 * Aucun élément de cette section ne porte de classe `wow` dans le HTML
 * source (contrairement aux sections homepage) : pas d'animation d'entrée
 * ajoutée ici, fidèle à l'absence de comportement dans la source.
 *
 * Padding vertical (120px) non déclaré sur `.contact-details` elle-même :
 * il vient de la règle générique `section > .container { padding: var(--container-pt) 0 }`
 * du CSS source (style.css:320-324), appliquée à tout `<section>` dont
 * l'enfant direct est `.container`.
 */
export function ContactDetailsSection() {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="auto-container">
        <div className="flex flex-wrap">
          <div className="mb-[60px] w-full lg:mb-0 lg:w-1/2 xl:w-5/12">
            <SectionTitle
              subTitle="Contact Audyxa"
              title="Parlons de votre projet de transformation digitale"
              text="Nous intervenons auprès des entreprises qui veulent structurer leur croissance, réduire les pertes de temps et déployer des solutions digitales utiles."
              className="pt-[44px]"
            />

            <ul className="mt-[41px] list-none space-y-[30px]">
              <li className="group flex items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-theme-2 transition-colors duration-500 group-hover:bg-theme-1">
                  <span className="lnr-icon-phone-plus text-[25px] text-white" aria-hidden />
                </div>
                <div className="ml-[30px]">
                  <h6>Numéro direct</h6>
                  <a href="tel:+2290195241540" className="text-[20px] text-theme-1">
                    2290195241540
                  </a>
                </div>
              </li>
              <li className="group flex items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-theme-2 transition-colors duration-500 group-hover:bg-theme-1">
                  <span className="lnr-icon-envelope1 text-[25px] text-white" aria-hidden />
                </div>
                <div className="ml-[30px]">
                  <h6>Email</h6>
                  <a href="mailto:contact@audyxa.com" className="text-[20px] text-theme-1">
                    contact@audyxa.com
                  </a>
                </div>
              </li>
              <li className="group flex items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-theme-2 transition-colors duration-500 group-hover:bg-theme-1">
                  <span className="lnr-icon-location text-[25px] text-white" aria-hidden />
                </div>
                <div className="ml-[30px]">
                  <h6>Approche</h6>
                  <span className="text-[18px]">Conseil, exécution et pilotage sur la même mission</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 xl:w-7/12">
            <div className="rounded-[24px] bg-[#f5f7fb] px-8 py-9 shadow-[0_15px_60px_rgba(0,0,0,0.05)] lg:min-h-[550px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.22em] text-theme-2 uppercase">
                Ce que nous cadrons d&apos;abord
              </span>
              <h3 className="mb-6 text-[34px] leading-[1.15em] font-bold text-theme-1">
                Avant de parler outil, nous cherchons les vraies sources de valeur
              </h3>
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  "Quels résultats métier voulez-vous améliorer ?",
                  "Où perdez-vous du temps ou de la qualité ?",
                  "Quels outils ou flux posent problème aujourd&apos;hui ?",
                  "Quelles économies ou gains sont réellement attendus ?",
                ].map((item) => (
                  <div key={item} className="rounded-[16px] bg-white px-5 py-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-theme-2 text-white">
                        <i className="fa fa-check" />
                      </span>
                      <p className="mb-0 text-sm leading-7 text-theme-1">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[16px] bg-theme-1 px-6 py-6 text-white">
                <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-white/55 uppercase">
                  Résultat attendu
                </p>
                <p className="mb-0 text-base leading-8 text-white/85">
                  Une lecture claire de vos priorités, des quick wins, des prérequis et de la trajectoire de transformation à suivre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

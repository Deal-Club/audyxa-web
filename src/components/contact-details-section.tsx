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
    <section className="py-[120px]">
      <div className="auto-container">
        <div className="flex flex-wrap">
          {/* col-xl-5 col-lg-6 mb-md-60 : empilée avec marge basse sous lg,
              où la colonne carte passe en dessous plutôt qu'à côté. */}
          <div className="mb-[60px] w-full lg:mb-0 lg:w-1/2 xl:w-5/12">
            <SectionTitle
              subTitle="Need any help?"
              title="Get in touch with us"
              text="Lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply free ut labore et dolore magna aliqua."
            />

            <ul className="mt-[41px] list-none space-y-[30px]">
              <li className="group flex items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-theme-2 transition-colors duration-500 group-hover:bg-theme-1">
                  <span className="lnr-icon-phone-plus text-[25px] text-white" aria-hidden />
                </div>
                <div className="ml-[30px]">
                  <h6>Have any question?</h6>
                  <a href="tel:980089850" className="text-[18px]">
                    <span className="text-[20px]">Free</span> +92 (020)-9850
                  </a>
                </div>
              </li>
              <li className="group flex items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-theme-2 transition-colors duration-500 group-hover:bg-theme-1">
                  <span className="lnr-icon-envelope1 text-[25px] text-white" aria-hidden />
                </div>
                <div className="ml-[30px]">
                  <h6>Write email</h6>
                  <a href="mailto:needhelp@company.com" className="text-[18px]">
                    needhelp@company.com
                  </a>
                </div>
              </li>
              <li className="group flex items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-theme-2 transition-colors duration-500 group-hover:bg-theme-1">
                  <span className="lnr-icon-location text-[25px] text-white" aria-hidden />
                </div>
                <div className="ml-[30px]">
                  <h6>Visit anytime</h6>
                  <span className="text-[20px]">66 broklyn golden street. New York</span>
                </div>
              </li>
            </ul>
          </div>

          {/* col-xl-7 col-lg-6 : carte Google Maps. L'URL d'embed provient
              telle quelle du HTML source (localisation générique fournie
              par l'auteur du thème, jamais remplacée). */}
          <div className="w-full lg:w-1/2 xl:w-7/12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1583760510840!5m2!1sbn!2sbd"
              width="100%"
              height={550}
              className="border-0"
              allowFullScreen
              title="Localisation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

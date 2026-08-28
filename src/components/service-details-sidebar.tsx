import Link from "next/link";
import { ThemeBtn } from "@/components/theme-btn";
import { cn } from "@/lib/utils";

/**
 * Liste `.sidebar-service-list` de `page-service-details.html` : les 6
 * entrées pointent toutes vers `page-service-details.html` dans la source
 * (un seul gabarit de détail statique, pas une page par service) — reproduit
 * ici vers `/services/details` pour chacune, à l'identique du comportement
 * réel du site.
 *
 * Piège CSS relevé en source : le premier `<a>` porte `class="current"`
 * mais la règle stylée est `.sidebar-service-list li.current a` (classe sur
 * le `<li>`, pas sur le `<a>`) — seul le 2e item ("Web designing"), dont le
 * `<li>` porte `current`, est donc réellement mis en avant visuellement.
 * Reproduit ici avec un seul item actif, celui qui l'est vraiment à l'écran.
 */
const SIDEBAR_SERVICES = [
  "Digital Agency",
  "Web designing",
  "Web development",
  "Web application",
  "Digital Marketing",
  "App Development",
];

const CURRENT_SERVICE = "Web designing";

export function ServiceDetailsSidebar() {
  return (
    <div className="max-w-[365px]">
      <div className="mb-[30px]">
        <ul className="space-y-[10px]">
          {SIDEBAR_SERVICES.map((service) => {
            const isCurrent = service === CURRENT_SERVICE;
            return (
              <li key={service}>
                <Link
                  href="/services/details"
                  className={cn(
                    "group relative block rounded-[15px] bg-[#f5faff] px-10 py-[19px] text-[18px] font-bold transition-colors duration-500 ease-[ease]",
                    isCurrent ? "text-theme-2" : "hover:text-theme-2"
                  )}
                >
                  <span>{service}</span>
                  <i
                    className={cn(
                      "fa fa-angle-right absolute top-1/2 right-5 flex h-8 w-[45px] -translate-y-1/2 items-center justify-center rounded-[15px] bg-white text-base text-[#191825] transition-colors duration-500 ease-[ease]",
                      isCurrent
                        ? "bg-theme-2 text-white"
                        : "group-hover:bg-theme-2 group-hover:text-white"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* .service-details-help : boîte CTA, décors ::before purement CSS
            (aucun asset image), reproduits ici avec des div positionnées. */}
        <div className="relative mt-[30px] overflow-hidden rounded-[15px] bg-theme-2 px-[55px] pt-[57px] pb-[50px] text-center">
          <div
            aria-hidden
            className="absolute -bottom-[215px] -left-[95px] -z-10 h-[500px] w-[220px] rotate-45 rounded-[150px] bg-[#303030] [mix-blend-mode:soft-light]"
          />
          <div
            aria-hidden
            className="absolute -top-[118px] -right-[130px] h-[350px] w-[180px] rotate-[48deg] rounded-[186px] bg-white [mix-blend-mode:soft-light]"
          />

          <div className="mx-auto flex h-[73px] w-[73px] items-center justify-center rounded-full bg-white text-[32px] text-[#191825] transition-colors duration-500 ease-[ease] hover:bg-[#191825] hover:text-white">
            <span className="lnr-icon-phone-handset" aria-hidden />
          </div>

          <h2 className="mb-[21px] text-[38px] leading-[40px] font-bold text-white">
            Contact with <br /> us for any <br /> advice
          </h2>

          <div className="mt-[21px]">
            <p className="m-0 text-sm leading-8 font-semibold text-white opacity-70">
              Need help? Talk to an expert
            </p>
            <a
              href="tel:+8921231129999"
              className="text-[30px] font-semibold text-white transition-colors duration-500 ease-[ease] hover:text-[#191825]"
            >
              +892 (123) 112-9999
            </a>
          </div>
        </div>
      </div>

      {/* Lien de démonstration : href="#" tel quel en source (aucun fichier
          PDF réel disponible côté site source, rien à télécharger n'est
          inventé ici). */}
      <div className="mt-6">
        <ThemeBtn href="#" className="w-full">
          <i className="fa fa-file-pdf mr-[10px]" aria-hidden /> Download PDF
          file
        </ThemeBtn>
      </div>
    </div>
  );
}

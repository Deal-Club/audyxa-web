import Link from "next/link";
import { ThemeBtn } from "@/components/theme-btn";
import { cn } from "@/lib/utils";

const SIDEBAR_SERVICES = [
  "Audit et diagnostic digital",
  "Refonte des processus",
  "Automatisation et intégrations",
  "IA en entreprise",
  "Développement d'outils métier",
  "Pilotage et déploiement",
];

const CURRENT_SERVICE = "Automatisation et intégrations";

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
                      "fa fa-angle-right absolute top-1/2 right-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-base text-[#191825] shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-colors duration-500 ease-[ease]",
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
            Parlez avec <br /> Audyxa pour <br /> cadrer votre mission
          </h2>

          <div className="mt-[21px]">
            <p className="m-0 text-sm leading-8 font-semibold text-white opacity-70">
              Numéro direct
            </p>
            <a
              href="tel:+2290195241540"
              className="text-[30px] font-semibold text-white transition-colors duration-500 ease-[ease] hover:text-[#191825]"
            >
              2290195241540
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <ThemeBtn href="/contact" className="w-full">
          <i className="fa fa-calendar mr-[10px]" aria-hidden /> Planifier un échange
        </ThemeBtn>
      </div>
    </div>
  );
}

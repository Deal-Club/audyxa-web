import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ThemeBtn } from "@/components/theme-btn";
import { cn } from "@/lib/utils";

interface ServiceItem {
  icon: string;
  title: string;
  text: string;
}

const services: ServiceItem[] = [
  {
    icon: "flaticon-color-sample",
    title: "Audit et diagnostic digital",
    text: "Nous identifions les pertes de temps, les outils dispersés et les leviers prioritaires à activer.",
  },
  {
    icon: "flaticon-front-end",
    title: "Automatisation des processus",
    text: "Nous fluidifions les tâches répétitives, les transferts de données et les workflows métier pour gagner du temps utile.",
  },
  {
    icon: "flaticon-online-shopping",
    title: "IA et outils métier",
    text: "Nous intégrons l'IA et développons les bons outils pour mieux exécuter, mieux contrôler et mieux piloter.",
  },
];

/**
 * Section "Services" du thème Amiso (.services-section.pt-0).
 * Grille de 3 blocs service-block (col-lg-4 col-md-6 col-sm-12), suivie
 * d'un bandeau bottom-box avec CTA. Le décor ::before en pointillés
 * (dots.png) de .inner-box n'a pas d'asset source disponible dans le
 * projet et est décoratif uniquement : il n'est pas reproduit ici.
 */
export function ServicesSection() {
  return (
    <section className="relative z-1 pb-[120px]">
      <div className="auto-container">
        <SectionTitle
          subTitle="Nos expertises"
          title={
            <>
              Des services pensés pour faire <br />
              avancer votre transformation digitale
            </>
          }
          center
        />

        <div className="grid grid-cols-1 gap-x-4 gap-y-[30px] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ScrollReveal
              key={service.title}
              animation="fadeInUp"
              className="relative z-1"
            >
              <div className="group relative overflow-hidden rounded-[10px] border border-[#e2e2e2] bg-white p-[32px_20px_34px_32px] transition-all duration-300 ease-[ease] hover:-translate-y-[15px] hover:shadow-[0_10px_60px_rgba(0,0,0,0.1)]">
                <div className="absolute -right-[52px] -bottom-[52px] h-[210px] w-[210px] rounded-full bg-theme-3 p-[40px_50px] transition-all duration-300 ease-[ease] group-hover:bg-theme-2">
                  <i
                    className={cn(
                      service.icon,
                      "text-[72px] text-theme-2 transition-all duration-300 ease-[ease] group-hover:text-white"
                    )}
                  />
                </div>

                <h5 className="relative mb-[14px] font-extrabold">
                  <Link href="/services" className="transition-colors hover:text-theme-2">
                    {service.title}
                  </Link>
                </h5>
                <div className="relative mb-[44px] text-body-text">
                  {service.text}
                </div>
                <Link
                  href="/services"
                  className="relative inline-flex items-center rounded-[10px] text-body-text transition-all duration-100 ease-linear"
                >
                  <span className="mr-5 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white text-base text-theme-1 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-100 ease-linear group-hover:bg-theme-2 group-hover:text-white">
                    <i className="fa fa-long-arrow-alt-right" />
                  </span>
                  En savoir plus
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-[30px] flex items-center justify-center">
          <div className="bg-theme-3 px-[30px] py-[15px] leading-[28px]">
            Audyxa vous accompagne du diagnostic jusqu&apos;au déploiement terrain.
          </div>
          <ThemeBtn href="/services" className="ml-[10px]">
            Voir tous les services
          </ThemeBtn>
        </div>
      </div>
    </section>
  );
}

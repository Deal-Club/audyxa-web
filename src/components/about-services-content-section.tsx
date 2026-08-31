import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ThemeBtn } from "@/components/theme-btn";

interface ScopeItem {
  number: string;
  title: string;
  text: string;
}

const SCOPE: ScopeItem[] = [
  {
    number: "01",
    title: "Audit et diagnostic digital",
    text: "Nous identifions les pertes de temps, les outils dispersés et les leviers prioritaires à activer, avant toute recommandation technique.",
  },
  {
    number: "02",
    title: "Automatisation des processus",
    text: "Nous fluidifions les tâches répétitives, les transferts de données et les workflows métier pour libérer du temps réellement utile.",
  },
  {
    number: "03",
    title: "IA et outils métier",
    text: "Nous intégrons l'IA et développons les outils adaptés pour mieux exécuter, mieux contrôler et mieux piloter l'activité au quotidien.",
  },
];

/**
 * Section "Notre périmètre" propre à la page /about : cards numérotées à
 * bordure animée, structure distincte des cercles/icônes de ServicesSection
 * (home).
 */
export function AboutServicesContentSection() {
  return (
    <section className="relative bg-theme-3 pt-[110px] pb-[110px]">
      <div className="auto-container">
        <SectionTitle
          center
          subTitle="Notre périmètre"
          title="Un accompagnement qui va du diagnostic jusqu'au résultat mesuré"
          text="Nous ne vendons pas un outil isolé : nous prenons en charge l'ensemble de la chaîne, du constat initial jusqu'au suivi des résultats obtenus sur le terrain."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SCOPE.map((item, index) => (
            <ScrollReveal
              key={item.number}
              animation="fadeInUp"
              delay={`${index * 150}ms`}
              className="group relative overflow-hidden rounded-[14px] bg-white p-[36px_30px] transition-all duration-300 ease-[ease] hover:-translate-y-[10px] hover:shadow-[0_15px_60px_rgba(0,0,0,0.1)]"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-theme-2 transition-transform duration-500 ease-[ease] group-hover:scale-x-100"
              />
              <span className="mb-5 block text-[42px] font-bold leading-none text-[#e2e2e2] transition-colors duration-300 group-hover:text-theme-2">
                {item.number}
              </span>
              <h5 className="mb-4 font-extrabold text-theme-1">{item.title}</h5>
              <p className="mb-0 text-base leading-7 text-body-text">{item.text}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-[40px] flex justify-center">
          <ThemeBtn href="/services">Voir le détail des services</ThemeBtn>
        </div>
      </div>
    </section>
  );
}

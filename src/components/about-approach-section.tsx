import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";

interface ApproachItem {
  icon: string;
  title: string;
  text: string;
}

const APPROACH: ApproachItem[] = [
  {
    icon: "flaticon-color-sample",
    title: "Un seul interlocuteur",
    text: "Conseil et exécution restent dans la même équipe : pas de rupture entre celui qui préconise et celui qui déploie.",
  },
  {
    icon: "flaticon-front-end",
    title: "Des choix justifiés",
    text: "Chaque outil retenu répond à un besoin identifié pendant le diagnostic, jamais à un effet de mode.",
  },
  {
    icon: "flaticon-online-shopping",
    title: "Un suivi dans la durée",
    text: "Nous restons présents après le déploiement pour ajuster, corriger et sécuriser l'adoption réelle.",
  },
];

/**
 * Section "Notre approche" propre à la page /about : structure en bandeau
 * sombre avec 3 blocs reliés par une ligne horizontale, volontairement
 * différente de FeaturesSection (texte/image en deux colonnes) utilisée
 * sur la home.
 */
export function AboutApproachSection() {
  return (
    <section className="relative overflow-hidden bg-theme-1 pt-[110px] pb-[110px]">
      <div className="auto-container">
        <SectionTitle
          center
          light
          subTitle="Notre approche"
          title="Ce qui distingue notre façon de travailler"
        />

        <div className="relative mt-[40px] grid grid-cols-1 gap-6 md:grid-cols-3">
          {APPROACH.map((item, index) => (
            <ScrollReveal
              key={item.title}
              animation="fadeInUp"
              delay={`${index * 200}ms`}
              className="group relative rounded-[14px] border border-white/10 bg-white/[0.03] px-[30px] py-[40px] text-center transition-all duration-300 ease-[ease] hover:-translate-y-[10px] hover:border-white/0 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="relative z-1 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-theme-2 transition-all duration-300 ease-[ease] group-hover:scale-110 group-hover:bg-theme-1">
                <i
                  className={`${item.icon} text-[32px] text-white transition-colors duration-300`}
                  aria-hidden="true"
                />
              </div>
              <h5 className="mb-3 font-extrabold text-white transition-colors duration-300 group-hover:text-theme-1">
                {item.title}
              </h5>
              <p className="mb-0 text-base leading-7 text-white/70 transition-colors duration-300 group-hover:text-body-text">
                {item.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

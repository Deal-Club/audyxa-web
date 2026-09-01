import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

interface Pillar {
  number: string;
  title: string;
  text: string;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Diagnostic",
    text: "Nous cartographions les processus, les outils et les points de friction réels avant toute recommandation.",
  },
  {
    number: "02",
    title: "Priorisation",
    text: "Nous classons les chantiers selon leur impact et leur faisabilité pour concentrer l'effort sur l'essentiel.",
  },
  {
    number: "03",
    title: "Exécution",
    text: "Nous déployons les solutions retenues : automatisation, IA, développement d'outils, intégrations.",
  },
  {
    number: "04",
    title: "Mesure",
    text: "Nous suivons les résultats dans la durée pour ajuster la trajectoire et sécuriser les gains obtenus.",
  },
];

/**
 * Section "Valeurs / Méthode" propre à la page /about : 4 piliers de
 * l'approche Audyxa, présentés en grille numérotée.
 */
export function AboutMethodSection() {
  return (
    <section className="relative pt-[90px] pb-[70px]">
      <div className="auto-container">
        <SectionTitle
          center
          subTitle="Notre méthode"
          title="Quatre étapes pour une transformation digitale utile"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <ScrollReveal
              key={pillar.number}
              animation="fadeInUp"
              delay={`${index * 150}ms`}
              className="relative"
            >
              <div
                className={cn(
                  "relative border-l-2 border-[#e2e2e2] pl-6",
                  index === 0 && "border-theme-2"
                )}
              >
                <span className="mb-3 block text-[40px] font-bold leading-none text-theme-2">
                  {pillar.number}
                </span>
                <h5 className="mb-3 font-extrabold text-theme-1">{pillar.title}</h5>
                <p className="mb-0 text-base leading-7 text-body-text">{pillar.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-[40px] flex justify-center">
          <Link href="/methode" className="font-semibold text-theme-2 hover:underline">
            Découvrir la méthode complète, chapitre par chapitre →
          </Link>
        </div>
      </div>
    </section>
  );
}

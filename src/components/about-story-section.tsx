import { ScrollReveal } from "@/components/scroll-reveal";
import { ThemeBtn } from "@/components/theme-btn";

/**
 * Section "Histoire / Mission" propre à la page /about : mise en scène
 * asymétrique sur fond sombre (accroche géante à gauche, paragraphes avec
 * accent rouge à droite), pour trancher avec le style card/grille utilisé
 * ailleurs sur le site. Contenu sans date ni chiffre inventé.
 */
export function AboutStorySection() {
  return (
    <section className="relative overflow-hidden bg-theme-1 pt-[90px] pb-[90px]">
      <div className="auto-container">
        <div className="flex flex-wrap gap-y-10">
          <div className="w-full lg:w-5/12">
            <ScrollReveal animation="fadeInRight">
              <span className="relative top-[-8px] inline-block pl-5 text-[18px] font-medium leading-[1.2em] text-[#8f8f8f] before:absolute before:left-0 before:top-0 before:tracking-[0.2em] before:text-theme-2 before:content-['//']">
                Notre mission
              </span>
              <h2 className="mt-[-5px] text-[32px] leading-[1.25em] font-bold text-white [@media(min-width:1200px)]:text-[42px]">
                Trop d&apos;entreprises perdent du temps sur des outils{" "}
                <span className="text-theme-2">mal exploités</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-7/12 lg:pl-[50px]">
            <ScrollReveal
              animation="fadeInLeft"
              className="space-y-6 border-l-2 border-theme-2 pl-8 text-base leading-8 text-white/70"
            >
              <p>
                Audyxa est née d&apos;un constat simple : la plupart des
                entreprises n&apos;ont pas un problème d&apos;outils, elles ont un
                problème de cadrage. Trop de logiciels achetés sans
                diagnostic préalable, trop de process qui restent manuels
                alors qu&apos;ils pourraient être automatisés, trop de projets
                digitaux lancés sans lien clair avec un résultat métier.
              </p>
              <p>
                Notre mission est de remettre de l&apos;ordre avant d&apos;ajouter de
                la technologie. Nous commençons toujours par comprendre le
                fonctionnement réel de l&apos;organisation, ses blocages et ses
                priorités, avant de proposer la moindre solution. Cette
                discipline évite les investissements inutiles et concentre
                l&apos;énergie sur ce qui produit un impact mesurable.
              </p>
              <p>
                Nous intervenons en France comme en Afrique francophone, avec
                la conviction que la transformation digitale doit rester
                pragmatique : des solutions adaptées au contexte réel de
                chaque entreprise, pas un modèle générique plaqué de
                l&apos;extérieur.
              </p>
              <div className="pt-2">
                <ThemeBtn href="/contact" light>
                  Échanger sur votre contexte
                </ThemeBtn>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

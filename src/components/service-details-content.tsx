import { ServiceDetailsFaq } from "@/components/service-details-faq";

export function ServiceDetailsContent() {
  return (
    <div>
      <h3 className="mb-[15px] text-[36px] leading-[1.2em] font-bold text-theme-1">
        Accompagnement en transformation digitale
      </h3>
      <p className="text-body-text">
        Audyxa accompagne les entreprises qui veulent gagner en efficacité, en visibilité et en maîtrise opérationnelle. Notre travail commence toujours par le métier : objectifs, processus, données, outils existants, contraintes et capacité d&apos;adoption.
      </p>
      <p className="text-body-text">
        Une transformation utile ne consiste pas à empiler des logiciels. Elle consiste à choisir les bons leviers, dans le bon ordre, pour réduire les pertes de temps, améliorer la qualité de la donnée et fiabiliser l&apos;exécution au quotidien.
      </p>

      <div className="mt-10">
        <h3 className="mb-[15px] text-[36px] leading-[1.2em] font-bold text-theme-1">
          Ce que nous structurons dans une mission
        </h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            "Diagnostic des processus et des irritants opérationnels",
            "Cartographie des outils, intégrations et flux de données",
            "Priorisation des quick wins et des chantiers structurants",
            "Automatisation, IA, outils métier et accompagnement terrain",
          ].map((item) => (
            <div key={item} className="rounded-[14px] border border-[#e9e9e9] bg-white px-6 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-theme-2 text-white">
                  <i className="fa fa-check" />
                </span>
                <p className="mb-0 text-theme-1">{item}</p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="relative my-[30px] bg-white px-10 py-5 text-base leading-[30px] font-bold text-[#242323] shadow-[0_10px_60px_rgba(0,0,0,0.1)] before:absolute before:inset-y-[10px] before:left-0 before:w-1 before:rounded-[5px] before:bg-theme-2 before:content-['']">
          Nous ne vendons pas des outils pour occuper vos équipes. Nous cherchons d&apos;abord à créer des économies réelles, une meilleure productivité et une exécution plus simple.
        </blockquote>

        <div className="mt-6 grid grid-cols-1 gap-x-[30px] gap-y-5 md:grid-cols-2">
          <p className="text-body-text">
            Une mission peut couvrir l&apos;audit, la refonte de processus, la mise en place d&apos;automatisations, l&apos;intégration de l&apos;IA, le développement d&apos;interfaces métier et le pilotage des KPI.
          </p>
          <p className="text-body-text">
            Nous adaptons ensuite la trajectoire à votre budget, à votre contexte et au niveau de maturité de vos équipes. L&apos;objectif est d&apos;avancer avec méthode, sans surconstruire.
          </p>
        </div>
      </div>

      <div className="mt-[25px]">
        <h3 className="mb-[15px] text-[36px] leading-[1.2em] font-bold text-theme-1">
          Livrables et résultats attendus
        </h3>
        <div className="rounded-[18px] bg-[#f5f7fb] px-8 py-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h5 className="mb-3 text-theme-1">Avant</h5>
              <p className="mb-0 text-sm leading-7 text-body-text">
                Outils dispersés, tâches manuelles, manque de visibilité, lenteurs et ressaisies.
              </p>
            </div>
            <div>
              <h5 className="mb-3 text-theme-1">Pendant</h5>
              <p className="mb-0 text-sm leading-7 text-body-text">
                Diagnostic, arbitrages, feuille de route, mise en œuvre ciblée et accompagnement terrain.
              </p>
            </div>
            <div>
              <h5 className="mb-3 text-theme-1">Après</h5>
              <p className="mb-0 text-sm leading-7 text-body-text">
                Processus plus fluides, meilleure donnée, gains mesurables et meilleure capacité de pilotage.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-[15px] text-[36px] leading-[1.2em] font-bold text-theme-1">
            Questions fréquentes
          </h3>
          <p className="text-body-text">
            Voici les questions qui reviennent le plus souvent avant le lancement d&apos;une mission de transformation digitale.
          </p>
        </div>
        <ServiceDetailsFaq />
      </div>
    </div>
  );
}

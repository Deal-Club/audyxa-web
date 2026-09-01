import { ScrollReveal } from "@/components/scroll-reveal";

/**
 * Bandeau sombre intercalé entre "Notre méthode" (FeaturesSection) et
 * "Pourquoi Audyxa" (WhyChooseUs) sur la home : casse le rythme clair/clair
 * des deux sections voisines avec un statement centré sur fond noir.
 */
export function HomeQuoteBanner() {
  return (
    <section className="relative overflow-hidden bg-theme-1 py-[60px]">
      <div className="auto-container">
        <ScrollReveal animation="fadeIn" className="mx-auto max-w-[860px] text-center">
          <span className="mb-5 inline-block text-sm font-semibold tracking-[0.28em] text-theme-2 uppercase">
            Notre conviction
          </span>
          <p className="mb-0 text-[26px] leading-[1.5em] font-semibold text-white [@media(min-width:768px)]:text-[32px]">
            Une transformation digitale réussie ne se mesure pas au nombre
            d&apos;outils déployés, mais aux{" "}
            <span className="text-theme-2">économies et gains financiers réels</span>{" "}
            qu&apos;elle produit pour votre entreprise.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

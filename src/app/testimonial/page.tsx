import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { TestimonialCarouselSection } from "@/components/testimonial-carousel-section";

export const metadata: Metadata = {
  title: "Testimonial | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
};

/**
 * Page `/testimonial` (page-testimonial.html côté source). Une seule
 * section après la bannière de titre : le carrousel de témoignages en
 * pleine largeur (voir testimonial-carousel-section.tsx pour le détail des
 * écarts avec la variante homepage).
 */
export default function TestimonialPage() {
  return (
    <main>
      <PageTitle
        title="Testimonial"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pages" }, { label: "Testimonial" }]}
      />
      <TestimonialCarouselSection />
    </main>
  );
}

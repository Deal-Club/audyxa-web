import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { TestimonialCarouselSection } from "@/components/testimonial-carousel-section";

export const metadata: Metadata = {
  title: "Testimonial | Amiso",
  description:
    "Amiso - agence de design web et applications. Clone fidèle du thème Amiso.",
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

import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { ClientsSection } from "@/components/clients-section";

export const metadata: Metadata = {
  title: "About Us | Amiso",
  description:
    "Amiso - agence de design web et applications. Clone fidèle du thème Amiso.",
};

/**
 * Page `/about` (page-about.html côté source). Les cinq sections qui suivent
 * la bannière de titre sont identiques, contenu et markup compris, à celles
 * de la page d'accueil (index.html) : réutilisation directe des composants
 * homepage déjà construits et vérifiés, sans variante requise.
 */
export default function AboutPage() {
  return (
    <main>
      <PageTitle
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pages" }, { label: "About" }]}
      />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ProjectsShowcase />
      <ClientsSection />
    </main>
  );
}

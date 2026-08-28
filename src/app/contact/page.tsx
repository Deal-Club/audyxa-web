import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ContactDetailsSection } from "@/components/contact-details-section";
import { ContactPageForm } from "@/components/contact-page-form";

export const metadata: Metadata = {
  title: "Contact Us | Amiso",
  description:
    "Amiso - agence de design web et applications. Clone fidèle du thème Amiso.",
};

/**
 * Page `/contact` (page-contact.html côté source). Distincte de la
 * teaser form de la homepage (`contact-section.tsx`) : ici deux sections
 * dédiées, `.contact-details` (coordonnées + carte) puis `.team-contact-form`
 * (formulaire complet), toutes deux déléguées à leurs propres composants.
 *
 * Fil d'ariane à 2 niveaux seulement (Home > Contact), sans maillon "Pages"
 * intermédiaire — contrairement aux autres pages internes du site.
 */
export default function ContactPage() {
  return (
    <main>
      <PageTitle
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactDetailsSection />
      <ContactPageForm />
    </main>
  );
}

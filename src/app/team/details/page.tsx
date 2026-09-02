import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { TeamDetailsSection } from "@/components/team-details-section";
import { ContactPageForm } from "@/components/contact-page-form";

export const metadata: Metadata = {
  title: "Team Details | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
  robots: { index: false, follow: false },
};

/**
 * Page `/team/details` (page-team-details.html côté source) : profil d'un
 * membre de l'équipe (`.team-details`) suivi du formulaire de contact
 * (`.team-contact-form`).
 *
 * `.team-contact-form` est, source à l'appui, un bloc strictement identique
 * (markup, classes, textes, champs) à celui de page-contact.html déjà
 * reconstruit dans `contact-page-form.tsx` — vérifié ligne à ligne dans
 * style.css (règles `.team-contact-form` partagées) et dans les deux fichiers
 * HTML source. Réutilisé tel quel plutôt que dupliqué.
 */
export default function TeamDetailsPage() {
  return (
    <main>
      <PageTitle
        title="Team Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages" },
          { label: "Team Details" },
        ]}
      />
      <TeamDetailsSection />
      <ContactPageForm />
    </main>
  );
}

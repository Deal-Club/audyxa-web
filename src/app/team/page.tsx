import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { TeamSection } from "@/components/team-section";

export const metadata: Metadata = {
  title: "Team | Amiso",
  description:
    "Amiso - agence de design web et applications. Clone fidèle du thème Amiso.",
};

/**
 * Page `/team` (page-team.html côté source). Le h1 de la bannière est
 * "Team Grid" (distinct du libellé "Team" utilisé dans le fil d'Ariane),
 * conformément au HTML source. Une seule section : la grille des 3 membres
 * (voir team-section.tsx).
 */
export default function TeamPage() {
  return (
    <main>
      <PageTitle
        title="Team Grid"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pages" }, { label: "Team" }]}
      />
      <TeamSection />
    </main>
  );
}

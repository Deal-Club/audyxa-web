import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ProjectDetailsSection } from "@/components/project-details-section";
import { ProjectDetailsShowcase } from "@/components/project-details-showcase";

export const metadata: Metadata = {
  title: "Project Details | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
};

/**
 * Page `/projects/details` (`page-project-details.html` côté source) : un
 * seul gabarit de détail statique (comme `/services/details` et
 * `/team/details`), pas une page par projet.
 */
export default function ProjectDetailsPage() {
  return (
    <main>
      <PageTitle
        title="Project Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages" },
          { label: "Projects" },
        ]}
      />
      <ProjectDetailsSection />
      <ProjectDetailsShowcase />
    </main>
  );
}

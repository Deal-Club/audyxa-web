import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ProjectsPageGallery } from "@/components/projects-page-gallery";

export const metadata: Metadata = {
  title: "Projects | Audyxa",
  description:
    "Audyxa — agence de transformation digitale. Transformer, innover, exceller.",
  robots: { index: false, follow: false },
};

/**
 * Page `/projects` (`page-projects.html` côté source). Le h1 de la bannière
 * est "Projects" (identique au libellé du fil d'Ariane, contrairement à
 * `/team` où "Team Grid" diffère de "Team"). Une seule section : la galerie
 * statique de 6 projets (voir projects-page-gallery.tsx).
 */
export default function ProjectsPage() {
  return (
    <main>
      <PageTitle
        title="Projects"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pages" }, { label: "Projects" }]}
      />
      <ProjectsPageGallery />
    </main>
  );
}

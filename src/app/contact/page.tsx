import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ContactDetailsSection } from "@/components/contact-details-section";
import { ContactPageForm } from "@/components/contact-page-form";

export const metadata: Metadata = {
  title: "Contact | Audyxa",
  description:
    "Contactez Audyxa pour échanger sur votre transformation digitale, vos processus, vos automatisations et vos priorités de déploiement.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <main>
      <PageTitle
        title="Contact"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
        currentPath="/contact"
      />
      <ContactDetailsSection />
      <ContactPageForm />
    </main>
  );
}

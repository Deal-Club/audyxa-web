import { RichText } from "@/components/rich-text";
import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ContactDetailsSection } from "@/components/contact-details-section";
import { ContactPageForm } from "@/components/contact-page-form";

export const metadata: Metadata = {
  title: "Contacter Audyxa : conseil en digitalisation",
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
      <section className="pt-[40px] pb-[10px]">
        <div className="auto-container">
          <p className="mb-0 text-center text-[17px] leading-8 text-theme-1">
            <RichText text="Une question avant de nous écrire ? Consultez la [FAQ](/faq) ou nos [services](/services)." />
          </p>
        </div>
      </section>
      <ContactDetailsSection />
      <ContactPageForm />
    </main>
  );
}

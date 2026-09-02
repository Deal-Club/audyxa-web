import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { ThemeBtn } from "@/components/theme-btn";
import { CallToAction } from "@/components/call-to-action";
import { SERVICES_DETAIL } from "@/lib/services-content";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Chatbot WhatsApp pour entreprise | Audyxa",
  description:
    "Mise en place d'un chatbot WhatsApp connecté à votre CRM pour qualifier et router les demandes entrantes, avec sortie systématique vers un humain sur les cas sensibles.",
  alternates: { canonical: "/services/chatbot-whatsapp" },
};

const PROBLEMS = [
  "Vos commerciaux ou votre support gèrent un volume élevé de demandes WhatsApp sans historique centralisé.",
  "Les mêmes questions reviennent en boucle et mobilisent du temps humain évitable.",
  "Vous ne savez pas si un chatbot WhatsApp est pertinent pour votre activité ou juste un effet de mode.",
];

const APPROACH_STEPS = [
  {
    title: "Cadrer les cas d'usage avant l'outil",
    text: "Comme pour tout cas d'usage IA, nous définissons d'abord ce que le chatbot doit réellement traiter : qualification de demande, réponses aux questions fréquentes, prise de rendez-vous — pas une promesse de tout automatiser.",
  },
  {
    title: "Connecter au CRM, pas créer un silo",
    text: "Un chatbot WhatsApp isolé du reste de vos outils recrée un silo de plus. Nous le connectons à votre CRM pour que l'historique de conversation reste exploitable par vos équipes.",
  },
  {
    title: "Une sortie humaine systématique",
    text: "Toute demande hors périmètre ou sensible bascule vers un humain, avec le contexte de la conversation déjà disponible — jamais un utilisateur bloqué dans une boucle automatisée.",
  },
];

export default function ChatbotWhatsappPage() {
  const faq = [
    {
      question: "Un chatbot WhatsApp convient-il à toutes les entreprises ?",
      answer:
        "Non. Il est pertinent quand le volume de demandes WhatsApp est significatif et les questions suffisamment récurrentes pour justifier l'automatisation — un diagnostic préalable permet de le vérifier avant d'investir.",
    },
    {
      question: "Le chatbot remplace-t-il notre équipe support ?",
      answer:
        "Non. Il qualifie et répond aux demandes simples, avec une sortie systématique vers un humain pour les cas qui le nécessitent — l'objectif est de libérer du temps, pas de supprimer le contact humain.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chatbot WhatsApp pour entreprise",
    description:
      "Mise en place d'un chatbot WhatsApp connecté au CRM, avec sortie systématique vers un humain sur les cas sensibles.",
    provider: { "@type": "Organization", name: "Audyxa", url: SITE_URL },
    areaServed: ["France", "Afrique francophone"],
    url: `${SITE_URL}/services/chatbot-whatsapp`,
  };

  return (
    <main>
      <Script
        id="chatbot-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="chatbot-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageTitle
        title="Chatbot WhatsApp pour entreprise"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Chatbot WhatsApp" },
        ]}
        currentPath="/services/chatbot-whatsapp"
      />

      {/* Réponse directe — asymétrique */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                Un cas d&apos;usage IA parmi d&apos;autres, pas un produit à part
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[30px]">
                Chatbot WhatsApp pour entreprise
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-6 text-[19px] leading-9 text-theme-1">
                Un chatbot WhatsApp connecté à votre CRM permet de qualifier et de router les demandes
                entrantes automatiquement, tout en gardant une sortie systématique vers un humain sur
                les cas sensibles — cadré selon la même méthode que nos autres cas d&apos;usage IA.
              </p>
              <ThemeBtn href="/contact">Demander un diagnostic</ThemeBtn>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes résolus */}
      <section className="bg-theme-3 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Pour qui"
            title="Les situations que ce service résout"
            className="mb-[40px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROBLEMS.map((problem, index) => (
              <div key={problem} className="rounded-[14px] bg-white p-7">
                <span className="mb-4 block text-[32px] font-bold leading-none text-[#e2e2e2]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mb-0 text-base leading-7 text-body-text">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche — colonne latérale + étapes */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <SectionTitle subTitle="Notre approche" title="Comment nous traitons ce sujet" className="mb-0" />
            </div>
            <div className="w-full lg:w-8/12">
              <div className="space-y-8">
                {APPROACH_STEPS.map((step, index) => (
                  <div key={step.title} className="flex gap-6 border-b border-[#e2e2e2] pb-8 last:border-b-0 last:pb-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-theme-2 text-lg font-extrabold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="mb-2 text-[20px] font-extrabold text-theme-1">{step.title}</h2>
                      <p className="mb-0 text-base leading-7 text-body-text">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lien vers le cœur de l'offre — asymétrique */}
      <section className="bg-theme-1 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <div className="flex flex-wrap gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[40px]">
              <SectionTitle
                light
                subTitle="Où ça s'inscrit"
                title="Ce sujet reste secondaire chez Audyxa"
                className="mb-0"
              />
            </div>
            <div className="w-full lg:w-8/12">
              <p className="mb-6 text-base leading-8 text-white/85">
                Le chatbot WhatsApp est un cas d&apos;usage IA parmi d&apos;autres, pas le cœur de
                l&apos;offre Audyxa. Nos services de transformation digitale — audit, automatisation,
                IA, développement d&apos;outils métier, pilotage — restent notre priorité.
              </p>
              <Link href="/services" className="font-semibold text-theme-2 hover:underline">
                Voir tous nos services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-[60px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Questions fréquentes"
            title="Ce qu'on nous demande le plus"
            className="mb-[40px] max-w-[820px]"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-[10px] border border-[#e2e2e2] bg-white px-6 py-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
              >
                <summary className="cursor-pointer list-none text-[17px] font-bold text-theme-1 marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <i className="fa fa-angle-down shrink-0 text-theme-2 transition-transform duration-300 group-open:rotate-180" />
                  </span>
                </summary>
                <p className="mt-3 mb-0 text-base leading-7 text-body-text">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Autres services */}
      <section className="bg-theme-3 pt-[50px] pb-[50px]">
        <div className="auto-container">
          <SectionTitle
            subTitle="Voir aussi"
            title="Nos services de transformation digitale"
            className="mb-[40px] max-w-[760px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DETAIL.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center gap-4 rounded-[14px] border border-[#e2e2e2] bg-white p-5 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-theme-3 transition-colors group-hover:bg-theme-2">
                  <i className={`${service.icon} text-[20px] text-theme-2 transition-colors group-hover:text-white`} />
                </div>
                <span className="font-semibold text-theme-1 group-hover:text-theme-2">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={
          <>
            Un chatbot WhatsApp est-il pertinent
            <br className="hidden min-[600px]:block" />
            pour votre activité ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}

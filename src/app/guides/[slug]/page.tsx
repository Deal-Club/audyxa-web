import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { SectionTitle } from "@/components/section-title";
import { CallToAction } from "@/components/call-to-action";
import { GUIDES, getGuide } from "@/lib/guide-content";
import { METHOD_CHAPTERS } from "@/lib/methode-content";
import { SERVICES_DETAIL } from "@/lib/services-content";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return {
    title: `${guide.title} | Audyxa`,
    description: guide.summary,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const relatedChapters = guide.relatedMethodSlugs
    .map((s) => METHOD_CHAPTERS.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c?.sections?.length));
  const relatedServices = guide.relatedServiceSlugs
    .map((s) => SERVICES_DETAIL.find((service) => service.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherGuides = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    author: { "@type": "Person", name: "Paul Maxime Dossou" },
    publisher: { "@type": "Organization", name: "Audyxa" },
    mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main>
      <Script
        id="guide-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="guide-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Bannière */}
      <PageTitle
        title={guide.title}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.title }]}
        currentPath={`/guides/${guide.slug}`}
      />

      {/* 2. Résumé */}
      <section className="pt-[90px] pb-[60px]">
        <div className="auto-container">
          <div className="flex flex-wrap items-center gap-y-8">
            <div className="w-full lg:w-4/12 lg:pr-[30px]">
              <span className="mb-4 inline-block text-[13px] font-bold tracking-[0.2em] text-theme-2 uppercase">
                Guide pratique
              </span>
              <h1 className="mb-0 text-[24px] font-extrabold leading-[1.25em] text-theme-1 [@media(min-width:768px)]:text-[28px]">
                {guide.title}
              </h1>
            </div>
            <div className="w-full lg:w-8/12 lg:pl-[40px]">
              <p className="mb-0 text-[19px] leading-9 text-theme-1">{guide.summary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contenu */}
      <section className="bg-theme-3 pt-[60px] pb-[70px]">
        <div className="auto-container">
          <div className="mx-auto max-w-[900px] rounded-[16px] bg-white p-8 [@media(min-width:768px)]:p-12">
            {guide.sections.map((section, i) => (
              <div key={section.heading} className="mb-10 last:mb-0">
                <h2 className="mb-4 text-[22px] font-extrabold text-theme-1 [@media(min-width:768px)]:text-[26px]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j} className="mb-4 text-base leading-8 text-body-text last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {i < guide.sections.length - 1 ? <div className="mt-10 border-b border-[#e2e2e2]" /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services liés */}
      {relatedServices.length > 0 ? (
        <section className="pt-[70px] pb-[70px]">
          <div className="auto-container">
            <SectionTitle subTitle="Services liés" title="Nos services associés à ce sujet" className="mb-[40px] max-w-[760px]" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-4 rounded-[14px] border border-[#e2e2e2] bg-white p-5 transition-all duration-300 hover:-translate-y-[4px] hover:border-theme-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
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
      ) : null}

      {/* 5. Chapitres méthode liés */}
      {relatedChapters.length > 0 ? (
        <section className="bg-theme-1 pt-[70px] pb-[70px]">
          <div className="auto-container">
            <SectionTitle
              light
              subTitle="Pour aller plus loin"
              title="Approfondir dans la méthode Audyxa"
              className="mb-[40px] max-w-[760px]"
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedChapters.map((chapter) => (
                <Link
                  key={chapter.slug}
                  href={`/methode/${chapter.slug}`}
                  className="group rounded-[14px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-[6px] hover:bg-white"
                >
                  <span className="mb-2 block text-[13px] font-bold tracking-[0.14em] text-theme-2 uppercase">
                    Chapitre {chapter.number}
                  </span>
                  <h3 className="mb-0 text-[18px] font-extrabold text-white group-hover:text-theme-1">
                    {chapter.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 6. FAQ */}
      <section className="bg-theme-3 pt-[90px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle subTitle="Questions fréquentes" title="Pour aller plus loin sur ce sujet" className="mb-[50px] max-w-[820px]" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            {guide.faq.map((item) => (
              <details
                key={item.question}
                className="group h-fit rounded-[10px] border border-[#e2e2e2] bg-white px-6 py-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
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

      {/* 7. Autres guides */}
      <section className="pt-[70px] pb-[70px]">
        <div className="auto-container">
          <SectionTitle subTitle="Voir aussi" title="D'autres guides pratiques" className="mb-[40px] max-w-[760px]" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherGuides.map((other) => (
              <Link
                key={other.slug}
                href={`/guides/${other.slug}`}
                className="group rounded-[14px] border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              >
                <span className="font-semibold text-theme-1 group-hover:text-theme-2">{other.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA final */}
      <CallToAction
        title={
          <>
            Envie d&apos;appliquer ce guide
            <br className="hidden min-[600px]:block" />
            à votre organisation ?
          </>
        }
        ctaHref="/contact"
        ctaLabel="Demander un diagnostic"
      />
    </main>
  );
}

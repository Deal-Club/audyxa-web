import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { PageTitle } from "@/components/page-title";
import { CallToAction } from "@/components/call-to-action";
import {
  ChapterCard,
  CheckList,
  FaqAccordion,
  KeyPointCards,
  MetaRail,
  PitfallList,
  SectionHead,
  TableOfContents,
} from "@/components/methode/method-ui";
import {
  METHOD_CHAPTERS,
  estimateReadingMinutes,
  getMethodChapter,
  getPublishedMethodChapters,
  slugifyHeading,
} from "@/lib/methode-content";
import { METHOD_EXTRAS, PILLARS } from "@/lib/methode-extras";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return getPublishedMethodChapters().map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getMethodChapter(slug);
  if (!chapter || !chapter.sections) return {};

  return {
    title: `${chapter.title} | Méthode Audyxa`,
    description: chapter.summary,
    alternates: { canonical: `/methode/${chapter.slug}` },
  };
}

export default async function MethodChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getMethodChapter(slug);
  if (!chapter || !chapter.sections) notFound();

  const extras = METHOD_EXTRAS[chapter.slug];
  const sections = chapter.sections;
  const published = getPublishedMethodChapters();
  const position = published.findIndex((c) => c.slug === chapter.slug);
  const previous = position > 0 ? published[position - 1] : null;
  const next = position < published.length - 1 ? published[position + 1] : null;
  const pillar = extras ? PILLARS.find((p) => p.key === extras.pillar) : undefined;
  const related = extras
    ? METHOD_CHAPTERS.filter(
        (c) =>
          c.slug !== chapter.slug &&
          c.sections?.length &&
          METHOD_EXTRAS[c.slug]?.pillar === extras.pillar
      ).slice(0, 3)
    : [];
  const toc = sections.map((section) => ({
    id: slugifyHeading(section.heading),
    label: section.heading,
  }));
  const readingMinutes = estimateReadingMinutes(chapter);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: chapter.title,
    description: chapter.summary,
    author: { "@type": "Person", name: "Paul Maxime Dossou" },
    publisher: { "@type": "Organization", name: "Audyxa" },
    mainEntityOfPage: `${SITE_URL}/methode/${chapter.slug}`,
    articleSection: pillar?.title,
  };

  const faqJsonLd = extras
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: extras.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <main>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd ? (
        <Script
          id="chapter-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <PageTitle
        title={chapter.title}
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Méthode", href: "/methode" },
          { label: `Chapitre ${chapter.number}` },
        ]}
        currentPath={`/methode/${chapter.slug}`}
      />

      {/* 1. En bref : question centrale, métadonnées et points clés */}
      <section className="bg-white pt-[70px] pb-[60px]">
        <div className="auto-container">
          <MetaRail
            items={[
              { label: "Chapitre", value: `${chapter.number} sur ${METHOD_CHAPTERS.length}` },
              { label: "Pilier", value: pillar?.label ?? "Méthode" },
              { label: "Sections", value: `${sections.length} parties` },
              { label: "Lecture", value: `${readingMinutes} min` },
            ]}
          />
          <SectionHead
            kicker="En bref"
            title={extras?.question ?? chapter.title}
            intro={chapter.summary}
          />
          {extras ? <KeyPointCards points={extras.keyPoints} /> : null}
        </div>
      </section>

      {/* 2. Sommaire ancré */}
      <section className="bg-light-bg py-[60px]">
        <div className="auto-container">
          <SectionHead
            kicker="Sommaire"
            title="Ce que couvre ce chapitre"
            intro="Chaque partie traite un point de la démarche ; les liens ci-dessous mènent directement à la section correspondante."
          />
          <TableOfContents items={toc} />
        </div>
      </section>

      {/* 3. Développement du chapitre */}
      <section className="bg-white pt-[70px] pb-[40px]">
        <div className="auto-container">
          <SectionHead kicker="Le détail" title="La démarche, partie par partie" />
          <div className="flex flex-col gap-[54px]">
            {sections.map((section, i) => (
              <article
                key={section.heading}
                id={slugifyHeading(section.heading)}
                className="scroll-mt-[110px] border-t border-[#e6e3dc] pt-8 first:border-t-0 first:pt-0 lg:grid lg:grid-cols-[92px_minmax(0,1fr)] lg:gap-8"
              >
                <div className="mb-4 lg:mb-0">
                  <span className="text-[42px] font-extrabold leading-none tabular-nums text-[#e6e3dc]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="max-w-[760px]">
                  <h2 className="mb-5 text-[22px] font-extrabold leading-[1.25] text-theme-1 [@media(min-width:768px)]:text-[27px]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? "mb-5 text-[17px] leading-8 font-medium text-theme-1 last:mb-0"
                          : "mb-5 text-base leading-8 text-body-text last:mb-0"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. À retenir */}
      {extras ? (
        <section className="bg-theme-1 py-[70px]">
          <div className="auto-container">
            <SectionHead
              kicker="À retenir"
              title="Les points que nous vérifions systématiquement"
              light
            />
            <CheckList items={extras.retenir} light />
          </div>
        </section>
      ) : null}

      {/* 5. Pièges fréquents */}
      {extras ? (
        <section className="bg-light-bg py-[70px]">
          <div className="auto-container">
            <SectionHead
              kicker="Pièges fréquents"
              title="Les erreurs qui coûtent le plus cher"
              intro="Ces écueils reviennent régulièrement en mission. Les identifier tôt évite de reconstruire un chantier déjà livré."
            />
            <PitfallList items={extras.pieges} />
          </div>
        </section>
      ) : null}

      {/* 6. Application chez Audyxa */}
      {extras ? (
        <section className="bg-white py-[70px]">
          <div className="auto-container">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <SectionHead
                  kicker="En pratique"
                  title="Comment Audyxa applique ce chapitre"
                  as="h2"
                />
                <p className="mb-0 text-[17px] leading-8 text-body-text">{extras.application}</p>
              </div>
              <aside className="rounded-[14px] bg-theme-3 p-8">
                <h3 className="mb-4 text-[18px] font-extrabold text-theme-1">
                  Les services concernés
                </h3>
                <ul className="mb-6 flex flex-col gap-3">
                  {[
                    {
                      label: "Audit et diagnostic digital",
                      href: "/services/audit-diagnostic-digital",
                    },
                    {
                      label: "Refonte des processus métier",
                      href: "/services/refonte-processus",
                    },
                    {
                      label: "Automatisation et intégrations",
                      href: "/services/automatisation-integrations",
                    },
                    { label: "Intelligence artificielle", href: "/services/ia-entreprise" },
                  ].map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="text-[15px] font-semibold text-theme-1 hover:text-theme-2"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block rounded-[6px] bg-theme-2 px-6 py-3 text-[14px] font-bold text-white transition-colors duration-200 hover:bg-theme-2-dark"
                >
                  Demander un diagnostic
                </Link>
              </aside>
            </div>
          </div>
        </section>
      ) : null}

      {/* 7. FAQ */}
      {extras ? (
        <section className="bg-light-bg py-[70px]">
          <div className="auto-container">
            <SectionHead
              kicker="Questions fréquentes"
              title={`Ce qu'on nous demande sur « ${chapter.title} »`}
            />
            <div className="max-w-[880px]">
              <FaqAccordion items={extras.faq} />
            </div>
          </div>
        </section>
      ) : null}

      {/* 8. Poursuivre la lecture */}
      <section className="bg-white py-[70px]">
        <div className="auto-container">
          <SectionHead
            kicker="Poursuivre"
            title="Les chapitres liés"
            intro={
              pillar
                ? `Ce chapitre appartient au pilier « ${pillar.title} ». ${pillar.description}`
                : undefined
            }
          />
          {related.length ? (
            <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ChapterCard
                  key={item.slug}
                  href={`/methode/${item.slug}`}
                  number={item.number}
                  title={item.title}
                  summary={item.summary}
                  pillarLabel={PILLARS.find((p) => p.key === METHOD_EXTRAS[item.slug]?.pillar)?.label}
                />
              ))}
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {previous ? (
              <Link
                href={`/methode/${previous.slug}`}
                className="group rounded-[12px] border border-[#e6e3dc] bg-white px-7 py-6 transition-colors duration-300 hover:border-theme-2"
              >
                <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
                  ← Chapitre précédent
                </span>
                <span className="text-[17px] font-extrabold text-theme-1 group-hover:text-theme-2">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/methode/${next.slug}`}
                className="group rounded-[12px] border border-[#e6e3dc] bg-white px-7 py-6 text-right transition-colors duration-300 hover:border-theme-2"
              >
                <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
                  Chapitre suivant →
                </span>
                <span className="text-[17px] font-extrabold text-theme-1 group-hover:text-theme-2">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </div>

          <div className="mt-10 rounded-[12px] border border-[#e6e3dc] bg-[#faf8f4] px-7 py-6 text-[14px] leading-7 text-body-text">
            Contenu issu et reformulé du cours{" "}
            <span className="font-semibold text-theme-1">Digitalisation des Entreprises</span>, Paul
            Maxime Dossou, édition août 2026 — fondateur d&apos;Audyxa.{" "}
            <Link href="/methode" className="font-semibold text-theme-2 hover:underline">
              Revenir à la méthode complète
            </Link>
          </div>
        </div>
      </section>

      <CallToAction
        title={
          <>
            Envie d&apos;appliquer cette méthode
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

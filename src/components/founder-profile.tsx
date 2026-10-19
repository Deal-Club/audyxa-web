import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/call-to-action";
import { FaqAccordion, SectionHead } from "@/components/methode/method-ui";

/**
 * Gabarit commun des pages fondateurs (/auteur/*). Les faits affichés
 * proviennent des sites personnels de chaque fondateur ; aucune donnée n'est
 * inventée. Composant serveur, sans JavaScript client.
 */

export interface FounderData {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  photo?: { src: string; alt: string };
  stats: { value: string; label: string }[];
  about: string[];
  services: { title: string; items: string[] }[];
  tools?: string[];
  highlights: { label: string; text: string }[];
  links: { label: string; href: string; external?: boolean }[];
  zones?: string[];
  faq: { question: string; answer: string }[];
  readMore: { kicker: string; title: string; href: string }[];
  ctaTitle: string;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function FounderProfile({ data }: { data: FounderData }) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-theme-1 pt-[70px] pb-[90px] text-white min-[992px]:pt-[110px] min-[992px]:pb-[120px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[140px] -top-[140px] h-[420px] w-[420px] rounded-full bg-theme-2/20 blur-[90px]"
        />
        <div className="auto-container relative">
          <nav aria-label="Fil d'Ariane" className="mb-10 text-[13px] text-[#9a9a9a]">
            <Link href="/" className="!text-[#9a9a9a] hover:!text-white">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{data.name}</span>
          </nav>
          <div className="grid grid-cols-1 items-center gap-12 min-[992px]:grid-cols-[1.25fr_0.75fr]">
            <div>
              <span className="relative inline-block pl-5 text-[14px] font-semibold uppercase tracking-[0.14em] text-[#b5b5b5] before:absolute before:left-0 before:top-0 before:text-theme-2 before:content-['//']">
                {data.role}
              </span>
              <h1 className="mt-3 mb-5 text-[40px] font-extrabold leading-[1.05] text-white min-[768px]:text-[62px]">
                {data.name}
              </h1>
              <p className="mb-4 max-w-[640px] text-[19px] font-semibold leading-[1.5] text-white">
                {data.tagline}
              </p>
              <p className="mb-8 max-w-[640px] text-base leading-8 text-[#b5b5b5]">{data.intro}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-[8px] bg-theme-2 px-7 py-3.5 text-[14px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-theme-2-dark"
                >
                  Prendre contact
                </Link>
                {data.links.slice(0, 1).map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
                    className="rounded-[8px] border border-white/25 px-7 py-3.5 text-[14px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[380px]">
              <div className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[22px] border-2 border-theme-2" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#1c1c1c]">
                {data.photo ? (
                  <Image
                    src={data.photo.src}
                    alt={data.photo.alt}
                    fill
                    priority
                    sizes="(max-width: 992px) 80vw, 380px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#111] text-[96px] font-extrabold tracking-tight text-theme-2">
                    {initials(data.name)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats, chevauche le hero */}
      <section className="relative z-[2] -mt-[52px] pb-[30px]">
        <div className="auto-container">
          <ul className="m-0 grid list-none grid-cols-2 gap-px overflow-hidden rounded-[16px] border border-[#e6e3dc] bg-[#e6e3dc] p-0 shadow-[0_20px_60px_rgba(0,0,0,0.12)] min-[768px]:grid-cols-4">
            {data.stats.map((s) => (
              <li key={s.label} className="bg-white px-6 py-7 text-center">
                <span className="block text-[34px] font-extrabold leading-none text-theme-2">
                  {s.value}
                </span>
                <span className="mt-2 block text-[13px] font-semibold uppercase tracking-[0.1em] text-theme-1">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* À propos */}
      <section className="bg-white py-[80px]">
        <div className="auto-container grid grid-cols-1 gap-12 min-[992px]:grid-cols-[0.8fr_1.2fr]">
          <SectionHead kicker="À propos" title={`Qui est ${data.name} ?`} />
          <div>
            {data.about.map((p) => (
              <p key={p} className="mb-5 text-[16px] leading-8 text-body-text last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Points clés */}
      <section className="bg-light-bg py-[80px]">
        <div className="auto-container">
          <SectionHead kicker="En bref" title="Ce qui le distingue" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {data.highlights.map((h, i) => (
              <article
                key={h.label}
                className="relative rounded-[14px] border border-[#e6e3dc] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_14px_44px_rgba(0,0,0,0.07)]"
              >
                <span className="mb-4 block text-[13px] font-extrabold tracking-[0.2em] text-theme-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-[19px] font-extrabold text-theme-1">{h.label}</h3>
                <p className="mb-0 text-[15px] leading-7 text-body-text">{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-white py-[80px]">
        <div className="auto-container">
          <SectionHead kicker="Expertise" title="Ce qu'il construit pour les entreprises" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {data.services.map((s) => (
              <article
                key={s.title}
                className="rounded-[14px] border border-[#e6e3dc] bg-white p-7 transition-colors duration-300 hover:border-theme-2"
              >
                <h3 className="mb-4 text-[20px] font-extrabold text-theme-1">{s.title}</h3>
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-6 text-[15px] leading-7 text-body-text before:absolute before:left-0 before:top-[11px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-theme-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          {data.tools ? (
            <ul className="m-0 mt-8 flex list-none flex-wrap gap-2 p-0">
              {data.tools.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[#e6e3dc] px-4 py-1.5 text-[13px] font-semibold text-theme-1"
                >
                  {t}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {/* Zones */}
      {data.zones ? (
        <section className="bg-theme-1 py-[80px]">
          <div className="auto-container">
            <SectionHead
              light
              kicker="Zones"
              title="Où il intervient"
              intro="Sur place à Cotonou, à distance partout ailleurs."
            />
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {data.zones.map((z) => (
                <li
                  key={z}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-[14px] text-[#d6d6d6]"
                >
                  {z}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Profils */}
      <section className="bg-white py-[80px]">
        <div className="auto-container">
          <SectionHead kicker="Profils" title="Le retrouver en ligne" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {data.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
                className="group rounded-[12px] border border-[#e6e3dc] bg-white px-7 py-6 transition-colors duration-300 hover:border-theme-2"
              >
                <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
                  {l.external ? "Site externe" : "Contact"}
                </span>
                <span className="break-words text-[17px] font-extrabold text-theme-1 group-hover:text-theme-2">
                  {l.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light-bg py-[80px]">
        <div className="auto-container">
          <SectionHead kicker="Questions fréquentes" title={`Sur ${data.name}`} />
          <div className="max-w-[880px]">
            <FaqAccordion items={data.faq} />
          </div>
        </div>
      </section>

      {/* Lire plus */}
      <section className="bg-white py-[80px]">
        <div className="auto-container">
          <SectionHead kicker="Poursuivre" title="En lire plus" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {data.readMore.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group rounded-[12px] border border-[#e6e3dc] bg-white px-7 py-6 transition-colors duration-300 hover:border-theme-2"
              >
                <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-theme-2">
                  {r.kicker}
                </span>
                <span className="text-[17px] font-extrabold text-theme-1 group-hover:text-theme-2">
                  {r.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction title={data.ctaTitle} ctaHref="/contact" ctaLabel="Prendre contact" />
    </main>
  );
}

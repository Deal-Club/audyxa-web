interface TechLogo {
  name: string;
  slug?: string;
  iconClass?: string;
  customIcon?: "google-workspace" | "twilio";
}

const TECH_LOGOS: TechLogo[] = [
  { name: "n8n", slug: "n8n" },
  { name: "Make", slug: "make" },
  { name: "Odoo", slug: "odoo" },
  { name: "OpenAI", iconClass: "fa-brands fa-openai" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "Vue.js", slug: "vuedotjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Laravel", slug: "laravel" },
  { name: "PHP", slug: "php" },
  { name: "GitHub", slug: "github" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Shopify", slug: "shopify" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Google Ads", slug: "googleads" },
  { name: "Google Workspace", customIcon: "google-workspace" },
  { name: "Semrush", slug: "semrush" },
  { name: "Docker", slug: "docker" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Python", slug: "python" },
  { name: "Twilio", customIcon: "twilio" },
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Airtable", slug: "airtable" },
  { name: "Slack", iconClass: "fa-brands fa-slack" },
  { name: "Zapier", slug: "zapier" },
  { name: "Notion", slug: "notion" },
];

function TechIcon({ logo }: { logo: TechLogo }) {
  if (logo.iconClass) {
    return <i className={`${logo.iconClass} text-[22px] leading-none text-theme-1`} aria-hidden="true" />;
  }

  if (logo.customIcon === "google-workspace") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
      >
        <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.46a5.52 5.52 0 0 1-2.4 3.63v3.01h3.89c2.28-2.1 3.54-5.2 3.54-8.67Z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.89-3.01c-1.08.72-2.45 1.15-4.06 1.15-3.12 0-5.76-2.1-6.7-4.92H1.28v3.11A12 12 0 0 0 12 24Z" />
        <path fill="#FBBC05" d="M5.3 14.31A7.21 7.21 0 0 1 4.92 12c0-.8.14-1.57.38-2.31V6.58H1.28A12 12 0 0 0 0 12c0 1.93.46 3.75 1.28 5.42l4.02-3.11Z" />
        <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.61 4.58 1.81l3.43-3.43C17.95 1.14 15.24 0 12 0A12 12 0 0 0 1.28 6.58L5.3 9.69C6.24 6.87 8.88 4.77 12 4.77Z" />
      </svg>
    );
  }

  if (logo.customIcon === "twilio") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
      >
        <circle cx="12" cy="12" r="12" fill="#F22F46" />
        <circle cx="8" cy="8" r="2.2" fill="#fff" />
        <circle cx="16" cy="8" r="2.2" fill="#fff" />
        <circle cx="8" cy="16" r="2.2" fill="#fff" />
        <circle cx="16" cy="16" r="2.2" fill="#fff" />
      </svg>
    );
  }

  return (
    <>
      {/* Logos de marques chargés en direct pour conserver les visuels réels de l'écosystème. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${logo.slug}`}
        alt={logo.name}
        width={22}
        height={22}
        loading="lazy"
        className="h-[22px] w-[22px] object-contain"
      />
    </>
  );
}

function TechTrack() {
  return (
    <>
      {TECH_LOGOS.map((logo) => (
        <div
          key={logo.name}
          className="flex min-w-max items-center gap-3 rounded-full border border-[#e7e7e7] bg-[#fafafa] px-5 py-3"
        >
          <TechIcon logo={logo} />
          <span className="text-sm font-semibold tracking-[0.08em] text-theme-1 uppercase">
            {logo.name}
          </span>
        </div>
      ))}
    </>
  );
}

export function TechMarquee() {
  return (
    <div className="border-t border-[#ececec] bg-white">
      <div className="auto-container py-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="text-[11px] font-bold tracking-[0.28em] text-theme-2 uppercase">
            Écosystème de transformation
          </span>
          <span className="hidden text-xs text-body-text md:block">
            Automatisation, data, IA, CRM, SEO, outils métier, intégrations
          </span>
        </div>

        <div className="marquee-shell relative overflow-hidden before:pointer-events-none before:absolute before:top-0 before:bottom-0 before:left-0 before:z-[1] before:w-10 before:bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:pointer-events-none after:absolute after:top-0 after:right-0 after:bottom-0 after:z-[1] after:w-10 after:bg-[linear-gradient(270deg,#ffffff_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="marquee-track">
            <TechTrack />
            <TechTrack />
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const DEFAULT_TITLE = "Audyxa | Transformation digitale des entreprises";
const DEFAULT_DESCRIPTION =
  "Audyxa accompagne les entreprises en France et en Afrique francophone avec une approche conseil + services pour transformer les pertes de temps en gains réels.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [{ url: `${SITE_URL}/images/logo-full.png`, width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}/images/logo-full.png`],
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-full.png`,
  description:
    "Audyxa accompagne les entreprises en France et en Afrique francophone : conseil, automatisation, IA et développement d'outils métier pour transformer les pertes de temps en gains réels.",
  email: "contact@audyxa.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@audyxa.com",
    contactType: "customer service",
    availableLanguage: "French",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} antialiased`}>
      <body className="page-wrapper">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

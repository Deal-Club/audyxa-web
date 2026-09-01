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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Audyxa | Transformation digitale des entreprises",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Audyxa accompagne les entreprises en France et en Afrique francophone avec une approche conseil + services pour transformer les pertes de temps en gains réels.",
  alternates: {
    canonical: "/",
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

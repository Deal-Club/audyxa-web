import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const DEFAULT_TITLE = "Audyxa | Cabinet de conseil en transformation digitale en Afrique de l'Ouest";
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}/images/logo-full.png`],
  },
};

/** Couleur de marque réelle (--theme-color2 dans globals.css). */
export const viewport: Viewport = {
  themeColor: "#ff3838",
};

/**
 * Schema.org ProfessionalService (site entier). `areaServed` reprend la
 * zone cible prioritaire d'Audyxa (Afrique de l'Ouest francophone + France).
 *
 * `sameAs` : aucun profil social officiel confirmé n'a été trouvé dans le
 * dépôt (pas de lien LinkedIn/réseaux dans le header, le footer ou ailleurs)
 * : le champ est omis plutôt qu'inventé, conformément à la règle anti-
 * invention. À ajouter dès qu'une URL de profil réelle est disponible.
 */
const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-full.png`,
  description:
    "Audyxa accompagne les entreprises en France et en Afrique francophone : conseil, automatisation, IA et développement d'outils métier pour transformer les pertes de temps en gains réels.",
  email: "contact@audyxa.com",
  telephone: "+2290195241540",
  areaServed: [
    { "@type": "Country", name: "Bénin" },
    { "@type": "Country", name: "Togo" },
    { "@type": "Country", name: "Côte d'Ivoire" },
    { "@type": "Country", name: "Sénégal" },
    { "@type": "Country", name: "Burkina Faso" },
    { "@type": "Country", name: "Mali" },
    { "@type": "Country", name: "Niger" },
    { "@type": "Country", name: "Guinée" },
    { "@type": "Country", name: "France" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2290195241540",
    email: "contact@audyxa.com",
    contactType: "customer service",
    availableLanguage: "French",
  },
  founder: {
    "@type": "Person",
    name: "Paul Maxime Dossou",
    url: `${SITE_URL}/auteur/paul-maxime-dossou`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} antialiased`}>
      <body className="page-wrapper">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

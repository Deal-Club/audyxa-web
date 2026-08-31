import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Audyxa | Transformation digitale des entreprises",
  description:
    "Audyxa accompagne les entreprises en France et en Afrique francophone avec une approche conseil + services pour transformer les pertes de temps en gains réels.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} antialiased`}>
      <body className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

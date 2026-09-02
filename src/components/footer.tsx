"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES_DETAIL } from "@/lib/services-content";

type NewsletterStatus = "idle" | "submitting" | "success" | "error";

/** Footer du thème Amiso : formulaire newsletter + colonnes de widgets + bas de page. */
export function Footer() {
  const [status, setStatus] = useState<NewsletterStatus>("idle");

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "");
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="main-footer relative bg-[#181818] pt-[30px]">
      <div className="subscribe-form auto-container flex flex-col items-center justify-between gap-6 bg-theme-1 px-[30px] py-8 md:flex-row md:px-[60px]">
        <div className="title-column">
          <h5 className="title flex items-center gap-2 text-white">
            <i className="flaticon-open-envelope text-theme-2" />
            Echangeons sur vos priorites
            <br />
            de transformation digitale
          </h5>
        </div>
        <div className="form-column w-full md:w-auto">
          <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-[400px]">
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              required
              disabled={status === "submitting"}
              className="w-full rounded-l-[10px] border border-white/10 bg-transparent px-5 py-3 text-white placeholder:text-white/50 outline-none focus:border-theme-2 disabled:opacity-60"
            />
            <button
              type="submit"
              aria-label="S'inscrire"
              disabled={status === "submitting"}
              className="theme-btn flex items-center justify-center rounded-r-[10px] bg-theme-2 px-5 text-white transition-colors hover:bg-theme-2-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              <i className={status === "submitting" ? "fa fa-spinner fa-spin" : "fa fa-paper-plane"} />
            </button>
          </form>
          {status === "success" ? (
            <p className="mt-2 max-w-[400px] text-sm font-semibold text-green-400">
              Inscription confirmée, merci !
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-2 max-w-[400px] text-sm font-semibold text-red-400">
              L&apos;inscription a échoué. Réessayez dans un instant.
            </p>
          ) : null}
        </div>
      </div>

      <div className="widgets-section py-[60px]">
        <div className="auto-container grid grid-cols-1 gap-x-8 gap-y-[50px] sm:grid-cols-2 xl:grid-cols-[1.1fr_1fr_1fr_1fr_1fr]">
          <div className="footer-column">
            <div className="footer-widget about-widget">
              <div className="logo mb-[25px]">
                <Link
                  href="/"
                  className="inline-block transition-transform duration-[400ms] ease-[ease] hover:scale-105"
                >
                  <Image src="/images/logo-full-white.png" alt="Audyxa" width={154} height={40} className="h-[40px] w-[154px]" />
                </Link>
              </div>
              <div className="text mb-5 text-[15px] leading-[30px] text-[#8f8f8f]">
                Audyxa accompagne les entreprises qui veulent structurer leur croissance, mieux piloter leurs operations et transformer les pertes de temps en gains concrets.
              </div>
              <div className="rounded-[10px] border border-white/10 px-5 py-4 text-sm leading-7 text-[#8f8f8f]">
                Conseil, automatisation, IA, developpement d&apos;outils metier et accompagnement au deploiement.
              </div>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-widget links-widget">
              <h6 className="widget-title mb-[15px] font-semibold text-white">Navigation</h6>
              <ul className="user-links space-y-[10px] text-[15px] text-[#8f8f8f]">
                {[
                  { label: "Accueil", href: "/" },
                  { label: "A propos", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Méthode", href: "/methode" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[#8f8f8f] hover:text-theme-2">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-widget gallery-widget">
              <h6 className="widget-title mb-[15px] font-semibold text-white">Interventions</h6>
              <ul className="space-y-[10px] text-[15px] leading-7 text-[#8f8f8f]">
                {SERVICES_DETAIL.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-[#8f8f8f] hover:text-theme-2">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-widget links-widget">
              <h6 className="widget-title mb-[15px] font-semibold text-white">Ressources</h6>
              <ul className="user-links space-y-[10px] text-[15px] text-[#8f8f8f]">
                {[
                  { label: "Glossaire", href: "/glossaire" },
                  { label: "Guides pratiques", href: "/guides" },
                  { label: "Comparatifs", href: "/comparatifs" },
                  { label: "Par secteur d'activité", href: "/secteurs" },
                  { label: "Zones d'intervention", href: "/pays" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[#8f8f8f] hover:text-theme-2">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-widget contacts-widget">
              <h6 className="widget-title mb-[15px] font-semibold text-white">Perimetre</h6>
              <div className="text mb-[15px] text-[15px] text-[#8f8f8f]">
                France et Afrique francophone
              </div>
              <ul className="contact-info space-y-[10px] text-[15px] text-[#8f8f8f]">
                <li className="flex items-center gap-2">
                  <i className="fa fa-envelope text-theme-2" />
                  <a href="mailto:contact@audyxa.com" className="text-[#8f8f8f] hover:text-theme-2">contact@audyxa.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa fa-phone-square text-theme-2" />
                  <span>Conseil + execution sur la meme mission</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa fa-map-marker-alt text-theme-2" />
                  <span>Intervention a distance et accompagnement structure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom border-t border-white/10">
        <div className="auto-container">
          <div className="inner-container py-6 text-center">
            <div className="copyright-text text-sm text-[#8f8f8f]">
              © 2026 <Link href="/" className="text-[#8f8f8f] hover:text-theme-2">Audyxa</Link>. Transformation digitale des entreprises.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

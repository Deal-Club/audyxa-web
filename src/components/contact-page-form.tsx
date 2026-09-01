"use client";

import type { FormEvent } from "react";
import { SectionTitle } from "@/components/section-title";
import { useContactForm } from "@/lib/use-contact-form";

/**
 * Champs `.team-contact-form .form-control` : fond blanc (surchargé depuis
 * le blanc-cassé #f4f5f8 par défaut de `.form-control`), bordure fine
 * assortie, texte #686a6f, sans arrondi (aucun border-radius déclaré en
 * source). Hauteur calc(2.25rem + 27px) = 63px pour les champs simples.
 */
const fieldClass =
  "block w-full border border-[#f4f5f8] bg-white px-[30px] py-[14px] text-[0.9rem] text-[#686a6f] outline-none placeholder:text-[#686a6f]";

/**
 * Section `.team-contact-form` de page-contact.html : formulaire de contact
 * complet (nom/email/sujet/téléphone/message), envoyé via /api/contact
 * (Resend) vers contact@audyxa.com.
 */
export function ContactPageForm() {
  const { status, submit } = useContactForm();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    submit({
      name: String(data.get("form_name") ?? ""),
      email: String(data.get("form_email") ?? ""),
      subject: String(data.get("form_subject") ?? ""),
      phone: String(data.get("form_phone") ?? ""),
      message: String(data.get("form_message") ?? ""),
    }).then((result) => {
      if (result === "success") form.reset();
    });
  };

  return (
    <section className="bg-[#eef0f6] pt-[120px] pb-[120px]">
      <div className="auto-container">
        <SectionTitle
          center
          subTitle="Échange stratégique"
          title={
            <>
              Décrivez votre contexte, vos <br /> blocages et vos objectifs
            </>
          }
          text="Plus votre brief est concret, plus nous pouvons cadrer rapidement les bons leviers de transformation."
        />

        <div className="mx-auto w-full sm:w-10/12 lg:w-8/12">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-4 sm:grid-cols-2">
              <input
                name="form_name"
                type="text"
                placeholder="Nom"
                className={fieldClass}
              />
              <input
                name="form_email"
                type="email"
                placeholder="Email"
                required
                className={fieldClass}
              />
              <input
                name="form_subject"
                type="text"
                placeholder="Sujet"
                required
                className={fieldClass}
              />
              <input
                name="form_phone"
                type="text"
                placeholder="Téléphone"
                className={fieldClass}
              />
              <textarea
                name="form_message"
                placeholder="Décrivez votre besoin, vos outils actuels, vos pertes de temps ou le projet à cadrer"
                rows={5}
                required
                className={`${fieldClass} h-[180px] resize-none sm:col-span-2`}
              />

              <div className="flex flex-col items-center gap-[15px] sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative z-0 inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[10px] bg-theme-2 px-[50px] py-[15px] text-base font-extrabold leading-7 text-white transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 -z-10 w-6 rounded-[10px] bg-theme-2-dark transition-[width] duration-300 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:w-full"
                  />
                  <span className="relative z-[2]">
                    {status === "submitting" ? "Envoi en cours..." : "Envoyer la demande"}
                  </span>
                </button>
                {status === "success" ? (
                  <p className="mb-0 text-sm font-semibold text-green-600">
                    Message envoyé. Nous revenons vers vous rapidement.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="mb-0 text-sm font-semibold text-red-600">
                    L&apos;envoi a échoué. Réessayez ou écrivez-nous directement à contact@audyxa.com.
                  </p>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { renderContactEmail } from "@/lib/contact-email-template";

const CONTACT_EMAIL = "contact@audyxa.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante — impossible d'envoyer l'email de contact.");
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email) || !message) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Formulaire Audyxa <contact@audyxa.com>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: subject ? `Nouveau contact : ${subject}` : "Nouvelle demande depuis le site Audyxa",
      html: renderContactEmail({ name, email, phone, subject, message }),
    });

    if (error) {
      console.error("Erreur d'envoi Resend :", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur inattendue lors de l'envoi du formulaire de contact :", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}

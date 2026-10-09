import { NextResponse } from "next/server";
import { renderContactEmail } from "@/lib/contact-email-template";
import { CONTACT_EMAIL, getMailer } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const mailer = getMailer();
  if (!mailer) {
    console.error("SMTP_USER/SMTP_PASS manquantes : impossible d'envoyer l'email de contact.");
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

  try {
    await mailer.sendMail({
      from: `Formulaire Audyxa <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: subject ? `Nouveau contact : ${subject}` : "Nouvelle demande depuis le site Audyxa",
      html: renderContactEmail({ name, email, phone, subject, message }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur inattendue lors de l'envoi du formulaire de contact :", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "contact@audyxa.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante — impossible d'envoyer la notification d'inscription.");
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Newsletter Audyxa <contact@audyxa.com>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: "Nouvelle inscription newsletter",
      html: `<p>Nouvelle inscription à la newsletter depuis le site :</p><p><strong>${escapeHtml(email)}</strong></p>`,
    });

    if (error) {
      console.error("Erreur d'envoi Resend (newsletter) :", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur inattendue lors de l'inscription newsletter :", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}

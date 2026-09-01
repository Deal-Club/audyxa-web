function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const BRAND_RED = "#c8322a";
const BRAND_DARK = "#0f0f0f";
const BODY_TEXT = "#4a4a4a";
const BORDER = "#e6e6e6";
const BG = "#f4f4f2";

/**
 * Template email transactionnel (table-based, styles inline) : compatibilité
 * maximale avec les clients mail (Gmail, Outlook, Apple Mail), pas de
 * dépendance à flexbox/grid ni à une feuille de style externe.
 */
export function renderContactEmail(data: ContactEmailData): string {
  const { name, email, phone, subject, message } = data;

  const fieldRow = (label: string, value: string) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${BORDER};">
        <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND_RED};">
          ${label}
        </p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;color:${BRAND_DARK};font-weight:600;">
          ${value}
        </p>
      </td>
    </tr>`;

  const rows = [
    fieldRow("Nom", escapeHtml(name || "Non renseigné")),
    fieldRow("Email", `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND_DARK};text-decoration:none;">${escapeHtml(email)}</a>`),
  ];
  if (phone) rows.push(fieldRow("Téléphone", escapeHtml(phone)));
  if (subject) rows.push(fieldRow("Sujet", escapeHtml(subject)));

  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nouvelle demande de contact</title>
  </head>
  <body style="margin:0;padding:0;background-color:${BG};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BG};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

            <!-- En-tête -->
            <tr>
              <td style="background-color:${BRAND_DARK};padding:28px 32px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;">
                  Audyxa
                </p>
                <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${BRAND_RED};font-weight:600;letter-spacing:0.04em;text-transform:uppercase;">
                  Nouvelle demande de contact
                </p>
              </td>
            </tr>

            <!-- Corps -->
            <tr>
              <td style="padding:32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rows.join("")}
                </table>

                <div style="margin-top:24px;">
                  <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND_RED};">
                    Message
                  </p>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BG};border-radius:8px;border-left:3px solid ${BRAND_RED};">
                    <tr>
                      <td style="padding:16px 20px;">
                        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:24px;color:${BODY_TEXT};white-space:pre-line;">${escapeHtml(message)}</p>
                      </td>
                    </tr>
                  </table>
                </div>

                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                  <tr>
                    <td style="border-radius:8px;background-color:${BRAND_RED};">
                      <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:12px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">
                        Répondre à ${escapeHtml(name || "ce contact")}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Pied -->
            <tr>
              <td style="padding:20px 32px;background-color:${BG};border-top:1px solid ${BORDER};">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#9a9a9a;">
                  Reçu via le formulaire de contact sur audyxa.com — France et Afrique francophone.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

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

const BRAND_NAVY = "#17398a";
const TEXT = "#1b2433";
const MUTED = "#6b7487";
const BORDER = "#e8ebf1";
const BG = "#f3f5f9";
const LOGO_URL = "https://www.audyxa.com/images/logo-full.png";
const FONT = "Arial,Helvetica,sans-serif";

/**
 * Template email transactionnel (table-based, styles inline) : compatibilité
 * maximale avec les clients mail (Gmail, Outlook, Apple Mail), pas de
 * dépendance à flexbox/grid ni à une feuille de style externe.
 */
export function renderContactEmail(data: ContactEmailData): string {
  const { name, email, phone, subject, message } = data;

  const fieldRow = (label: string, value: string) => `
    <tr>
      <td width="90" valign="top" style="padding:7px 0;font-family:${FONT};font-size:12px;color:${MUTED};">${label}</td>
      <td valign="top" style="padding:7px 0;font-family:${FONT};font-size:14px;line-height:20px;color:${TEXT};font-weight:600;">${value}</td>
    </tr>`;

  const rows = [
    fieldRow("Nom", escapeHtml(name || "Non renseigné")),
    fieldRow("Email", `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND_NAVY};text-decoration:none;">${escapeHtml(email)}</a>`),
  ];
  if (phone) rows.push(fieldRow("Téléphone", `<a href="tel:${escapeHtml(phone)}" style="color:${TEXT};text-decoration:none;">${escapeHtml(phone)}</a>`));
  if (subject) rows.push(fieldRow("Sujet", escapeHtml(subject)));

  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nouvelle demande de contact</title>
  </head>
  <body style="margin:0;padding:0;background-color:${BG};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BG};padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;background-color:#ffffff;border-radius:12px;border:1px solid ${BORDER};overflow:hidden;">

            <!-- En-tête -->
            <tr>
              <td style="padding:20px 28px;border-bottom:3px solid ${BRAND_NAVY};">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td valign="middle">
                      <img src="${LOGO_URL}" alt="Audyxa" width="120" style="display:block;width:120px;height:auto;border:0;" />
                    </td>
                    <td valign="middle" align="right" style="font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND_NAVY};">
                      Nouveau contact
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Corps -->
            <tr>
              <td style="padding:20px 28px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rows.join("")}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 28px 4px;">
                <p style="margin:0 0 6px;font-family:${FONT};font-size:12px;color:${MUTED};">Message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BG};border-radius:8px;">
                  <tr>
                    <td style="padding:14px 16px;">
                      <p style="margin:0;font-family:${FONT};font-size:14px;line-height:22px;color:${TEXT};white-space:pre-line;">${escapeHtml(message)}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 28px 24px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border-radius:8px;background-color:${BRAND_NAVY};">
                      <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:10px 22px;font-family:${FONT};font-size:13px;font-weight:700;color:#ffffff;text-decoration:none;">
                        Répondre à ${escapeHtml(name || "ce contact")}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Pied -->
            <tr>
              <td style="padding:14px 28px;background-color:${BG};border-top:1px solid ${BORDER};">
                <p style="margin:0;font-family:${FONT};font-size:11px;line-height:16px;color:${MUTED};">
                  Reçu via le formulaire de contact sur <a href="https://www.audyxa.com" style="color:${MUTED};">audyxa.com</a>
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

#!/usr/bin/env node
/**
 * Envoie des URLs à IndexNow (Bing et partenaires) pour accélérer leur prise
 * en compte après un déploiement.
 *
 * Par défaut : SIMULATION (affiche ce qui serait envoyé, n'envoie rien).
 * Pour envoyer pour de vrai, ajouter --send.
 *
 *   npm run indexnow                          # simulation, toutes les URLs du sitemap
 *   npm run indexnow -- --send                # envoi de toutes les URLs du sitemap
 *   npm run indexnow -- --send /guides/x /faq # envoi de quelques chemins précis
 *
 * La clé est publique par conception : elle doit être servie à la racine du
 * site (public/<clé>.txt) pour prouver la propriété du domaine.
 */
const HOST = "www.audyxa.com";
const KEY = "d78b11e0018a739c8cc892842a75b68a";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS_PER_REQUEST = 10000;

const args = process.argv.slice(2);
const send = args.includes("--send");
const paths = args.filter((a) => a.startsWith("/"));

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap inaccessible (${res.status}) : ${SITEMAP_URL}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

async function assertKeyIsLive() {
  const res = await fetch(KEY_LOCATION);
  const body = (await res.text()).trim();
  if (!res.ok || body !== KEY) {
    throw new Error(
      `Fichier clé introuvable ou incorrect à ${KEY_LOCATION} (statut ${res.status}). ` +
        "Déployer d'abord le site avec le fichier public/<clé>.txt."
    );
  }
}

const urlList = paths.length > 0 ? paths.map((p) => `https://${HOST}${p}`) : await urlsFromSitemap();
console.log(`${urlList.length} URL(s) concernée(s) sur ${HOST}.`);

if (!send) {
  console.log("Simulation : rien n'est envoyé. Exemples :");
  urlList.slice(0, 5).forEach((u) => console.log(`  ${u}`));
  console.log("Ajouter --send pour envoyer à IndexNow.");
  process.exit(0);
}

await assertKeyIsLive();

for (let i = 0; i < urlList.length; i += MAX_URLS_PER_REQUEST) {
  const batch = urlList.slice(i, i + MAX_URLS_PER_REQUEST);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch }),
  });
  // 200 = reçu, 202 = reçu, clé en cours de validation. Autre = erreur à lire.
  console.log(`Lot ${i / MAX_URLS_PER_REQUEST + 1} (${batch.length} URLs) : HTTP ${res.status}`);
  if (res.status !== 200 && res.status !== 202) {
    console.error(await res.text());
    process.exit(1);
  }
}

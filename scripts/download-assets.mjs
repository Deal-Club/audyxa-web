#!/usr/bin/env node
// Télécharge les assets réels du site source vers public/.
// Politique : on ne télécharge que ce qui répond 200 sur le site source.
// Les images décoratives manquantes (images/icons/*, main-slider/bg-pattern*)
// sont en 404 sur le site source lui-même — on ne les invente pas, on les
// exclut, exactement comme elles apparaissent (absentes) sur le site en ligne.

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_URL = "https://www.h-k.com.hk/demo/k/";
const OUT_DIR = path.join(process.cwd(), "public");
const BATCH_SIZE = 4;

// [cheminSource, cheminSortie] — cheminSortie relatif à public/
const ASSETS = [
  ["images/logo.png", "images/logo.png"],
  ["images/logo-2.png", "images/logo-2.png"],
  ["images/favicon.png", "images/favicon.png"],
  ["images/main-slider/1.jpg", "images/main-slider/1.jpg"],
  ["images/main-slider/2.jpg", "images/main-slider/2.jpg"],
  ["images/background/2.jpg", "images/background/2.jpg"],
  ["images/resource/about-1.jpg", "images/resource/about-1.jpg"],
  ["images/resource/about-2.jpg", "images/resource/about-2.jpg"],
  ["images/resource/benefit-1.jpg", "images/resource/benefit-1.jpg"],
  ["images/resource/benefit-2.jpg", "images/resource/benefit-2.jpg"],
  ["images/resource/benefit-3.jpg", "images/resource/benefit-3.jpg"],
  ["images/resource/client.png", "images/resource/client.png"],
  ["images/resource/contact.jpg", "images/resource/contact.jpg"],
  ["images/resource/faq.jpg", "images/resource/faq.jpg"],
  ["images/resource/fav-icon.png", "images/resource/fav-icon.png"],
  ["images/resource/image-2.jpg", "images/resource/image-2.jpg"],
  ["images/resource/news-1.jpg", "images/resource/news-1.jpg"],
  ["images/resource/news-2.jpg", "images/resource/news-2.jpg"],
  ["images/resource/news-3.jpg", "images/resource/news-3.jpg"],
  ["images/resource/project-1.jpg", "images/resource/project-1.jpg"],
  ["images/resource/project-2.jpg", "images/resource/project-2.jpg"],
  ["images/resource/project-3.jpg", "images/resource/project-3.jpg"],
  ["images/resource/project-4.jpg", "images/resource/project-4.jpg"],
  ["images/resource/project-thumb-1.jpg", "images/resource/project-thumb-1.jpg"],
  ["images/resource/project-thumb-2.jpg", "images/resource/project-thumb-2.jpg"],
  ["images/resource/project-thumb-3.jpg", "images/resource/project-thumb-3.jpg"],
  ["images/resource/project-thumb-4.jpg", "images/resource/project-thumb-4.jpg"],
  ["images/resource/project-thumb-5.jpg", "images/resource/project-thumb-5.jpg"],
  ["images/resource/project-thumb-6.jpg", "images/resource/project-thumb-6.jpg"],
  ["images/resource/testi-1.jpg", "images/resource/testi-1.jpg"],
];

async function downloadOne([src, out]) {
  const url = BASE_URL + src;
  const dest = path.join(OUT_DIR, out);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`SKIP (${res.status}) ${src}`);
      return { src, ok: false };
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`OK   ${out} (${buf.length} o)`);
    return { src, ok: true };
  } catch (err) {
    console.warn(`FAIL ${src}: ${err.message}`);
    return { src, ok: false };
  }
}

async function run() {
  const results = [];
  for (let i = 0; i < ASSETS.length; i += BATCH_SIZE) {
    const batch = ASSETS.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(batch.map(downloadOne));
    results.push(...batchResults);
  }
  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} assets téléchargés.`);
  if (failed.length) {
    console.log("Échecs :", failed.map((f) => f.src).join(", "));
  }
}

run();

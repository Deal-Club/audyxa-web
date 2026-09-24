import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Audyxa, cabinet de conseil en transformation digitale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Asset local, indépendant des données de requête : lu une seule fois au
// niveau du module (voir la doc Next.js "Predictable values").
const logoData = await readFile(join(process.cwd(), "public/images/logo-full.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

/**
 * Image Open Graph par défaut (fallback pour les routes sans opengraph-image
 * propre). Des images dédiées existent pour /methode/[slug], /services/[slug]
 * et /histoires/[slug] : voir ces dossiers.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0f0f",
          padding: "80px",
        }}
      >
        <img src={logoSrc} width={420} height={109} style={{ objectFit: "contain" }} />
        <div
          style={{
            marginTop: 48,
            fontSize: 34,
            color: "#f3f3f3",
            textAlign: "center",
            maxWidth: 880,
          }}
        >
          Cabinet de conseil en transformation digitale, Afrique de l&apos;Ouest
        </div>
        <div
          style={{
            marginTop: 28,
            width: 120,
            height: 6,
            background: "#ff3838",
            borderRadius: 3,
          }}
        />
      </div>
    ),
    { ...size }
  );
}

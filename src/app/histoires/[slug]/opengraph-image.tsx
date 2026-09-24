import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getHistoire } from "@/lib/histoires-content";

export const alt = "Histoire de transformation digitale, Audyxa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public/images/logo-full.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const histoire = getHistoire(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f0f0f",
          padding: "70px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logoSrc} width={220} height={57} style={{ objectFit: "contain" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, color: "#ff3838", fontWeight: 700, marginBottom: 20 }}>
            {histoire ? `Histoires · ${histoire.company}` : "Histoires de transformation digitale"}
          </div>
          <div
            style={{
              fontSize: 48,
              color: "#ffffff",
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            {histoire?.title ?? "Histoires de transformation digitale"}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

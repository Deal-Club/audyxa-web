import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getServiceDetail } from "@/lib/services-content";

export const alt = "Service Audyxa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public/images/logo-full.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

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
            Services Audyxa
          </div>
          <div
            style={{
              fontSize: 54,
              color: "#ffffff",
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            {service?.title ?? "Nos services"}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";
import { SITE } from "@/lib/seo";

export const runtime = "edge";
export const alt = `${SITE.fullName} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 25% 20%, #1f4d4a 0%, #0a0a0a 55%, #050505 100%)",
          color: "#ededed",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#6dbfb8",
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>
            prasanbora.app
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span
            style={{
              fontSize: 28,
              color: "#6dbfb8",
              textTransform: "uppercase",
              letterSpacing: 4,
              fontWeight: 600,
            }}
          >
            {SITE.role}
          </span>
          <span
            style={{
              fontSize: 110,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            {SITE.fullName}
          </span>
          <span
            style={{
              fontSize: 32,
              color: "#a8a8a8",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Building web, mobile, and AI products with Next.js, React Native, and TypeScript.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#a8a8a8",
          }}
        >
          <span>Portfolio · Projects · Work · Tech Stack</span>
          <span>Based in India</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

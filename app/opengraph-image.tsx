import { ImageResponse } from "next/og";

export const alt = "Ayush Pandey · Mobile & Frontend Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C0D10",
          color: "#F2F2EE",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.22em",
              fontWeight: 600,
            }}
          >
            AYUSH
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#D6FF3F",
              letterSpacing: "0.16em",
            }}
          >
            SDE II · MUMBAI
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Ayush Pandey
          </div>
          <div style={{ fontSize: 36, color: "#8A8F98" }}>
            Mobile & Frontend Engineer
          </div>
          <div style={{ fontSize: 24, color: "#8A8F98", maxWidth: 820 }}>
            React Native, Next.js, and TypeScript. Trading, gaming, and
            healthcare products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 20,
            color: "#8A8F98",
          }}
        >
          <span>6 years</span>
          <span>·</span>
          <span>New Architecture</span>
          <span>·</span>
          <span>4s → 200ms startup</span>
          <span>·</span>
          <span>~30% smaller app</span>
        </div>
      </div>
    ),
    size,
  );
}

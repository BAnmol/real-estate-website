import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "linear-gradient(160deg, #123c2d 0%, #0a1a14 60%, #0e0d0b 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            width: 130,
            height: 130,
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #123c2d, #0a1a14)",
            borderRadius: "50%",
            marginBottom: 34,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 20,
              borderRadius: "50%",
              border: "2px solid rgba(184,134,63,0.4)",
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 600,
              color: "#c99a56",
            }}
          >
            A
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 120, color: "#b98a4e" }}>
          ARIS
          <span style={{ color: "#fffdf9" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(255,253,249,0.7)",
          }}
        >
          Real Estate, Rendered in Reality
        </div>
      </div>
    ),
    size
  );
}

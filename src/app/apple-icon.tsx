import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #123c2d, #0a1a14)",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 27,
            borderRadius: "50%",
            border: "2px solid rgba(184,134,63,0.4)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 600,
            fontFamily: "Georgia, serif",
            color: "#c99a56",
          }}
        >
          A
        </div>
      </div>
    ),
    size
  );
}

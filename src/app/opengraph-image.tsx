import { ImageResponse } from "next/og";

export const alt = "Sergio Gómez Martín — AI / ML Engineer";
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
          alignItems: "center",
          background: "#fafaf9",
          color: "#0c0a09",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px 88px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#0f766e",
            height: "10px",
            left: "0",
            position: "absolute",
            top: "0",
            width: "100%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#0f766e",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Madrid, Spain
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginTop: 34,
              maxWidth: "900px",
            }}
          >
            Sergio Gómez Martín
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              marginTop: 30,
            }}
          >
            AI / ML Engineer
          </div>
          <div
            style={{
              color: "#57534e",
              display: "flex",
              fontSize: 25,
              lineHeight: 1.45,
              marginTop: 24,
              maxWidth: "880px",
            }}
          >
            LLM agent systems · Applied AI · Scalable data pipelines
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            border: "2px solid #d6d3d1",
            borderRadius: "999px",
            bottom: "72px",
            display: "flex",
            height: "72px",
            justifyContent: "center",
            position: "absolute",
            right: "88px",
            width: "72px",
          }}
        >
          <div
            style={{
              background: "#0f766e",
              borderRadius: "999px",
              display: "flex",
              height: "18px",
              width: "18px",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}

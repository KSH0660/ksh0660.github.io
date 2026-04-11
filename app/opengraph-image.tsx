import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Sunho Kim";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#FFFFF0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              backgroundColor: "#111111",
            }}
          />
          <div
            style={{
              width: 230,
              height: 120,
              borderRadius: "115px 115px 0 0",
              backgroundColor: "#111111",
              marginTop: 24,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}

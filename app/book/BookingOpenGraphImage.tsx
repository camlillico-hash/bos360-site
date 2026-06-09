import { ImageResponse } from "next/og";
import type { BookingDefinition } from "@/lib/booking";

export const bookingOgImageSize = {
  width: 1200,
  height: 630,
};

export const bookingOgImageContentType = "image/png";

export default function BookingOpenGraphImage({
  booking,
}: {
  booking: BookingDefinition;
}) {
  const heading = booking.title.replace(" | Cam Lillico", "");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top right, rgba(237,125,49,0.28), transparent 28%), linear-gradient(135deg, #0b1220 0%, #111827 45%, #1f2937 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(251, 191, 36, 0.22)",
            borderRadius: 32,
            padding: "42px 48px",
            background: "linear-gradient(180deg, rgba(15,23,42,0.82), rgba(2,6,23,0.92))",
            boxShadow: "0 24px 80px rgba(2, 6, 23, 0.45)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 14,
                  fontSize: 24,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#fdba74",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    height: 14,
                    width: 14,
                    borderRadius: 999,
                    background: "#ed7d31",
                    boxShadow: "0 0 28px rgba(237, 125, 49, 0.7)",
                  }}
                />
                Cam Lillico
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  maxWidth: 860,
                }}
              >
                <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.02 }}>
                  {heading}
                </div>
                <div
                  style={{
                    fontSize: 30,
                    lineHeight: 1.3,
                    color: "rgba(226, 232, 240, 0.9)",
                  }}
                >
                  {booking.description}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: 24,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 20px",
                  borderRadius: 999,
                  background: "rgba(237,125,49,0.12)",
                  color: "#fed7aa",
                  fontSize: 24,
                }}
              >
                {booking.durationLabel}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 8,
                  color: "rgba(226, 232, 240, 0.86)",
                  fontSize: 24,
                }}
              >
                <div>Vision. Momentum. Health.</div>
                <div style={{ color: "rgba(148, 163, 184, 0.95)" }}>
                  Practical coaching for growth-stage teams
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bookingOgImageSize,
  );
}

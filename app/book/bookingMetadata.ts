import type { Metadata } from "next";
import { headers } from "next/headers";
import type { BookingDefinition } from "@/lib/booking";

async function getMetadataBase() {
  const headerList = await headers();
  const forwardedHost = headerList.get("x-forwarded-host");
  const host = forwardedHost || headerList.get("host");
  const proto =
    headerList.get("x-forwarded-proto") || (host?.includes("localhost") ? "http" : "https");

  return host ? new URL(`${proto}://${host}`) : undefined;
}

export async function buildBookingMetadata({
  booking,
  canonicalPath,
  openGraphImagePath,
}: {
  booking: BookingDefinition;
  canonicalPath: string;
  openGraphImagePath: string;
}): Promise<Metadata> {
  const metadataBase = await getMetadataBase();

  return {
    metadataBase,
    title: booking.title,
    description: booking.description,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: booking.title,
      description: booking.description,
      url: canonicalPath,
      type: "website",
      siteName: "Cam Lillico Coaching",
      images: [
        {
          url: openGraphImagePath,
          width: 1200,
          height: 630,
          alt: booking.title.replace(" | Cam Lillico", ""),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: booking.title,
      description: booking.description,
      images: [openGraphImagePath],
    },
  };
}

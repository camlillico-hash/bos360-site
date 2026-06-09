import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingRedirectPage from "../BookingRedirectPage";
import { buildBookingMetadata } from "../bookingMetadata";
import {
  getBookingDefinitionBySlug,
  getBookingOpenGraphImagePath,
  getBookingPath,
  listBookingDefinitions,
} from "@/lib/booking";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const booking = getBookingDefinitionBySlug(slug);

  if (!booking) {
    notFound();
  }

  return buildBookingMetadata({
    booking,
    canonicalPath: getBookingPath(booking.key, { canonical: true }),
    openGraphImagePath: getBookingOpenGraphImagePath(booking.key, { canonical: true }),
  });
}

export function generateStaticParams() {
  return listBookingDefinitions().map((booking) => ({
    slug: booking.slug,
  }));
}

export default async function BookingSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const booking = getBookingDefinitionBySlug(slug);

  if (!booking) {
    notFound();
  }

  return <BookingRedirectPage booking={booking} />;
}

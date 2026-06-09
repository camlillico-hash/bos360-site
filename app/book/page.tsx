import type { Metadata } from "next";
import BookingRedirectPage from "./BookingRedirectPage";
import { buildBookingMetadata } from "./bookingMetadata";
import {
  getBookingOpenGraphImagePath,
  getBookingPath,
  getDefaultBookingDefinition,
} from "@/lib/booking";

const booking = getDefaultBookingDefinition();

export async function generateMetadata(): Promise<Metadata> {
  return buildBookingMetadata({
    booking,
    canonicalPath: getBookingPath(booking.key),
    openGraphImagePath: getBookingOpenGraphImagePath(booking.key),
  });
}

export default function BookPage() {
  return <BookingRedirectPage booking={booking} />;
}

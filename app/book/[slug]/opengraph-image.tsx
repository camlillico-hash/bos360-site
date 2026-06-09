import { notFound } from "next/navigation";
import BookingOpenGraphImage, {
  bookingOgImageContentType as contentType,
  bookingOgImageSize as size,
} from "../BookingOpenGraphImage";
import { getBookingDefinitionBySlug } from "@/lib/booking";

export { contentType, size };

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const booking = getBookingDefinitionBySlug(slug);

  if (!booking) {
    notFound();
  }

  return BookingOpenGraphImage({ booking });
}

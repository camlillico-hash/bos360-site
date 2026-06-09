import BookingOpenGraphImage, {
  bookingOgImageContentType as contentType,
  bookingOgImageSize as size,
} from "./BookingOpenGraphImage";
import { getDefaultBookingDefinition } from "@/lib/booking";

const booking = getDefaultBookingDefinition();

export { contentType, size };

export default function OpenGraphImage() {
  return BookingOpenGraphImage({ booking });
}

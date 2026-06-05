export const BOOKING_REDIRECT_PATH = "/book";

export const DEFAULT_BOOKING_TARGET_URL = "https://calendar.app.google/DyjWgFksVWqBURJS6";

export const BOOKING_PAGE_TITLE = "Book an Intro Call | Cam Lillico";

export const BOOKING_PAGE_DESCRIPTION =
  "Schedule an intro call with Cam Lillico to see whether BOS360 is the right fit for your leadership team.";

export function getBookingTargetUrl() {
  // Set BOOKING_TARGET_URL to the live scheduling provider URL without changing public-facing links.
  const configuredUrl = process.env.BOOKING_TARGET_URL?.trim();
  return configuredUrl || DEFAULT_BOOKING_TARGET_URL;
}

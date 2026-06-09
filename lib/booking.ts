export const BOOKING_REDIRECT_PATH = "/book";
export const DEFAULT_BOOKING_KEY = "bos360_warm_intro";

export const DEFAULT_BOOKING_TARGET_URL = "https://calendar.app.google/DyjWgFksVWqBURJS6";

export type BookingKey =
  | "casual_connect"
  | "bos360_warm_intro"
  | "bos360_connector"
  | "discovery_call";

export type BookingDefinition = {
  key: BookingKey;
  slug: string;
  title: string;
  description: string;
  durationLabel: string;
  envVarNames: readonly string[];
  fallbackUrl?: string;
};

export const BOOKING_DEFINITIONS: readonly BookingDefinition[] = [
  {
    key: "casual_connect",
    slug: "casual-connect",
    title: "Casual Connect | Cam Lillico",
    description:
      "Book a 30-minute casual connect with Cam Lillico.",
    durationLabel: "30-minute casual connect",
    envVarNames: ["BOOKING_CASUAL_CONNECT_URL"],
  },
  {
    key: "bos360_warm_intro",
    slug: "bos360-warm-intro",
    title: "BOS360 Warm Intro | Cam Lillico",
    description:
      "Book a 30-minute BOS360 warm intro with Cam Lillico to explore fit for your leadership team.",
    durationLabel: "30-minute BOS360 warm intro",
    envVarNames: ["BOOKING_BOS360_WARM_INTRO_URL", "BOOKING_TARGET_URL"],
    fallbackUrl: DEFAULT_BOOKING_TARGET_URL,
  },
  {
    key: "bos360_connector",
    slug: "bos360-connector",
    title: "BOS360 Connector Call | Cam Lillico",
    description:
      "Book a 45-minute BOS360 connect with Cam Lillico and a connector.",
    durationLabel: "45-minute BOS360 connector call",
    envVarNames: ["BOOKING_BOS360_CONNECTOR_URL"],
  },
  {
    key: "discovery_call",
    slug: "discovery-call",
    title: "BOS360 Discovery Call | Cam Lillico",
    description:
      "Book a 90-minute BOS360 discovery call with Cam Lillico.",
    durationLabel: "90-minute discovery call",
    envVarNames: ["BOOKING_DISCOVERY_CALL_URL"],
  },
] as const;

const BOOKINGS_BY_KEY = new Map(
  BOOKING_DEFINITIONS.map((booking) => [booking.key, booking]),
);

const BOOKINGS_BY_SLUG = new Map(
  BOOKING_DEFINITIONS.map((booking) => [booking.slug, booking]),
);

export const BOOKING_REDIRECT_PATHS = {
  casualConnect: `${BOOKING_REDIRECT_PATH}/casual-connect`,
  warmIntro: BOOKING_REDIRECT_PATH,
  warmIntroCanonical: `${BOOKING_REDIRECT_PATH}/bos360-warm-intro`,
  connector: `${BOOKING_REDIRECT_PATH}/bos360-connector`,
  discovery: `${BOOKING_REDIRECT_PATH}/discovery-call`,
} as const;

export const BOOKING_PAGE_TITLE =
  BOOKINGS_BY_KEY.get(DEFAULT_BOOKING_KEY)?.title || "Book an Intro Call | Cam Lillico";

export const BOOKING_PAGE_DESCRIPTION =
  BOOKINGS_BY_KEY.get(DEFAULT_BOOKING_KEY)?.description ||
  "Schedule an intro call with Cam Lillico to see whether BOS360 is the right fit for your leadership team.";

export function listBookingDefinitions() {
  return [...BOOKING_DEFINITIONS];
}

export function getDefaultBookingDefinition() {
  return getBookingDefinitionByKey(DEFAULT_BOOKING_KEY);
}

export function getBookingDefinitionByKey(key: BookingKey) {
  const booking = BOOKINGS_BY_KEY.get(key);

  if (!booking) {
    throw new Error(`Unknown booking key: ${key}`);
  }

  return booking;
}

export function getBookingDefinitionBySlug(slug: string) {
  return BOOKINGS_BY_SLUG.get(slug) || null;
}

export function getBookingPath(key: BookingKey, options?: { canonical?: boolean }) {
  const booking = getBookingDefinitionByKey(key);
  const canonical = options?.canonical ?? false;

  if (booking.key === DEFAULT_BOOKING_KEY && !canonical) {
    return BOOKING_REDIRECT_PATH;
  }

  return `${BOOKING_REDIRECT_PATH}/${booking.slug}`;
}

export function getBookingOpenGraphImagePath(key: BookingKey, options?: { canonical?: boolean }) {
  return `${getBookingPath(key, options)}/opengraph-image`;
}

function getFirstConfiguredUrl(envVarNames: readonly string[]) {
  for (const envVarName of envVarNames) {
    const configuredUrl = process.env[envVarName]?.trim();

    if (configuredUrl) {
      return configuredUrl;
    }
  }

  return null;
}

export function getBookingTargetUrl(key: BookingKey) {
  const booking = getBookingDefinitionByKey(key);
  return getFirstConfiguredUrl(booking.envVarNames) || booking.fallbackUrl || null;
}

export function getBookingTargetConfig(key: BookingKey) {
  const booking = getBookingDefinitionByKey(key);
  const configuredUrl = getFirstConfiguredUrl(booking.envVarNames);

  return {
    booking,
    targetUrl: configuredUrl || booking.fallbackUrl || null,
    isConfigured: Boolean(configuredUrl),
  };
}

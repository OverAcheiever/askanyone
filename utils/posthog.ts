import posthog, { PostHog } from "posthog-js";

export default posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: "https://app.posthog.com",
}) as PostHog;

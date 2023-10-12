import posthog, { PostHog } from "posthog-js";

export default posthog.init(process.env.POSTHOG!, {
  api_host: "https://app.posthog.com",
}) as PostHog;

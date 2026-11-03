// Type-safe Google Analytics 4 utility
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Tracks a custom event in Google Analytics 4.
 * Safely no-ops in local development if no measurement ID is configured.
 */
export function trackEvent(event: GTagEvent) {
  if (typeof window === "undefined" || !window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  const { action, ...rest } = event;
  window.gtag("event", action, rest);
}

// Pre-defined event helpers
export function trackPageView(url: string) {
  trackEvent({
    action: "page_view",
    page_location: url,
    page_title: typeof document !== "undefined" ? document.title : "",
  });
}

export function trackProjectView(projectSlug: string, projectTitle: string) {
  trackEvent({
    action: "project_view",
    project_slug: projectSlug,
    project_title: projectTitle,
  });
}

export function trackOutboundClick(platform: "github" | "linkedin" | "x" | "email" | "calendar", targetUrl: string) {
  trackEvent({
    action: `${platform}_click`,
    category: "outbound_navigation",
    label: targetUrl,
  });
}

export function trackResumeDownload(format: "pdf" | "view") {
  trackEvent({
    action: "resume_download",
    category: "resume",
    label: format,
  });
}


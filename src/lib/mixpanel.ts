import mixpanel from 'mixpanel-browser';

/** clicks-site project — US data residency */
const MIXPANEL_US_API_HOST = 'https://api.mixpanel.com';

let initialized = false;

export interface MixpanelPageContext {
  locale?: string;
  pagePath?: string;
  pageTitle?: string;
}

export function initMixpanel(page?: MixpanelPageContext): void {
  const token = import.meta.env.PUBLIC_MIXPANEL_TOKEN;
  if (!token || typeof window === 'undefined' || initialized) return;

  mixpanel.init(token, {
    api_host: MIXPANEL_US_API_HOST,
    debug: import.meta.env.DEV,
    track_pageview: true,
    persistence: 'localStorage',
    autocapture: {
      click: true,
      submit: true,
    },
  });

  mixpanel.register({
    site: 'clicks-site',
    ...(page?.locale ? { locale: page.locale } : {}),
  });

  initialized = true;
}

export function trackEvent(name: string, props?: Record<string, unknown>): void {
  if (!initialized) return;
  mixpanel.track(name, props);
}

export { mixpanel };

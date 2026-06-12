/**
 * Site-wide constants for Clicks Strategic Ecosystems.
 * Single source of truth for contact + brand details (PRD §8).
 * Import what you need: `import { PHONE, BOOKING_URL } from '@/config';`
 */

export const COMPANY_NAME = 'Clicks Strategic Ecosystems';
export const COMPANY_NAME_HE = 'קליקס — פתרונות monday.com לארגונים';

export const PHONE = '054-694-5131';
/** E.164 form for tel: links */
export const PHONE_E164 = '+972546945131';
export const WHATSAPP = 'https://wa.me/972546945131';

export const EMAIL_SAPIR = 'sapir@clickcse.com';
export const EMAIL_AMIT = 'amit@clickcse.com';

export const BOOKING_URL = 'https://calendar.app.google/4fhrkmQYgUPnKJt87';

/** עוסק מורשה / licensed-dealer number (footer procurement line) */
export const VAT = '211698568';

export const DOMAIN = 'clickcse.com';
export const SITE_URL = 'https://clickcse.com';

/** Google Search Console HTML tag verification (set PUBLIC_GOOGLE_SITE_VERIFICATION in env). */
export const GOOGLE_SITE_VERIFICATION = import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ?? '';

/** Company LinkedIn (optional); individual founder URLs live in src/data/founders.ts */
export const LINKEDIN_URL = '';

export const FOUNDER_LINKEDIN = {
  sapir: 'https://www.linkedin.com/in/sapir-hassidim-73805b342/',
  amit: 'https://www.linkedin.com/in/amit-aizenkot-a84730185/',
} as const;

export const SOCIAL = {
  linkedin: LINKEDIN_URL,
} as const;

/** Alt for hero monday.com Certified Partner badge (src/assets/monday-partner-badge.png). */
export const MONDAY_PARTNER_BADGE_ALT = 'monday.com Certified Partner';

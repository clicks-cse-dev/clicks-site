/**
 * Client logos for TrustBand (PRD §7.3). Assets require publication consent.
 */
import type { ImageMetadata } from 'astro';
import bedouinAuthority from '../assets/clients/client-bedouin-authority.png';
import galileeBusinessHome from '../assets/clients/client-galilee-business-home.jpg';
import eshkolGalilMizrahi from '../assets/clients/client-eshkol-galil-mizrahi.png';
import civix from '../assets/clients/client-civix.png';
import mifalsiNativ from '../assets/clients/client-mifalsi-nativ.png';
import type { Locale } from '../i18n';

export type ClientLogo = {
  id: string;
  src: ImageMetadata;
  alt: Record<Locale, string>;
  /** Wider marks need more horizontal room in the grid tile */
  wide?: boolean;
};

export const clientLogos: ClientLogo[] = [
  {
    id: 'bedouin-authority',
    src: bedouinAuthority,
    alt: {
      he: 'הרשות לפיתוח והתיישבות הבדואים בנגב',
      en: 'Authority for Development and Settlement of the Bedouin in the Negev',
    },
  },
  {
    id: 'galilee-business-home',
    src: galileeBusinessHome,
    alt: {
      he: 'הבית לעסקים — מקדמים עסקים בגליל',
      en: 'The Home for Businesses — Promoting businesses in the Galilee',
    },
    wide: true,
  },
  {
    id: 'eshkol-galil-mizrahi',
    src: eshkolGalilMizrahi,
    alt: {
      he: 'אשכול גליל מזרחי',
      en: 'Eastern Galilee Cluster',
    },
  },
  {
    id: 'civix',
    src: civix,
    alt: {
      he: 'civix — חדשנות במגזר הציבורי',
      en: 'civix — Innovation in the public sector',
    },
  },
  {
    id: 'mifalsi-nativ',
    src: mifalsiNativ,
    alt: {
      he: 'מפלסי נתיב',
      en: 'Mifalsi Nativ',
    },
  },
];

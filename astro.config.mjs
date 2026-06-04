import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://clickcse.com',
  integrations: [react(), sitemap()],
  redirects: {
    '/blog': '/cases',
    '/en/blog': '/en/cases',
    '/cases/hashomer-haatzair': '/cases/crm-360-service-year',
    '/en/cases/hashomer-haatzair': '/en/cases/crm-360-service-year',
    '/blog/galilee-business-operations-platform': '/cases/regional-business-operations-platform',
    '/en/blog/galilee-business-operations-platform':
      '/en/cases/regional-business-operations-platform',
    '/blog/crm-360-service-year': '/cases/crm-360-service-year',
    '/blog/regional-business-operations-platform': '/cases/regional-business-operations-platform',
    '/blog/volunteer-placement-crm': '/cases/volunteer-placement-crm',
    '/blog/regional-tourism-permits-crm': '/cases/regional-tourism-permits-crm',
    '/en/blog/crm-360-service-year': '/en/cases/crm-360-service-year',
    '/en/blog/regional-business-operations-platform':
      '/en/cases/regional-business-operations-platform',
    '/en/blog/volunteer-placement-crm': '/en/cases/volunteer-placement-crm',
    '/en/blog/regional-tourism-permits-crm': '/en/cases/regional-tourism-permits-crm',
    '/products/flowgram': '/services/flowgram',
    '/products/clicks-tsm': '/services/clicks-tsm',
    '/products/crm-connections': '/services/crm-connections',
    '/products/clicks-solutions': '/services/clicks-solutions',
    '/en/products/flowgram': '/en/services/flowgram',
    '/en/products/clicks-tsm': '/en/services/clicks-tsm',
    '/en/products/crm-connections': '/en/services/crm-connections',
    '/en/products/clicks-solutions': '/en/services/clicks-solutions',
    '/solutions/monday-ecosystems': '/products/clicks-deploy-ready',
    '/en/solutions/monday-ecosystems': '/en/products/clicks-deploy-ready',
    '/contact': 'https://calendar.app.google/4fhrkmQYgUPnKJt87',
    '/en/contact': 'https://calendar.app.google/4fhrkmQYgUPnKJt87',
    '/contact/': 'https://calendar.app.google/4fhrkmQYgUPnKJt87',
    '/en/contact/': 'https://calendar.app.google/4fhrkmQYgUPnKJt87',
  },
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

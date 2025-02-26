import {getPathname, routing} from '@/i18n/routing';

const host = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default function sitemap() {
  // Adapt this as necessary
  return [...getEntries('/')];
}

function getEntries(href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      )
    }
  }));
}

function getUrl(href, locale) {
  const pathname = getPathname({locale, href});
  return host + pathname;
}

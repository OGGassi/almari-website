/** @type {import('next-i18next').UserConfig} */
const config = {
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
    localeDetection: true,
  },
  defaultNS: 'common',
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

export default config;
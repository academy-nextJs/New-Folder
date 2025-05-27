import {defineRouting} from 'next-intl/routing';
 
export const directionMap = {
  en: 'ltr',
  fa: 'rtl'
} as const;

export const routing = defineRouting({
  locales: ['en', 'fa'],
  defaultLocale: 'en'
});
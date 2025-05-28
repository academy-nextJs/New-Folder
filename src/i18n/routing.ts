import {defineRouting} from 'next-intl/routing';
 
export const directionMap = {
  en: 'ltr',
  fa: 'rtl',
  ar: 'rtl'
} as const;

export const locales = ['en', 'fa', 'ar']

export const routing = defineRouting({
  locales: locales,
  defaultLocale: 'fa'
});
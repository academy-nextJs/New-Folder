import {defineRouting} from 'next-intl/routing';
export const defaultLocale = 'fa'

export const routing = defineRouting({
  locales: ['en', 'fa'],
  defaultLocale: 'en'
});
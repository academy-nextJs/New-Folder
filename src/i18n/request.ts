/* eslint-disable */

import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { locales, routing } from './routing';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: {
      landing: (await import(`../../messages/${locale}/landing.json`)).default,
      common: (await import(`../../messages/${locale}/common.json`)).default,
    }
  };
});
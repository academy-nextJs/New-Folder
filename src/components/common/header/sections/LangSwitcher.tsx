'use client';

import { useRouter, usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLangUseSelection = (newLocale: string) => {
    const newPathname = pathname.replace(
      new RegExp(`^/(${routing.locales.join('|')})`),
      `/${newLocale}`
    );

    router.replace(newPathname);
  };

  return (
    <div className="flex gap-4">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => changeLangUseSelection(locale)}
          className={locale === currentLocale ? 'font-bold text-blue-600' : ''}
        >
          {locale === 'fa' ? 'فارسی' : 'English'}
        </button>
      ))}
    </div>
  );
}

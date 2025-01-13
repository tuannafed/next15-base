'use client';

import { useLocale } from 'next-intl';

import constants from '@/constants';
import { Link } from '@/i18n/routing';

export function MainNav() {
  const currentLang = useLocale();

  return (
    <nav className="flex gap-6">
      <Link
        href={constants.routePages.public.ABOUT}
        className="flex items-center text-sm font-medium text-muted-foreground"
        locale={currentLang}
      >
        About
      </Link>
    </nav>
  );
}

'use client';

import { useLocale } from 'next-intl';

import { MainNav } from './MainNav';
import { Button, Icons, LanguageDropdown, ThemeToggle } from '@/components';
import constants from '@/constants';
import { Link } from '@/i18n/routing';

export function GuestHeader() {
  const currentLang = useLocale();

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-auto">
        <div className="flex gap-6 md:gap-10">
          <Link
            href={constants.routePages.public.HOME_PAGE}
            className="flex items-center space-x-2"
            locale={currentLang}
          >
            <span className="inline-block font-bold">{constants.shared.APP.NAME}</span>
          </Link>
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <LanguageDropdown />
            <ThemeToggle />
            <Link href={constants.routePages.auth.LOGIN_PAGE} locale={currentLang}>
              <Button variant="outline" size="sm">
                <Icons.login />
                <span>Login</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

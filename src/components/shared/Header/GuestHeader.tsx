'use client';

import { Button } from '@/components';
import constants from '@/constants';
import { Link, useRouter } from '@/i18n/routing';

export function GuestHeader() {
  const router = useRouter();

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-auto">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Component Library</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/demo-component-ui"
              className="flex items-center text-sm font-medium text-muted-foreground"
            >
              Components UI
            </Link>
            <Link
              href="/demo-component-shared"
              className="flex items-center text-sm font-medium text-muted-foreground"
            >
              Components Shared
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push(constants.routePages.LOGIN_PAGE)}
            >
              Login
            </Button>
            <Button size="sm" onClick={() => router.push(constants.routePages.REGISTER_PAGE)}>
              Sign Up
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

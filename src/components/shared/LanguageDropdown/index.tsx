'use client';

import { useLocale } from 'next-intl';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components';
import { Link } from '@/i18n/routing';

export function LanguageDropdown() {
  const currentLocale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {currentLocale.toLocaleUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href="/" locale="en">
          <DropdownMenuItem>English</DropdownMenuItem>
        </Link>
        <Link href="/" locale="cn">
          <DropdownMenuItem>中文</DropdownMenuItem>
        </Link>
        <Link href="/" locale="jp">
          <DropdownMenuItem>日本語</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

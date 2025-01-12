'use client';

import Link from 'next/link';
import React, { useMemo } from 'react';

import { Icons } from '@/components';
import { useCurrentRole } from '@/hooks';
import { cn } from '@/lib';
import type { NavItem } from './types';
import constants from '@/constants';
import { appActions, useSelectorAppStore } from '@/modules/app';
import { useAppDispatch } from '@/lib/redux/hooks';
import { SidebarNav } from '@/components/shared/Sidebar/SidebarNav';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    isPublic: true,
    label: 'dashboard',
  },
  {
    title: 'Users',
    href: '/users',
    icon: 'users',
    isPublic: true,
    label: 'users',
  },
];

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const dispatch = useAppDispatch();
  const isAdmin = useCurrentRole();
  const { isMinimized } = useSelectorAppStore();

  const handleToggle = () => {
    dispatch(appActions.toggleSidebar());
  };

  const menu = useMemo(
    () =>
      navItems.map((item) => {
        if (!isAdmin && (item.label === 'users' || item.label === 'dashboard')) {
          return {
            ...item,
            href: item.href,
            isPublic: false,
          };
        }

        return {
          ...item,
          href: item.href,
          isPublic: true,
        };
      }),
    [isAdmin],
  );

  return (
    <aside
      className={cn(
        `relative hidden h-screen flex-none border-r bg-gray-100 transition-[width] duration-500 md:block`,
        !isMinimized ? 'w-72' : 'w-[72px]',
        className,
      )}
    >
      <div className="hidden p-5 pt-10 md:flex md-items-center">
        <Link href="/dashboard" target="_blank">
          <Icons.shieldCheck className="mr-2 h-6 w-6" />
        </Link>
        {!isMinimized && <h1 className="font-bold text-xl">{constants.shared.APP.NAME}</h1>}
      </div>
      <Icons.chevronLeft
        className={cn(
          'absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          isMinimized && 'rotate-180',
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <SidebarNav items={menu} />
          </div>
        </div>
      </div>
    </aside>
  );
}

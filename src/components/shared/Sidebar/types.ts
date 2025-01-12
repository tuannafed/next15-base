import type { Icons } from '@/components';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  isPublic: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}
export type MainNavItem = NavItemWithOptionalChildren;
export type SidebarNavItem = NavItemWithChildren;

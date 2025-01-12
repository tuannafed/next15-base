import { LayoutDashboard, Settings, Users } from 'lucide-react';

import type { NavItemGroupProps } from './NavGroup';
import type { NavItemProps } from './NavMain';
import constants from '@/constants';

export const DATA_MENU: NavItemProps[] = [
  {
    title: 'Dashboard',
    url: constants.routePages.DASHBOARD_PAGE,
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: 'Users',
    url: constants.routePages.USERS_PAGE,
    icon: Users,
    isActive: false,
  },
  {
    title: 'Settings',
    url: constants.routePages.SETTINGS_PAGE,
    icon: Settings,
    isActive: false,
  },
];

export const DATA_MENU_GROUP: NavItemGroupProps[] = [
  {
    title: 'Group 1',
    items: DATA_MENU,
  },
  {
    title: 'Group 2',
    items: DATA_MENU,
  },
];

export const DATA_USER = {
  name: 'UserName',
  email: 'user_email@example.com',
  avatar: '/images/avatar.jpg',
};

import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components';
import { Command } from 'lucide-react';
import { DATA_USER, DATA_MENU_GROUP, DATA_MENU } from './data';
import { NavMain } from './NavMain';
import { NavGroup } from './NavGroup';
import { NavUser } from '@/components/shared/AppSidebar/NavUser';
import constants from '@/constants';
import Link from 'next/link';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={constants.routePages.HOME_PAGE}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{constants.shared.APP.NAME}</span>
                  <span className="truncate text-xs">{constants.shared.APP.DESCRIPTION}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain data={DATA_MENU} />
        <NavGroup data={DATA_MENU_GROUP} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser user={DATA_USER} />
      </SidebarFooter>
    </Sidebar>
  );
}

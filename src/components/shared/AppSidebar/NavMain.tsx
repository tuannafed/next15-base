import * as React from 'react';

import { isEmpty } from 'lodash';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components';

export interface NavItemProps {
  title: string;
  url: string;
  icon: React.ElementType;
  isActive: boolean;
}

interface NavGroupProps {
  data: NavItemProps[];
}

export function NavMain({ data }: NavGroupProps) {
  if (isEmpty(data)) return null;

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupContent>
        <SidebarMenu className="gap-2">
          {data.map((menu) => (
            <SidebarMenuItem key={menu.title}>
              <SidebarMenuButton asChild isActive={menu.isActive}>
                <a href={menu.url}>
                  <menu.icon />
                  <span>{menu.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

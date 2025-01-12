import * as React from 'react';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components';
import type { NavItemProps } from './NavMain';
import { isEmpty } from 'lodash';
import { Fragment } from 'react';

export interface NavItemGroupProps {
  title: string;
  items: NavItemProps[];
}

interface NavGroupProps {
  data: NavItemGroupProps[];
}

export function NavGroup({ data }: NavGroupProps) {
  if (isEmpty(data)) return null;

  return (
    <Fragment>
      {data.map((group) => (
        <SidebarGroup key={group.title} className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </Fragment>
  );
}

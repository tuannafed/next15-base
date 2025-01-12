'use client';

import { useState } from 'react';

import { Icons, Sheet, SheetContent, SheetTrigger } from '@/components';
import { navItems } from '@/components/shared/Sidebar';
import { SidebarNav } from '@/components/shared/Sidebar/SidebarNav';

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Icons.menuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Overview</h2>
              <div className="space-y-1">
                <SidebarNav items={navItems} isMobileNav={true} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

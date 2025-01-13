import { SessionProvider } from 'next-auth/react';

import { auth } from '@/auth';
import { AdminHeader, AppProvider, AppSidebar, SidebarInset, SidebarProvider } from '@/components';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <SessionProvider session={session} refetchOnWindowFocus={true}>
      <AppProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <AdminHeader />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </AppProvider>
    </SessionProvider>
  );
}

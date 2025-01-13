import { ThemeToggle } from '../../ThemeToggle';
import { UserNav } from './UserNav';
import { MobileSidebar } from '@/components/shared/Header/MobileSidebar';
import { cn } from '@/lib/utils';

export function AdminHeader() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn('block md:!hidden')}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

import type { Metadata } from 'next';

import { ErrorCard } from '@/modules/auth';

export const metadata: Metadata = {
  title: 'Error',
  description: 'Login to your account',
};

export default function Index() {
  return (
    <div className="flex h-full items-center p-4 lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <ErrorCard />
      </div>
    </div>
  );
}

import type { Metadata } from 'next';

import { LoginForm } from '@/modules/auth';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function Index() {
  return (
    <div className="flex h-full items-center p-4 lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:max-w-[420px]">
        <LoginForm />
      </div>
    </div>
  );
}

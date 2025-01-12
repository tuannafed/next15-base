import type { Metadata } from 'next';

import { RegisterForm } from '@/modules/auth';

export const metadata: Metadata = {
  title: 'Register new account',
  description: 'Register new account',
};

export default function Index() {
  return (
    <div className="h-full w-full">
      <RegisterForm />
    </div>
  );
}

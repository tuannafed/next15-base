'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button, Icons } from '@/components';

export function SocialLogin() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      className="w-full"
      variant="secondary"
      type="button"
      onClick={() => signIn('github', { callbackUrl: callbackUrl ?? '/dashboard' })}
    >
      <Icons.gitHub className="mr-2 h-4 w-4" />
      Continue with Github
    </Button>
  );
}

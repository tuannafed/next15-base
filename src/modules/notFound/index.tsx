'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components';

export function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="w-full absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[8rem] font-extrabold leading-none text-transparent">
        404
      </span>

      <h2 className="font-heading my-2 text-2xl font-bold">Something&apos;s missing</h2>
      <p>Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>

      <div className="mt-8 flex justify-center gap-2">
        <Button variant="secondary" onClick={() => router.back()}>
          Go back
        </Button>
        <Button onClick={() => router.push('/dashboard')}>Back to Home</Button>
      </div>
    </div>
  );
}

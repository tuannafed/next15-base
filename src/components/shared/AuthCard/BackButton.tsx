'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

type BackButtonProps = {
  href: string;
  label: string;
};

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link" className="w-full text-muted-foreground" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

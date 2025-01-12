'use client';

import { AuthCardHeader } from './AuthCardHeader';
import { BackButton } from './BackButton';
import { SocialLogin } from './SocialLogin';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui';

interface IAuthCardProps {
  children: React.ReactNode;
  headerTitle?: string;
  headerLabel: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
}

export const AuthCard = ({
  children,
  headerTitle,
  backButtonHref,
  backButtonLabel,
  headerLabel,
  showSocial = false,
}: IAuthCardProps) => {
  return (
    <Card className="bg-white w-full shadow-md">
      <CardHeader>
        <AuthCardHeader title={headerTitle} label={headerLabel} />
      </CardHeader>

      <CardContent>{children}</CardContent>

      {showSocial && (
        <CardFooter>
          <SocialLogin />
        </CardFooter>
      )}

      {backButtonLabel && backButtonHref && (
        <CardFooter>
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      )}
    </Card>
  );
};

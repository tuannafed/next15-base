'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components';
import constants from '@/constants';
import { Link } from '@/i18n/routing';

export function HomeContainer() {
  const t = useTranslations('HomePage');

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-6">{t('title')}</h1>
      <p className="text-xl text-white mb-8">{t('description')}</p>
      <Link href={constants.routePages.public.DESIGN_SYTEM}>
        <Button size="lg" variant="secondary">
          {t('button.getStarted')}
        </Button>
      </Link>
    </div>
  );
}

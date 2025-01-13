'use client';

import { useLocale, useTranslations } from 'next-intl';

import { Button } from '@/components';
import constants from '@/constants';
import { Link } from '@/i18n/routing';

export function HomeContainer() {
  const t = useTranslations('HomePage');
  const currentLocale = useLocale();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-6">{t('title')}</h1>
      <p className="text-xl text-white mb-8">{t('description')}</p>
      const locale = useLocale();
      <Link href={constants.routePages.public.DESIGN_SYSTEM} locale={currentLocale}>
        <Button size="lg" variant="secondary">
          {t('button.getStarted')}
        </Button>
      </Link>
    </div>
  );
}

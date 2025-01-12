import { getTranslations } from 'next-intl/server';
import { DEFAULT_LOCATE } from '@/i18n/routing';
import { ComponentContent } from '@/modules/app';
import { GuestHeader } from '@/components/shared/Header/GuestHeader';
import { Fragment } from 'react';

export async function generateMetadata() {
  const t = await getTranslations<string>({ locale: DEFAULT_LOCATE, namespace: 'Common.metadata' });

  return {
    title: t('template', { page: t('homeTitle') }),
  };
}

export default function Index() {
  return (
    <Fragment>
      <GuestHeader />
      <ComponentContent />
    </Fragment>
  );
}

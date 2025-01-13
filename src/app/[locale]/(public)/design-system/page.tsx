import { Fragment } from 'react';

import { getTranslations } from 'next-intl/server';

import { GuestHeader } from '@/components/shared/Header/GuestHeader';
import { DEFAULT_LOCATE } from '@/i18n/routing';
import { DesignSystemContainer } from '@/modules/app';

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
      <DesignSystemContainer />
    </Fragment>
  );
}

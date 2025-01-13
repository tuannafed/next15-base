import { Fragment } from 'react';

import { getTranslations } from 'next-intl/server';

import { GuestHeader } from '@/components';
import { DEFAULT_LOCATE } from '@/i18n/routing';
import { AboutContainer } from '@/modules/app';

export async function generateMetadata() {
  const t = await getTranslations<string>({ locale: DEFAULT_LOCATE, namespace: 'Common.metadata' });

  return {
    title: t('template', { page: t('aboutTitle') }),
  };
}

export default function Index() {
  return (
    <Fragment>
      <GuestHeader />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <AboutContainer />
      </main>
    </Fragment>
  );
}

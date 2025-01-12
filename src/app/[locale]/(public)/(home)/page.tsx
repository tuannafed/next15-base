import { getTranslations } from 'next-intl/server';
import { DEFAULT_LOCATE } from '@/i18n/routing';
import { GuestHeader } from '@/components/shared/Header/GuestHeader';
import { Fragment } from 'react';
import { HomeContainer } from '@/modules/app';

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
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <HomeContainer />
      </main>
    </Fragment>
  );
}

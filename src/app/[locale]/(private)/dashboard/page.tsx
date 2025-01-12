import { DashboardPage } from '@/modules/dashboard';
import { DEFAULT_LOCATE } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations<string>({ locale: DEFAULT_LOCATE, namespace: 'Common.metadata' });

  return {
    title: t('template', { page: t('dashboardTitle') }),
  };
}

export default function Index() {
  return <DashboardPage />;
}

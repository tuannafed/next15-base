import { getTranslations } from 'next-intl/server';

import { DEFAULT_LOCATE } from '@/i18n/routing';
import { LoginForm } from '@/modules/auth';

export async function generateMetadata() {
  const t = await getTranslations<string>({ locale: DEFAULT_LOCATE, namespace: 'Common.metadata' });

  return {
    title: t('template', { page: t('loginTitle') }),
  };
}

export default function Index() {
  return (
    <div className="flex h-full items-center p-4 lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:max-w-[420px]">
        <LoginForm />
      </div>
    </div>
  );
}

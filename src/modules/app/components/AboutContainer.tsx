'use client';

import React from 'react';

import { useTranslations } from 'next-intl';

export function AboutContainer() {
  const t = useTranslations('AboutPage');

  return (
    <div className="container text-center">
      <h1 className="text-4xl font-bold text-white mb-6">{t('title')}</h1>
      <p className="text-xl text-white mb-8">{t('description')}</p>
    </div>
  );
}

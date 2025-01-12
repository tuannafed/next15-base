import type { MetadataRoute } from 'next';

import constants from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${constants.shared.APP.URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${constants.shared.APP.URL}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${constants.shared.APP.URL}/register`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}

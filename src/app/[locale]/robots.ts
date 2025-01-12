import constants from '@/constants';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/privacy',
    },
    sitemap: `${constants.shared.APP.URL}/sitemap.xml`,
  };
}

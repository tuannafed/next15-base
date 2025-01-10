import type { Metadata } from 'next';
import constants from '@/constants';

const metadata: Metadata = {
  title: {
    default: constants.shared.APP.NAME,
    template: `%s | ${constants.shared.APP.NAME}`,
  },
  metadataBase: new URL(constants.shared.APP.NAME),
  description: `This is a ${constants.shared.APP.NAME}`,
  applicationName: constants.shared.APP.NAME,
  referrer: 'origin-when-cross-origin',
  keywords: [],
  authors: [{ name: constants.shared.APP.AUTHOR, url: '' }],
  creator: constants.shared.APP.AUTHOR,
  twitter: {
    card: 'summary_large_image',
    title: constants.shared.APP.NAME,
    description: `This is a ${constants.shared.APP.NAME}`,
    images: ['./opengraph-image.png'],
    creator: `@${constants.shared.APP.NAME}`,
  },
  alternates: {
    canonical: '/en',
    languages: {
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: constants.shared.APP.URL,
    title: constants.shared.APP.NAME,
    description: `This is a ${constants.shared.APP.NAME}`,
    siteName: constants.shared.APP.NAME,
    images: [
      {
        url: './opengraph-image.png',
        width: 1200,
        height: 630,
        alt: constants.shared.APP.NAME,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'ca-pub-1234567890',
  },
  manifest: '/site.webmanifest',
  other: {
    'apple-touch-icon': '/apple-touch-icon.png',
    'theme-color': '#ffffff',
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/mstile-144x144.png',
    'msapplication-config': '/browserconfig.xml',
    'application-name': constants.shared.APP.NAME,
    'mask-icon': '/safari-pinned-tab.svg',
  },
};

export default metadata;

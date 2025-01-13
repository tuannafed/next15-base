/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

module.exports = withBundleAnalyzer(
  withNextIntl({
    reactStrictMode: true,
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    experimental: {
      optimizePackageImports: ['lodash', 'dayjs', 'lucide-react'],
    },
  } as NextConfig),
);

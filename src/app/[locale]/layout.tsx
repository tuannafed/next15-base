import { Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';

import './globals.css';
import { ThemeProvider } from '@/components';
import { cn } from '@/lib/utils';

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] });

export { default as metadata } from '@constants/siteConfig';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}
export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={cn(poppins.className)} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader showSpinner={false} />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

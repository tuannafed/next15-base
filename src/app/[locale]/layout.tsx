import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components';
import NextTopLoader from 'nextjs-toploader';

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

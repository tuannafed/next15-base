'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist';
import { useIsClient } from 'react-tna';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const isClient = useIsClient();

  if (!isClient) {
    // Prevent hydration mismatch by rendering nothing until mounted
    return <>{children}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

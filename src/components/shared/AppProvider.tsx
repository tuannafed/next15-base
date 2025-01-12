'use client';

import 'dayjs/locale/ja';

import { Provider as ReduxProvider } from 'react-redux';

import { AuthProvider } from '@/components';
import { store } from '@/stores';

interface Props extends React.PropsWithChildren {}

export function AppProvider({ children }: Props) {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </ReduxProvider>
  );
}

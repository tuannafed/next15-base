import type { IAppState } from './appReducer';
import type { RootState } from '@/stores';
import { useSelector } from 'react-redux';

export const useSelectorAppStore = (): IAppState => {
  return useSelector<RootState, IAppState>((state) => state.app);
};

import { set } from 'lodash';

export interface IAppState extends TBaseState {
  isMinimized: boolean;
}

export const defaultState: IAppState = {
  isMinimized: false,
  loading: 'idle',
  requestId: '',
  error: undefined,
};

const reducers = {
  toggleSidebar: (state: IAppState) => {
    set(state, 'isMinimized', !state.isMinimized);
  },
};

export default reducers;

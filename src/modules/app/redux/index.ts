import reducers, { defaultState } from './appReducer';
import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: defaultState,
  reducers,
  extraReducers: (_builder) => {},
});

const extraActions = {
  ...actions,
};

export * from './appApi';
export * from './appSelector';
export { reducer as appReducer, extraActions as appActions };

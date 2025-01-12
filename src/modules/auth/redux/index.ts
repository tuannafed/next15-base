import { userProfileBuilder } from './authApi';
import reducers, { defaultState } from './authReducer';
import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: defaultState,
  reducers,
  extraReducers: (builder) => {
    userProfileBuilder(builder);
  },
});

const extraActions = {
  ...actions,
};

export * from './authApi';
export * from './authSelector';
export { reducer as authReducer, extraActions as authActions };

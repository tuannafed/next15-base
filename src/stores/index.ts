import type { Middleware } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import constants from '@/constants';
import { rtkQueryErrorLogger } from '@/lib';
import { authApi, authReducer } from '@/modules/auth';
import { appReducer } from '@/modules/app/redux';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const apiMiddleware: Middleware[] = [authApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  devTools: constants.shared.ENV.DEFAULT !== constants.shared.ENV.PRODUCTION,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      rtkQueryErrorLogger as Middleware,
      ...apiMiddleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

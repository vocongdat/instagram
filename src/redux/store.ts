import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { AppStore } from '@/typings/reduxStore';

import loadingReducer from './slices/loadingSlice';

export const store = () =>
  configureStore({
    reducer: {
      loading: loadingReducer,
    },
  });

export const wrapper = createWrapper<AppStore>(store);

import { ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';

import { store } from '@/redux/store';

export type AppStore = ReturnType<typeof store>;
export type IRootState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, IRootState, unknown, Action>;

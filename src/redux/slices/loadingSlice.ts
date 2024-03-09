import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRootState } from '@/typings/reduxStore';

interface ISliceState {
  isAppLoading: boolean;
}

const initialState: ISliceState = {
  isAppLoading: false,
};

const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    updateIsAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload;
    },
  },
});

const { reducer, actions } = slice;

export const { updateIsAppLoading } = actions;

export const isAppLoadingSelector = (state: Pick<IRootState, 'loading'>) => state.loading.isAppLoading;

export default reducer;

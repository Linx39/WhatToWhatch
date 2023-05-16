import {createSlice} from '@reduxjs/toolkit';

import {ReducerName, AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {},
};

export const userData = createSlice({
  name: ReducerName.USER,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    loadUserData: (state, action) => {
      state.user = action.payload;
    },
  }
});

export const {requireAuthorization, loadUserData} = userData.actions;

export const userDataReducer = userData.reducer;

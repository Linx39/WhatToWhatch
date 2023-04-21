import {createReducer} from '@reduxjs/toolkit';

import {requireAuthorization, loadUserData, setErrorAuthorization} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOW,
  user: {},
  isAuthorizationProcess: true,
  error: null,
};

const userData = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(loadUserData, (state, action) => {
    state.user = action.payload;
    state.isAuthorizationProcess = false;
  });
  builder.addCase(setErrorAuthorization, (state, action) => {
    state.isAuthorizationProcess = false;
    state.error = action.payload;
  });
});

export {initialState, userData};

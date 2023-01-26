import {createReducer} from '@reduxjs/toolkit';

import {requireAuthorization, loadUserData} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {},
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(loadUserData, (state, action) => {
    state.user = action.payload;
  });
});

export {user};

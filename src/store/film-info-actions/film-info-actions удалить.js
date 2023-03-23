import {createReducer} from '@reduxjs/toolkit';

import {changeActiveNavItem, resetOnDefaultFilmPage} from '../action';
import {NavItem} from '../../const';

const initialState = {
  activeNavItem: NavItem.OVERVIEW,
};

const filmInfoAction = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveNavItem, (state, action) => {
    state.activeNavItem = action.payload;
  });
  builder.addCase(resetOnDefaultFilmPage, (state) => {
    state.activeNavItem = NavItem.OVERVIEW;
  });
});

export {initialState, filmInfoAction};

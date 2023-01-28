import {createReducer} from '@reduxjs/toolkit';

import {changeActiveNavItem, resetOnDefaultFilmInfo} from '../action';
import {NavItem} from '../../const';

const initialState = {
  activeNavItem: NavItem.OVERVIEW,
};

const filmInfoAction = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveNavItem, (state, action) => {
    state.activeNavItem = action.payload;
  });
  builder.addCase(resetOnDefaultFilmInfo, (state) => {
    state.activeNavItem = NavItem.OVERVIEW;
  });
});

export {filmInfoAction};

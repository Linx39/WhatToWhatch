import {createReducer} from '@reduxjs/toolkit';

import {changeGenre, changeFilmsCount, changeActiveNavItem, resetOnDefaultMainPage, resetOnDefaultFilmPage} from '../action';
import {GENRE_DEFAULT, FilmsCount, NavItem} from '../../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  count: FilmsCount.MAIN,
  activeNavItem: NavItem.OVERVIEW,
};

const appActions = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.activeGenre = action.payload;
  });
  builder.addCase(changeFilmsCount, (state, action) => {
    state.count = action.payload;
  });
  builder.addCase(changeActiveNavItem, (state, action) => {
    state.activeNavItem = action.payload;
  });
  builder.addCase(resetOnDefaultMainPage, (state) => {
    state.activeGenre = GENRE_DEFAULT;
    state.count = FilmsCount.MAIN;
  });
  builder.addCase(resetOnDefaultFilmPage, (state) => {
    state.activeNavItem = NavItem.OVERVIEW;
  });
});

export {initialState, appActions};

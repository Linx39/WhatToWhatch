import {createReducer} from '@reduxjs/toolkit';

import {changeGenre, changeFilmsCount, resetOnDefaultMainPage, changeActiveNavItem, resetOnDefaultFilmPage} from '../action';
import {FilmsCount, GENRE_DEFAULT, NavItem} from '../../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  count: FilmsCount.MAIN,
  activeNavItem: NavItem.OVERVIEW,
};

const filmsActions = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.activeGenre = action.payload;
  });
  builder.addCase(changeFilmsCount, (state, action) => {
    state.count = action.payload;
  });
  builder.addCase(resetOnDefaultMainPage, (state) => {
    state.activeGenre = GENRE_DEFAULT;
    state.count = FilmsCount.MAIN;
  });
  builder.addCase(changeActiveNavItem, (state, action) => {
    state.activeNavItem = action.payload;
  });
  builder.addCase(resetOnDefaultFilmPage, (state) => {
    state.activeNavItem = NavItem.OVERVIEW;
  });
});

export {initialState, filmsActions};

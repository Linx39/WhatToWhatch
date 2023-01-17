import {createReducer} from '@reduxjs/toolkit';

import {changeGenre, getFilmsList, changeFilmsCount, changeActiveNavItem, resetOnDefault} from '../action';
import {FilmsCount, GENRE_DEFAULT, NavItem} from '../../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  count: FilmsCount.MAIN,
  filmsList: [],
  activeNavItem: NavItem.OVERVIEW,
};

const appAction = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.activeGenre = action.payload;
  });
  builder.addCase(changeFilmsCount, (state, action) => {
    state.count = action.payload;
  });
  builder.addCase(getFilmsList, (state, action) => {
    state.filmsList = action.payload;
  });
  builder.addCase(changeActiveNavItem, (state, action) => {
    state.activeNavItem = action.payload;
  });
  builder.addCase(resetOnDefault, (state) => {
    state.activeGenre = GENRE_DEFAULT;
    state.count = FilmsCount.MAIN;
    state.filmsList = [];
    state.activeNavItem = NavItem.OVERVIEW;
  });
});

export {appAction};

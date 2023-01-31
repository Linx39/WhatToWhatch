import {createReducer} from '@reduxjs/toolkit';

import {changeGenre, changeFilmsList, changeFilmsCount, resetOnDefaultFilmsList} from '../action';
import {FilmsCount, GENRE_DEFAULT} from '../../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  count: FilmsCount.MAIN,
  filmsList: [],
};

const filmsListAction = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.activeGenre = action.payload;
  });
  builder.addCase(changeFilmsCount, (state, action) => {
    state.count = action.payload;
  });
  builder.addCase(changeFilmsList, (state, action) => {
    state.filmsList = action.payload;
  });
  builder.addCase(resetOnDefaultFilmsList, (state) => {
    state.activeGenre = GENRE_DEFAULT;
    state.count = FilmsCount.MAIN;
    state.filmsList = [];
  });
});

export {filmsListAction};

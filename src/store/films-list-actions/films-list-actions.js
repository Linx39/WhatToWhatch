import {createReducer} from '@reduxjs/toolkit';

import {changeGenre, changeFilmsCount, resetOnDefaultFilmsList} from '../action';
import {FilmsCount, GENRE_DEFAULT} from '../../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  count: FilmsCount.MAIN,
};

const filmsListAction = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.activeGenre = action.payload;
  });
  builder.addCase(changeFilmsCount, (state, action) => {
    state.count = action.payload;
  });
  builder.addCase(resetOnDefaultFilmsList, (state) => {
    state.activeGenre = GENRE_DEFAULT;
    state.count = FilmsCount.MAIN;
  });
});

export {initialState, filmsListAction};

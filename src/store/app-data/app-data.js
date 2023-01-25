import {createReducer} from '@reduxjs/toolkit';

import {loadFilms, loadPromoFilm, loadFilm, loadComments, loadFavoriteFilms} from '../action';

const initialState = {
  films: [],
  isFilmsLoaded: false,
  promoFilm: {},
  isPromoFilmLoaded: false,
  film: {},
  comments: [],
  favoriteFilms: [],
};

const appData = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    state.films = action.payload;
    state.isFilmsLoaded = true;
  });
  builder.addCase(loadPromoFilm, (state, action) => {
    state.promoFilm = action.payload;
    state.isPromoFilmLoaded = true;
  });
  builder.addCase(loadFilm, (state, action) => {
    state.film = action.payload;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
  });
  builder.addCase(loadFavoriteFilms, (state, action) => {
    state.favoriteFilms = action.payload;
  });
});

export {appData};

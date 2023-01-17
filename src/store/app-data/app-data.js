import {createReducer} from '@reduxjs/toolkit';

import {loadFilms, loadFilm, loadPromoFilm, loadComments, loadFavoriteFilms} from '../action';

const initialState = {
  films: [],
  isFilmsLoaded: false,
  film: {},
  isFilmLoaded: false,
  promoFilm: {},
  isPromoFilmLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    state.films = action.payload;
    state.isFilmsLoaded = true;
  });
  builder.addCase(loadFilm, (state, action) => {
    state.film = action.payload;
    state.isFilmLoaded = true;
  });
  builder.addCase(loadPromoFilm, (state, action) => {
    state.promoFilm = action.payload;
    state.isPromoFilmLoaded = true;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
    state.isCommentsLoaded = true;
  });
  builder.addCase(loadFavoriteFilms, (state, action) => {
    state.favoriteFilms = action.payload;
    state.isFavoriteFilmsLoaded = true;
  });
  builder.addCase(resetOnDefault, (state) => {
    state.isFilmLoaded = false;
  });
});

export {appData};

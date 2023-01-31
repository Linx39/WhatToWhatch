import {createReducer} from '@reduxjs/toolkit';

import {loadFilms, loadPromoFilm, loadFilm, loadComments, loadFavoriteFilms, resetLoadedFilm} from '../action';

const initialState = {
  films: [],
  isFilmsLoaded: false,
  promoFilm: {},
  isPromoFilmLoaded: false,
  film: {},
  isFilmLoaded: false,
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
  builder.addCase(loadPromoFilm, (state, action) => {
    state.promoFilm = action.payload;
    state.isPromoFilmLoaded = true;
  });
  builder.addCase(loadFilm, (state, action) => {
    state.film = action.payload;
    state.isFilmLoaded = true;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
    state.isCommentsLoaded = true;
  });
  builder.addCase(loadFavoriteFilms, (state, action) => {
    state.favoriteFilms = action.payload;
    state.isFavoriteFilmsLoaded = true;
  });
  builder.addCase(resetLoadedFilm, (state) => {
    state.film = {};
    state.isFilmLoaded = false;
    state.comments = [];
    state.isCommentsLoaded = false;
  });
});

export {appData};

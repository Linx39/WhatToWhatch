import {createReducer} from '@reduxjs/toolkit';

import {
  loadFilms,
  loadPromoFilm,
  loadFilm,
  loadComments,
  loadFavoriteFilms,
  resetLoadedFilms,
  resetLoadedPromoFilm,
  resetLoadedFilm,
  resetLoadedComments,
  resetLoadedFavoriteFilms
} from '../action';

const initialState = {
  films: [],
  isFilmsLoading: true,
  promoFilm: {},
  isPromoFilmLoading: true,
  film: {},
  isFilmLoading: true,
  comments: [],
  isCommentsLoading: true,
  favoriteFilms: [],
  isFavoriteFilmsLoading: true,
};

const appData = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    state.films = action.payload;
    state.isFilmsLoading = false;
  });
  builder.addCase(loadPromoFilm, (state, action) => {
    state.promoFilm = action.payload;
    state.isPromoFilmLoading = false;
  });
  builder.addCase(loadFilm, (state, action) => {
    state.film = action.payload;
    state.isFilmLoading = false;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
    state.isCommentsLoading = false;
  });
  builder.addCase(loadFavoriteFilms, (state, action) => {
    state.favoriteFilms = action.payload;
    state.isFavoriteFilmsLoading = false;
  });
  builder.addCase(resetLoadedFilms, (state) => {
    state.films = [];
    state.isFilmsLoading = true;
  });
  builder.addCase(resetLoadedPromoFilm, (state) => {
    state.promoFilm = {};
    state.isPromoFilmLoading = true;
  });
  builder.addCase(resetLoadedFilm, (state) => {
    state.film = {};
    state.isFilmLoading = true;
  });
  builder.addCase(resetLoadedComments, (state) => {
    state.comments = [];
    state.isCommentsLoading = true;
  });
  builder.addCase(resetLoadedFavoriteFilms, (state) => {
    state.favoriteFilms = [];
    state.isFavoriteFilmsLoading = true;
  });
});

export {initialState, appData};

import {createSlice} from '@reduxjs/toolkit';

import {ReducerName} from '../../const';

const FILMS_DATA_DEFAULT = {
  data: [],
  isLoading: true,
  error: null,
};

const FILM_DATA_DEFAULT = {
  data: {},
  isLoading: true,
  error: null,
};

const COMMENTS_DATA_DEFAULT = {
  data: [],
  isLoading: true,
  error: null,
};

const loadData = (dataDefault, payload) => ({...dataDefault, ...payload, isLoading: false});

export const initialState = {
  filmsData: FILMS_DATA_DEFAULT,
  promoFilmData: FILM_DATA_DEFAULT,
  filmData: FILM_DATA_DEFAULT,
  commentsData: COMMENTS_DATA_DEFAULT,
  favoriteFilmsData: FILMS_DATA_DEFAULT,
};

export const appData = createSlice({
  name: ReducerName.DATA,
  initialState,
  reducers: {
    loadFilms: (state, action) => {
      state.filmsData = loadData(FILMS_DATA_DEFAULT, action.payload);
    },
    loadPromoFilm: (state, action) => {
      state.promoFilmData = loadData(FILM_DATA_DEFAULT, action.payload);
    },
    loadFilm: (state, action) => {
      state.filmData = loadData(FILM_DATA_DEFAULT, action.payload);
    },
    loadComments: (state, action) => {
      state.commentsData = loadData(COMMENTS_DATA_DEFAULT, action.payload);
    },
    loadFavoriteFilms: (state, action) => {
      state.favoriteFilmsData = loadData(FILMS_DATA_DEFAULT, action.payload);
    },
    resetLoadedFilms: (state) => {
      state.filmsData = FILMS_DATA_DEFAULT;
    },
    resetLoadedPromoFilm: (state) => {
      state.promoFilmData = FILM_DATA_DEFAULT;
    },
    resetLoadedFilm: (state) => {
      state.filmData = FILM_DATA_DEFAULT;
    },
    resetLoadedComments: (state) => {
      state.commentsData = COMMENTS_DATA_DEFAULT;
    },
    resetLoadedFavoriteFilms: (state) => {
      state.favoriteFilmsData = FILMS_DATA_DEFAULT;
    },
  }
});

export const {
  loadFilms,
  loadPromoFilm,
  loadFilm,
  loadComments,
  loadFavoriteFilms,
  resetLoadedFilms,
  resetLoadedPromoFilm,
  resetLoadedFilm,
  resetLoadedComments,
  resetLoadedFavoriteFilms,
} = appData.actions;

export const appDataReducer = appData.reducer;

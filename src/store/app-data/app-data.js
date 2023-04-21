import {createReducer} from '@reduxjs/toolkit';

import {
  loadFilms,
  loadPromoFilm,
  loadFilm,
  loadComments,
  loadFavoriteFilms,
} from '../action';

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

const initialState = {
  filmsData: FILMS_DATA_DEFAULT,
  promoFilmData: FILM_DATA_DEFAULT,
  filmData: FILM_DATA_DEFAULT,
  commentsData: COMMENTS_DATA_DEFAULT,
  favoriteFilmsData: FILMS_DATA_DEFAULT,
};

const loadData = (dataDefault, payload) => ({...dataDefault, ...payload, isLoading: false});

const appData = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    state.filmsData = loadData(FILMS_DATA_DEFAULT, action.payload);
  });
  builder.addCase(loadPromoFilm, (state, action) => {
    state.promoFilmData = loadData(FILM_DATA_DEFAULT, action.payload);
  });
  builder.addCase(loadFilm, (state, action) => {
    state.filmData = loadData(FILM_DATA_DEFAULT, action.payload);
  });
  builder.addCase(loadComments, (state, action) => {
    state.commentsData = loadData(COMMENTS_DATA_DEFAULT, action.payload);
  });
  builder.addCase(loadFavoriteFilms, (state, action) => {
    state.favoriteFilmsData = loadData(FILMS_DATA_DEFAULT, action.payload);
  });
});

export {initialState, appData};

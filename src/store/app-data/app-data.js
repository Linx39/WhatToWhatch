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

const appData = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    state.filmsData = action.payload;
  });
  builder.addCase(loadPromoFilm, (state, action) => {
    state.promoFilmData = action.payload;
  });
  builder.addCase(loadFilm, (state, action) => {
    state.filmData = action.payload;
  });
  builder.addCase(loadComments, (state, action) => {
    state.commentsData = action.payload;
  });
  builder.addCase(loadFavoriteFilms, (state, action) => {
    state.favoriteFilmsData = action.payload;
  });
});

export {initialState, appData, FILMS_DATA_DEFAULT, FILM_DATA_DEFAULT, COMMENTS_DATA_DEFAULT};

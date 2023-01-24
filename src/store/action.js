import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: `filmsList/changeGenre`,
  GET_FILMS_LIST: `filmsList/getFilmsList`,
  CHANGE_FILMS_COUNT: `filmsList/changeFilmsCount`,
  RESET_ON_DEFAULT: `filmsList/resetOnDefault`,
  CHANGE_ACTIVE_NAV_ITEM: `filmsList/changeActiveNavItem`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_FILM: `data/loadFilm`,
  LOAD__PROMO_FILM: `data/loadPromoFilm`,
  LOAD_FAVORITE_FILMS: `data/loadFavoriteFilms`,
  LOAD_COMMENTS: `data/loadComments`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

export const getFilmsList = createAction(ActionType.GET_FILMS_LIST, (films) => {
  return {
    payload: films,
  };
});

export const changeFilmsCount = createAction(ActionType.CHANGE_FILMS_COUNT, (count) => {
  return {
    payload: count,
  };
});

export const changeActiveNavItem = createAction(ActionType.CHANGE_ACTIVE_NAV_ITEM, (item) => {
  return {
    payload: item,
  };
});

export const resetOnDefault = createAction(ActionType.RESET_ON_DEFAULT);

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => {
  return {
    payload: films,
  };
});

export const loadPromoFilm = createAction(ActionType.LOAD__PROMO_FILM, (film) => {
  return {
    payload: film,
  };
});

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => {
  return {
    payload: film,
  };
});

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments,
  };
});

export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (films) => {
  return {
    payload: films,
  };
});

export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

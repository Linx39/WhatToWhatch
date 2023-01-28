import {createAction} from '@reduxjs/toolkit';

import browserHistory from '../browser-history';

export const ActionType = {
  CHANGE_GENRE: `filmsList/changeGenre`,
  GET_FILMS_LIST: `filmsList/getFilmsList`,
  CHANGE_FILMS_COUNT: `filmsList/changeFilmsCount`,
  RESET_ON_DEFAULT_FILMS_LIST: `filmsList/resetOnDefaultFilmsList`,
  CHANGE_ACTIVE_NAV_ITEM: `filmInfo/changeActiveNavItem`,
  RESET_ON_DEFAULT_FILM_INFO: `filmInfo/resetOnDefaultFilmInfo`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD__PROMO_FILM: `data/loadPromoFilm`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_COMMENTS: `data/loadComments`,
  LOAD_FAVORITE_FILMS: `data/loadFavoriteFilms`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  LOAD_USER_DATA: `user/loadUserData`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  REDIRECT_TO_BACK: `app/redirectToBack`,
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

export const resetOnDefaultFilmsList = createAction(ActionType.RESET_ON_DEFAULT_FILMS_LIST);

export const changeActiveNavItem = createAction(ActionType.CHANGE_ACTIVE_NAV_ITEM, (item) => {
  return {
    payload: item,
  };
});

export const resetOnDefaultFilmInfo = createAction(ActionType.RESET_ON_DEFAULT_FILM_INFO);

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

export const loadUserData = createAction(ActionType.LOAD_USER_DATA, (data) => {
  return {
    payload: data,
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

export const redirectToBack = createAction(ActionType.REDIRECT_TO_BACK, () => {
  return {
    payload: browserHistory.goBack(),
  };
});

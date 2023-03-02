import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: `filmsList/changeGenre`,
  CHANGE_FILMS_COUNT: `filmsList/changeFilmsCount`,
  CHANGE_FILMS_LIST: `filmsList/changeFilmsList`,
  RESET_ON_DEFAULT_FILMS_LIST: `filmsList/resetOnDefaultFilmsList`,
  CHANGE_ACTIVE_NAV_ITEM: `filmInfo/changeActiveNavItem`,
  RESET_ON_DEFAULT_FILM_INFO: `filmInfo/resetOnDefaultFilmInfo`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_COMMENTS: `data/loadComments`,
  LOAD_FAVORITE_FILMS: `data/loadFavoriteFilms`,
  RESET_LOADED_FILM: `data/resetLoadedFilm`,
  RESET_LOADED_FAVORITE_FILMS: `data/resetLoadedFavoriteFilms`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  LOAD_USER_DATA: `user/loadUserData`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

export const changeFilmsCount = createAction(ActionType.CHANGE_FILMS_COUNT, (count) => {
  return {
    payload: count,
  };
});

export const changeFilmsList = createAction(ActionType.CHANGE_FILMS_LIST, (films) => {
  return {
    payload: films,
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

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (film) => {
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

export const resetLoadedFilm = createAction(ActionType.RESET_LOADED_FILM);

export const resetLoadedFavoriteFilms = createAction(ActionType.RESET_LOADED_FAVORITE_FILMS);

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

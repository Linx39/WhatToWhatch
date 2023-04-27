import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: `app/changeGenre`,
  CHANGE_FILMS_COUNT: `app/changeFilmsCount`,
  CHANGE_ACTIVE_NAV_ITEM: `app/changeActiveNavItem`,
  RESET_ON_DEFAULT_MAIN_PAGE: `app/resetOnDefaultMainPage`,
  RESET_ON_DEFAULT_FILM_PAGE: `app/resetOnDefaultFilmPage`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_COMMENTS: `data/loadComments`,
  LOAD_FAVORITE_FILMS: `data/loadFavoriteFilms`,
  RESET_LOADED_PROMO_FILM: `data/resetLoadedPromoFilm`,
  RESET_LOADED_FILM: `data/resetLoadedFilm`,
  RESET_LOADED_COMMENTS: `data/resetLoadedComments`,
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

export const changeFilmsCount = createAction(ActionType.CHANGE_FILMS_COUNT);

export const changeActiveNavItem = createAction(ActionType.CHANGE_ACTIVE_NAV_ITEM, (item) => {
  return {
    payload: item,
  };
});

export const resetOnDefaultMainPage = createAction(ActionType.RESET_ON_DEFAULT_MAIN_PAGE);

export const resetOnDefaultFilmPage = createAction(ActionType.RESET_ON_DEFAULT_FILM_PAGE);

export const loadFilms = createAction(ActionType.LOAD_FILMS, (filmsData) => {
  return {
    payload: filmsData,
  };
});

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (filmData) => {
  return {
    payload: filmData,
  };
});

export const loadFilm = createAction(ActionType.LOAD_FILM, (filmData) => {
  return {
    payload: filmData,
  };
});

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (commentsData) => {
  return {
    payload: commentsData,
  };
});

export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (filmsData) => {
  return {
    payload: filmsData,
  };
});

export const resetLoadedPromoFilm = createAction(ActionType.RESET_LOADED_PROMO_FILM);

export const resetLoadedFilm = createAction(ActionType.RESET_LOADED_FILM);

export const resetLoadedComments = createAction(ActionType.RESET_LOADED_COMMENTS);

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

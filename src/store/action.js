import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: `appAction/changeGenre`,
  CHANGE_FILMS_COUNT: `appAction/changeFilmsCount`,
  CHANGE_ACTIVE_NAV_ITEM: `appAction/changeActiveNavItem`,
  RESET_ON_DEFAULT_MAIN_PAGE: `appAction/resetOnDefaultMainPage`,
  RESET_ON_DEFAULT_FILM_PAGE: `appAction/resetOnDefaultFilmPage`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_COMMENTS: `data/loadComments`,
  LOAD_FAVORITE_FILMS: `data/loadFavoriteFilms`,
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

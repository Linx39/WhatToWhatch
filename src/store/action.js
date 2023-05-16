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
  RESET_LOADED_FILMS: `data/resetLoadedFilms`,
  RESET_LOADED_PROMO_FILM: `data/resetLoadedPromoFilm`,
  RESET_LOADED_FILM: `data/resetLoadedFilm`,
  RESET_LOADED_COMMENTS: `data/resetLoadedComments`,
  RESET_LOADED_FAVORITE_FILMS: `data/resetLoadedFavoriteFilms`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  LOAD_USER_DATA: `user/loadUserData`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
};

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

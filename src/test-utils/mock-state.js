import {AuthorizationStatus, Genre, NavItem} from "../const";
import {mockUser, mockFilms, mockPromoFilm, mockFilm, mockComments} from "./test-data";

export const mockStateUserAutch = {
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    user: mockUser,
  },
};

export const mockStateUserNoAutch = {
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: {},
  },
};

export const mockState = {
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    user: mockUser,
  },
  DATA: {
    filmsData: {data: mockFilms, isLoading: false, error: null},
    promoFilmData: {data: mockPromoFilm, isLoading: false, error: null},
    filmData: {data: mockFilm, isLoading: false, error: null},
    commentsData: {data: mockComments, isLoading: false, error: null},
    favoriteFilmsData: {data: mockFilms, isLoading: false, error: null},
  },
  APP_ACTIONS: {
    activeGenre: Genre.DEFAULT,
    count: 10,
    activeNavItem: NavItem.OVERVIEW,
  },
};

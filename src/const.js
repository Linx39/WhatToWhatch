export const Patch = {
  MAIN: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  PLAYER: `/player`,
};

export const FilmsCount = {
  MAIN: 8,
  FILMS_LIKE_THIS: 4,
};

export const NavItem = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const GENRE_DEFAULT = `All genres`;

export const GENRE_COUNT = 10;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  UNKNOW: `UNKNOW`,
};

export const AdditionalUrl = {
  FILMS: `/films`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  FAVORITE: `/favorite`,
};

export const RATING_MAX = 10;

export const ReviewTextLength = {
  MIN: 10, // не забыть исправить на 50
  MAX: 400
};

export const AdditionalClassName = {
  HEADER: {
    MOVIE_CARD: `movie-card__head`,
    USER_PAGE: `user-page__head`,
  },
  LOGO: {
    LIGHT: `logo__link--light`,
  },
};

export const ResponseStatus = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAGE_NOT_FOUND: 404,
  SERVER_ERROR: `SERVER_ERROR`,
};

export const InfoText = {
  LOADING: `Loading ... Please wait...`,
  PAGE_NOT_FOUND: `Error 404. Page not found.`,
  SERVER_ERROR: `Server error. Please reload the page.`,
};

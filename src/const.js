export const ReducerName = {
  DATA: `DATA`,
  APP_ACTIONS: `APP_ACTIONS`,
  USER: `USER`
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  PLAYER: `/player`,
};

export const ApiPath = {
  FILMS: `/films`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  FAVORITE: `/favorite`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  UNKNOWN: `UNKNOWN`,
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

export const FilmsCount = {
  MAIN: 8,
  FILMS_LIKE_THIS: 4,
};

export const NavItem = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const Genre = {
  DEFAULT: `All genres`,
  COUNT: 10,
};

export const RatingLevel = [
  {title: `Awesome`, rating: 10},
  {title: `Very good`, rating: 8},
  {title: `Good`, rating: 5},
  {title: `Normal`, rating: 3},
  {title: `Bad`, rating: 0},
];

export const ReviewSetting = {
  TEXT_LENGTH: {
    MIN: 50,
    MAX: 400,
  },
  RATING: {
    DEFAULT: 0,
    MAX: 10,
  },
};

export const AdditionalClassName = {
  HEADER: {
    MOVIE_CARD: `movie-card__head`,
    USER_PAGE: `user-page__head`,
  },
  LOGO: {
    LIGHT: `logo__link--light`,
  },
  MOVIE_CARD_POSTER: {
    BIG: `movie-card__poster--big`,
    SMALL: `movie-card__poster--small`,
  },
};

export const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

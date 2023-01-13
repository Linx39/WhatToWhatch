const ActionType = {
  CHANGE_GENRE: `filmsList/changeGenre`,
  GET_ACTIVE_FILMS_LIST: `filmsList/getActiveFilmsList`,
  GET_ACTIVE_FILMS_LIST_COUNT: `filmsList/getActiveFilmsListCount`,
  RESET_ON_DEFAULT: `filmsList/resetOnDefault`,
  REDIRECT_TO_ROUTE: `films/redirectToRoute`,
  CHANGE_ACTIVE_NAV_ITEM: `film/changeActiveNavItem`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_COMMENTS: `data/loadComments`,
  // POST_COMMENT: `data/postComment`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
};

const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

const getActiveFilmsList = (genre) => ({
  type: ActionType.GET_ACTIVE_FILMS_LIST,
  payload: genre,
});

const getActiveFilmsListCount = () => ({
  type: ActionType.GET_ACTIVE_FILMS_LIST_COUNT,
});

const changeActiveNavItem = (item) => ({
  type: ActionType.CHANGE_ACTIVE_NAV_ITEM,
  payload: item,
});

const resetOnDefault = () => ({
  type: ActionType.RESET_ON_DEFAULT,
});

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film
});

const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

// postComment: () => ({
//   type: ActionType.POST_COMMENT,
// });

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export {
  ActionType,
  changeGenre,
  getActiveFilmsList,
  getActiveFilmsListCount,
  changeActiveNavItem,
  resetOnDefault,
  loadFilms,
  loadFilm,
  loadComments,
  requireAuthorization,
  redirectToRoute,
};

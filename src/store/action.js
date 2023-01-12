export const ActionType = {
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

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getActiveFilmsList: (genre) => ({
    type: ActionType.GET_ACTIVE_FILMS_LIST,
    payload: genre,
  }),
  getActiveFilmsListCount: () => ({
    type: ActionType.GET_ACTIVE_FILMS_LIST_COUNT,
  }),
  changeActiveNavItem: (item) => ({
    type: ActionType.CHANGE_ACTIVE_NAV_ITEM,
    payload: item,
  }),
  resetOnDefault: () => ({
    type: ActionType.RESET_ON_DEFAULT,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  // postComment: () => ({
  //   type: ActionType.POST_COMMENT,
  // }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};

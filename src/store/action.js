export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  GET_FILTERED_FILMS: `films/getFilteredFilms`,
  GET_FILMS_COUNT: `films/getFilmsCount`,
  CHANGE_ACTIVE_NAV_ITEM: `films/changeActiveNavItem`,
  RESET_ON_DEFAULT: `films/resetOnDefault`,
  REDIRECT_TO_ROUTE: `films/redirectToRoute`,
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
  getFilteredFilms: (genre) => ({
    type: ActionType.GET_FILTERED_FILMS,
    payload: genre,
  }),
  getFilmsCount: () => ({
    type: ActionType.GET_FILMS_COUNT,
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
  // postComment: (comment) => ({
  //   type: ActionType.POST_COMMENT,
  //   payload: comment
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

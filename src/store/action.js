export const ActionType = {
  CHANGE_GENRE: `filmsList/changeGenre`,
  CHANGE_ACTIVE_FILMS_LIST: `filmsList/changeActiveFilmsList`,
  CHANGE_ACTIVE_FILMS_LIST_COUNT: `filmsList/changeActiveFilmsListCount`,
  RESET_ON_DEFAULT: `filmsList/resetOnDefault`,
  REDIRECT_TO_ROUTE: `films/redirectToRoute`,
  CHANGE_ACTIVE_NAV_ITEM: `film/changeActiveNavItem`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_COMMENTS: `data/loadComments`,
  // POST_COMMENT: `data/postComment`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const changeActiveFilmsList = (films) => ({
  type: ActionType.CHANGE_ACTIVE_FILMS_LIST,
  payload: films,
});

export const changeActiveFilmsListCount = (count) => ({
  type: ActionType.CHANGE_ACTIVE_FILMS_LIST_COUNT,
  payload: count,
});

export const changeActiveNavItem = (item) => ({
  type: ActionType.CHANGE_ACTIVE_NAV_ITEM,
  payload: item,
});

export const resetOnDefault = () => ({
  type: ActionType.RESET_ON_DEFAULT,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

// postComment: () => ({
//   type: ActionType.POST_COMMENT,
// });

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

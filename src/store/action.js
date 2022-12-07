export const ActionType = {
  CHANGE_GENRE: `wtw/changeGenre`,
  GET_FILTERED_FILMS: `wtw/getFilteredFilms`,
  GET_FILMS_COUNT: `wtw/getFilmsCount`,
  RESET_ON_DEFAULT: `wtw/resetOnDefault`,
  LOAD_FILMS: `data/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
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
  resetOnDefault: () => ({
    type: ActionType.RESET_ON_DEFAULT,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  })
};

export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  GET_FILTERED_FILMS: `films/getFilteredFilms`,
  GET_FILMS_COUNT: `films/getFilmsCount`,
  RESET_ON_DEFAULT: `films/resetOnDefault`,
  LOAD_FILMS: `data/loadFilms`,
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
  resetOnDefault: () => ({
    type: ActionType.RESET_ON_DEFAULT,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  })
};

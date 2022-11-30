export const ActionType = {
  CHANGE_GENRE: `wtw/changeGenre`,
  GET_FILTERED_FILMS: `wtw/getFilteredFilms`,
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
};

import {ActionType} from './action';

import filmsMock from '../mocks/films';
import {GENRE} from '../const';

const initialState = {
  activeGenre: GENRE,
  filteredFilms: filmsMock,
};

const filterFilms = (films, genre) => {
  if (genre === GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };

    case ActionType.GET_FILTERED_FILMS:
      return {
        ...state,
        filteredFilms: filterFilms(filmsMock, action.payload),
      };

    default:
      return state;
  }
};

export {reducer};

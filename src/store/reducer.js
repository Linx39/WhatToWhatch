import {ActionType} from './action';

import films from '../mocks/films';
import {FilmsCount, GENRE_DEFAULT} from '../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  filteredFilms: films,
  filmsCount: FilmsCount.MAIN,
  films,
};

const filterFilms = (items, genre) => {
  if (genre === GENRE_DEFAULT) {
    return items;
  }

  return items.filter((item) => item.genre === genre);
};

const getNewCount = (prevCount) => {
  const newCount = prevCount + FilmsCount.MAIN;

  if (newCount > films.length) {
    return films.length;
  }

  return newCount;
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
        filteredFilms: filterFilms(films, action.payload),
      };

    case ActionType.GET_FILMS_COUNT:
      return {
        ...state,
        filmsCount: getNewCount(state.filmsCount),
      };

    case ActionType.RESET_ON_DEFAULT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export {reducer};

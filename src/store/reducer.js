import {ActionType} from './action';
import {FilmsCount, GENRE_DEFAULT, AuthorizationStatus} from '../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  filteredFilms: [],
  filmsCount: FilmsCount.MAIN,
  films: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
};

const filterFilms = (films, genre) => {
  if (genre === GENRE_DEFAULT) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

const getNewCount = (films, prevCount) => {
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
        filteredFilms: filterFilms(state.films, action.payload),
      };

    case ActionType.GET_FILMS_COUNT:
      return {
        ...state,
        filmsCount: getNewCount(state.films, state.filmsCount),
      };

    case ActionType.RESET_ON_DEFAULT:
      return {
        ...state,
        activeGenre: GENRE_DEFAULT,
        filteredFilms: state.films,
        filmsCount: FilmsCount.MAIN,
      };

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true,
        filteredFilms: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    default:
      return state;
  }
};

export {reducer};

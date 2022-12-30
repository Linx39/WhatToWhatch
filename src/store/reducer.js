import {ActionType} from './action';
import {FilmsCount, GENRE_DEFAULT, AuthorizationStatus, NavItem} from '../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  filteredFilms: [],
  filmsCount: FilmsCount.MAIN,
  activeNavItem: NavItem.OVERVIEW,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  films: [],
  isFilmsLoaded: false,
  filmById: {},
  isFilmsByIdLoaded: false,
  comments: [],
  isCommentsLoaded: false,
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

    case ActionType.CHANGE_ACTIVE_NAV_ITEM:
      return {
        ...state,
        activeNavItem: action.payload,
      };

    case ActionType.RESET_ON_DEFAULT:
      return {
        ...state,
        activeGenre: GENRE_DEFAULT,
        filteredFilms: state.films,
        filmsCount: FilmsCount.MAIN,
        activeNavItem: NavItem.OVERVIEW,
        filmById: {},
        isFilmsByIdLoaded: false,
        comments: [],
        isCommentsLoaded: false,
      };

    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isFilmsLoaded: true,
        filteredFilms: action.payload,
      };

    case ActionType.LOAD_FILM:
      return {
        ...state,
        filmById: action.payload,
        isFilmsByIdLoaded: true,
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };

    default:
      return state;
  }
};

export {reducer};

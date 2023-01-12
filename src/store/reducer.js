import {ActionType} from './action';
import {FilmsCount, GENRE_DEFAULT, AuthorizationStatus, NavItem} from '../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  activeFilmsList: [],
  activeFilmsListCount: FilmsCount.MAIN,
  activeNavItem: NavItem.OVERVIEW,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  films: [],
  isFilmsLoaded: false,
  film: {},
  isFilmLoaded: false,
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

  const count = newCount > films.length ? films.length : newCount;

  // if (newCount > films.length) {
  //   return films.length;
  // }

  return count;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };

    case ActionType.GET_ACTIVE_FILMS_LIST:
      return {
        ...state,
        activeFilmsList: filterFilms(state.films, action.payload),
      };

    case ActionType.GET_ACTIVE_FILMS_LIST_COUNT:
      return {
        ...state,
        activeFilmsListCount: getNewCount(state.films, state.activeFilmsListCount),
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
        activeFilmsList: state.films,
        activeFilmsListCount: FilmsCount.MAIN,
        activeNavItem: NavItem.OVERVIEW,
        film: {},
        isFilmLoaded: false,
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
        activeFilmsList: action.payload,
      };

    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: action.payload,
        isFilmLoaded: true,
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };

    // case ActionType.POST_COMMENT:
    //   return {
    //     ...state,
    //     isCommentsLoaded: false,
    //   };

    default:
      return state;
  }
};

export {reducer};

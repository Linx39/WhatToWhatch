import {ActionType} from './action';
import {FilmsCount, GENRE_DEFAULT, NavItem} from '../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  activeFilmsList: [],
  activeFilmsListCount: FilmsCount.MAIN,
  activeNavItem: NavItem.OVERVIEW,
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

const appAction = (state = initialState, action) => {
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
        // film: {},
        // isFilmLoaded: false,
        // comments: [],
        // isCommentsLoaded: false,
      };

    default:
      return state;
  }
};

export {appAction};

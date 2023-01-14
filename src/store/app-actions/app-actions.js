import {ActionType} from '../action';
import {FilmsCount, GENRE_DEFAULT, NavItem} from '../../const';

const initialState = {
  activeGenre: GENRE_DEFAULT,
  activeFilmsList: [],
  activeFilmsListCount: FilmsCount.MAIN,
  activeNavItem: NavItem.OVERVIEW,
};

const appAction = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };

    case ActionType.CHANGE_ACTIVE_FILMS_LIST:
      return {
        ...state,
        activeFilmsList: action.payload,
      };

    case ActionType.CHANGE_ACTIVE_FILMS_LIST_COUNT:
      return {
        ...state,
        activeFilmsListCount: action.payload,
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
        activeFilmsList: [],
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

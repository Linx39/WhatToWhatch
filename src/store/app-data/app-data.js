import {ActionType} from './action';

const initialState = {
  films: [],
  isFilmsLoaded: false,
  film: {},
  isFilmLoaded: false,
  comments: [],
  isCommentsLoaded: false,
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    // case ActionType.RESET_ON_DEFAULT:
    //   return {
    //     ...state,
    //     film: {},
    //     isFilmLoaded: false,
    //     comments: [],
    //     isCommentsLoaded: false,
    //   };

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

    default:
      return state;
  }
};

export {appData};

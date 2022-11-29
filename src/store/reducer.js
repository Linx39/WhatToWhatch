import {ActionType} from "./action";

const initialState = {
  genre: ``,
  films: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: state.genre,
      };

    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
        films: state.films,
      };

    // default:
    //   throw new Error(`Unknown switch case expression: '${action.type}'!`);
  }
};

export {reducer};

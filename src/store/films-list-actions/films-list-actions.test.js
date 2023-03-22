import {initialState, filmsListAction} from './films-list-actions';
import {ActionType} from '../action';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsListAction(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should change genre by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3};

    const changeActiveGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`,
    };

    expect(filmsListAction(state, changeActiveGenreAction))
      .toEqual({activeGenre: `comedy`, count: 3});
  });

  it(`Reducer should change films count by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3};

    const changeFilmsCountAction = {
      type: ActionType.CHANGE_FILMS_COUNT,
      payload: 10,
    };

    expect(filmsListAction(state, changeFilmsCountAction))
      .toEqual({activeGenre: `drama`, count: 10});
  });

  it(`Reducer should return default`, () => {
    const resetFilmsListAction = {
      type: ActionType.RESET_ON_DEFAULT_FILMS_LIST,
      payload: null,
    };

    expect(filmsListAction({activeGenre: `drama`, count: 4}, resetFilmsListAction))
      .toEqual(initialState);
  });
});

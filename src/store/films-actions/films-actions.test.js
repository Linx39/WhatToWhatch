import {initialState, filmsActions} from './films-actions';
import {ActionType} from '../action';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsActions(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should change genre by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3};

    const changeActiveGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`,
    };

    expect(filmsActions(state, changeActiveGenreAction))
      .toEqual({activeGenre: `comedy`, count: 3});
  });

  it(`Reducer should change films count by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3};

    const changeFilmsCountAction = {
      type: ActionType.CHANGE_FILMS_COUNT,
      payload: 10,
    };

    expect(filmsActions(state, changeFilmsCountAction))
      .toEqual({activeGenre: `drama`, count: 10});
  });

  it(`Reducer should return default`, () => {
    const resetfilmsActions = {
      type: ActionType.RESET_ON_DEFAULT_FILMS_LIST,
      payload: null,
    };

    expect(filmsActions({activeGenre: `drama`, count: 4}, resetfilmsActions))
      .toEqual(initialState);
  });

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsActions(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should change active item by a given value`, () => {
    const state = {activeNavItem: `Details`};

    const changeActiveItemAction = {
      type: ActionType.CHANGE_ACTIVE_NAV_ITEM,
      payload: `Reviews`,
    };

    expect(filmsActions(state, changeActiveItemAction))
      .toEqual({activeNavItem: `Reviews`});
  });

  it(`Reducer should return default`, () => {
    const resetfilmsActions = {
      type: ActionType.RESET_ON_DEFAULT_FILM_INFO,
      payload: null,
    };

    expect(filmsActions({activeNavItem: `Reviews`}, resetfilmsActions))
      .toEqual(initialState);
  });
});

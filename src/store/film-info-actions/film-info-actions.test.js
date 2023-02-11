import {initialState, filmInfoAction} from './film-info-actions';
import {ActionType} from '../action';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmInfoAction(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should change active item by a given value`, () => {
    const state = {activeNavItem: `Details`};

    const changeActiveItemAction = {
      type: ActionType.CHANGE_ACTIVE_NAV_ITEM,
      payload: `Reviews`,
    };

    expect(filmInfoAction(state, changeActiveItemAction))
      .toEqual({activeNavItem: `Reviews`});
  });

  it(`Reducer should return default`, () => {
    const resetFilmsListAction = {
      type: ActionType.RESET_ON_DEFAULT_FILM_INFO,
      payload: null,
    };

    expect(filmInfoAction({activeNavItem: `Reviews`}, resetFilmsListAction))
      .toEqual(initialState);
  });
});

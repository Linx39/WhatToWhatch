import {initialState, appActions} from './app-actions';
import {ActionType} from '../action';
import {NavItem} from '../../const';

describe(`Reducer 'appActions' work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appActions(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should change genre by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, activeNavItem: NavItem.DETAILS};

    const changeActiveGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`,
    };

    expect(appActions(state, changeActiveGenreAction))
      .toEqual({activeGenre: `comedy`, count: 3, activeNavItem: NavItem.DETAILS});
  });

  it(`Reducer should change films count by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, activeNavItem: NavItem.DETAILS};

    const changeFilmsCountAction = {
      type: ActionType.CHANGE_FILMS_COUNT,
    };

    expect(appActions(state, changeFilmsCountAction))
      .toEqual({activeGenre: `drama`, count: 11, activeNavItem: NavItem.DETAILS});
  });

  it(`Reducer should change active item by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, activeNavItem: NavItem.DETAILS};

    const changeActiveItemAction = {
      type: ActionType.CHANGE_ACTIVE_NAV_ITEM,
      payload: NavItem.REVIEWS,
    };

    expect(appActions(state, changeActiveItemAction))
      .toEqual({activeGenre: `drama`, count: 3, activeNavItem: NavItem.REVIEWS});
  });

  it(`Reducer should return default MainPage`, () => {
    const state = {activeGenre: `drama`, count: 4, activeNavItem: NavItem.REVIEWS};

    const resetAppActions = {
      type: ActionType.RESET_ON_DEFAULT_MAIN_PAGE,
    };

    expect(appActions(state, resetAppActions))
      .toEqual({...initialState, activeNavItem: NavItem.REVIEWS});
  });

  it(`Reducer should return default FilmPage`, () => {
    const state = {activeGenre: `drama`, count: 4, activeNavItem: NavItem.REVIEWS};

    const resetAppActions = {
      type: ActionType.RESET_ON_DEFAULT_FILM_PAGE,
    };

    expect(appActions(state, resetAppActions))
      .toEqual({...initialState, activeGenre: `drama`, count: 4});
  });

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appActions(undefined, {}))
      .toEqual(initialState);
  });
});

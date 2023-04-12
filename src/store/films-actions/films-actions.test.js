import {initialState, filmsActions} from './films-actions';
import {ActionType} from '../action';
import {NavItem} from '../../const';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsActions(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should change genre by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, activeNavItem: NavItem.DETAILS};

    const changeActiveGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`,
    };

    expect(filmsActions(state, changeActiveGenreAction))
      .toEqual({activeGenre: `comedy`, count: 3, activeNavItem: NavItem.DETAILS});
  });

  it(`Reducer should change films count by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, activeNavItem: NavItem.DETAILS};

    const changeFilmsCountAction = {
      type: ActionType.CHANGE_FILMS_COUNT,
      payload: 10,
    };

    expect(filmsActions(state, changeFilmsCountAction))
      .toEqual({activeGenre: `drama`, count: 10, activeNavItem: NavItem.DETAILS});
  });

  it(`Reducer should change active item by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, activeNavItem: NavItem.DETAILS};

    const changeActiveItemAction = {
      type: ActionType.CHANGE_ACTIVE_NAV_ITEM,
      payload: NavItem.REVIEWS,
    };

    expect(filmsActions(state, changeActiveItemAction))
      .toEqual({activeGenre: `drama`, count: 3, activeNavItem: NavItem.REVIEWS});
  });

  it(`Reducer should return default Main Page`, () => {
    const state = {activeGenre: `drama`, count: 4, activeNavItem: NavItem.REVIEWS};

    const resetfilmsActions = {
      type: ActionType.RESET_ON_DEFAULT_MAIN_PAGE,
      payload: null,
    };

    expect(filmsActions(state, resetfilmsActions))
      .toEqual({...initialState, activeNavItem: NavItem.REVIEWS});
  });

  it(`Reducer should return default Film Page`, () => {
    const state = {activeGenre: `drama`, count: 4, activeNavItem: NavItem.REVIEWS};

    const resetfilmsActions = {
      type: ActionType.RESET_ON_DEFAULT_FILM_PAGE,
      payload: null,
    };

    expect(filmsActions(state, resetfilmsActions))
      .toEqual({...initialState, activeGenre: `drama`, count: 4});
  });

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsActions(undefined, {}))
      .toEqual(initialState);
  });
});

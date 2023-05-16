import {
  initialState,
  appActionsReducer,
  changeGenre,
  changeFilmsCount,
  changeActiveNavItem,
  resetOnDefaultMainPage,
  resetOnDefaultFilmPage
} from './app-actions';
import {NavItem} from '../../const';

describe(`appActionsReducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appActionsReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should change genre by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, activeNavItem: NavItem.DETAILS};

    const changeActiveGenreAction = {
      type: changeGenre,
      payload: `comedy`,
    };

    expect(appActionsReducer(state, changeActiveGenreAction))
      .toEqual({activeGenre: `comedy`, count: 3, activeNavItem: NavItem.DETAILS});
  });

  it(`Reducer should change films count by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, activeNavItem: NavItem.DETAILS};

    const changeFilmsCountAction = {
      type: changeFilmsCount,
    };

    expect(appActionsReducer(state, changeFilmsCountAction))
      .toEqual({activeGenre: `drama`, count: 11, activeNavItem: NavItem.DETAILS});
  });

  it(`Reducer should change active item by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, activeNavItem: NavItem.DETAILS};

    const changeActiveItemAction = {
      type: changeActiveNavItem,
      payload: NavItem.REVIEWS,
    };

    expect(appActionsReducer(state, changeActiveItemAction))
      .toEqual({activeGenre: `drama`, count: 3, activeNavItem: NavItem.REVIEWS});
  });

  it(`Reducer should return default MainPage`, () => {
    const state = {activeGenre: `drama`, count: 4, activeNavItem: NavItem.REVIEWS};

    const resetAppActions = {
      type: resetOnDefaultMainPage,
    };

    expect(appActionsReducer(state, resetAppActions))
      .toEqual({...initialState, activeNavItem: NavItem.REVIEWS});
  });

  it(`Reducer should return default FilmPage`, () => {
    const state = {activeGenre: `drama`, count: 4, activeNavItem: NavItem.REVIEWS};

    const resetAppActions = {
      type: resetOnDefaultFilmPage,
    };

    expect(appActionsReducer(state, resetAppActions))
      .toEqual({...initialState, activeGenre: `drama`, count: 4});
  });
});

import {
  changeGenre,
  changeFilmsCount,
  resetOnDefaultMainPage,
  changeActiveNavItem,
  resetOnDefaultFilmPage,
  ActionType,
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
    const genre = `comedy`;
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: genre,
    };

    expect(changeGenre(genre)).toEqual(expectedAction);
  });

  it(`Action creator for change films count returns correct action`, () => {
    const count = 5;
    const expectedAction = {
      type: ActionType.CHANGE_FILMS_COUNT,
      payload: count,
    };

    expect(changeFilmsCount(count)).toEqual(expectedAction);
  });

  it(`Action creator for reset on default films list returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_ON_DEFAULT_MAIN_PAGE,
    };

    expect(resetOnDefaultMainPage()).toEqual(expectedAction);
  });

  it(`Action creator for change active item returns correct action`, () => {
    const item = `Details`;
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_NAV_ITEM,
      payload: item,
    };

    expect(changeActiveNavItem(item)).toEqual(expectedAction);
  });

  it(`Action creator for reset on default films info returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_ON_DEFAULT_FILM_PAGE,
    };

    expect(resetOnDefaultFilmPage()).toEqual(expectedAction);
  });
});

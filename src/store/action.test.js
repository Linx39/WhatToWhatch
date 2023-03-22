import {
  changeGenre,
  changeFilmsCount,
  resetOnDefaultFilmsList,
  changeActiveNavItem,
  resetOnDefaultFilmInfo,
  ActionType,
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`,
    };

    expect(changeGenre(`comedy`)).toEqual(expectedAction);
  });

  it(`Action creator for change films count returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_FILMS_COUNT,
      payload: 5,
    };

    expect(changeFilmsCount(5)).toEqual(expectedAction);
  });

  it(`Action creator for reset on default films list returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_ON_DEFAULT_FILMS_LIST,
    };

    expect(resetOnDefaultFilmsList()).toEqual(expectedAction);
  });

  it(`Action creator for change active item returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_NAV_ITEM,
      payload: `Details`,
    };

    expect(changeActiveNavItem(`Details`)).toEqual(expectedAction);
  });

  it(`Action creator for reset on default films info returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_ON_DEFAULT_FILM_INFO,
    };

    expect(resetOnDefaultFilmInfo()).toEqual(expectedAction);
  });
});

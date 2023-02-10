import {filmsListAction} from './films-list-actions';
import {ActionType} from '../action';
import {GENRE_DEFAULT, FilmsCount} from '../../const';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsListAction(undefined, {}))
      .toEqual({activeGenre: GENRE_DEFAULT, count: FilmsCount.MAIN, filmsList: []});
  });

  it(`Reducer should change genre by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, filmsList: []};

    const changeActiveGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`,
    };

    expect(filmsListAction(state, changeActiveGenreAction))
      .toEqual({activeGenre: `comedy`, count: 3, filmsList: []});
  });

  it(`Reducer should change films count by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, filmsList: []};

    const changeFilmsCountAction = {
      type: ActionType.CHANGE_FILMS_COUNT,
      payload: 10,
    };

    expect(filmsListAction(state, changeFilmsCountAction))
      .toEqual({activeGenre: `drama`, count: 10, filmsList: []});
  });

  it(`Reducer should change films list by a given value`, () => {
    const state = {activeGenre: `drama`, count: 3, filmsList: []};

    const films = [{id: 1, name: ``}, {id: 2, name: ``}];

    const changeFilmsListAction = {
      type: ActionType.CHANGE_FILMS_COUNT,
      payload: films,
    };

    expect(filmsListAction(state, changeFilmsListAction))
      .toEqual({activeGenre: `drama`, count: 3, filmsList: films});
  });

  it(`Reducer should return default`, () => {
    const resetFilmsListAction = {
      type: ActionType.RESET_ON_DEFAULT_FILMS_LIST,
      payload: null,
    };

    const defaultState = {activeGenre: GENRE_DEFAULT, count: FilmsCount.MAIN, filmsList: []};

    const films = [{id: 1, name: ``}, {id: 2, name: ``}];

    expect(filmsListAction({activeGenre: `drama`, count: 4, filmsList: films}, resetFilmsListAction))
      .toEqual(defaultState);
  });
});

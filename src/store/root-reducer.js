import {combineReducers} from 'redux';

import {appData} from './app-data/app-data';
import {filmsListAction} from './films-list-actions/films-list-actions';
import {filmInfoAction} from './film-actions/film-actions';
import {userData} from './user-data/user-data';

export const ReducerName = {
  DATA: `DATA`,
  FILMS_LIST_ACTIONS: `FILMS_LIST_ACTIONS`,
  FILM_INFO_ACTIONS: `FILM_INFO_ACTIONS`,
  USER: `USER`
};

export default combineReducers({
  [ReducerName.DATA]: appData,
  [ReducerName.FILMS_LIST_ACTIONS]: filmsListAction,
  [ReducerName.FILM_INFO_ACTIONS]: filmInfoAction,
  [ReducerName.USER]: userData,
});

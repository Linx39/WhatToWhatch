import {combineReducers} from 'redux';

import {appData} from './app-data/app-data';
import {filmsActions} from './films-actions/films-actions';
import {userData} from './user-data/user-data';

export const ReducerName = {
  DATA: `DATA`,
  FILMS_ACTIONS: `FILMS_ACTIONS`,
  USER: `USER`
};

export default combineReducers({
  [ReducerName.DATA]: appData,
  [ReducerName.FILMS_ACTIONS]: filmsActions,
  [ReducerName.USER]: userData,
});

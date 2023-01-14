import {combineReducers} from 'redux';
import {appAction} from './app-actions/app-actions';
import {appData} from './app-data/app-data';
import {user} from './user/user';

export const ReducerName = {
  DATA: `DATA`,
  ACTIONS: `ACTIONS`,
  USER: `USER`
};

export default combineReducers({
  [ReducerName.DATA]: appData,
  [ReducerName.ACTIONS]: appAction,
  [ReducerName.USER]: user,
});

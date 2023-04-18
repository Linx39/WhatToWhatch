import {combineReducers} from 'redux';

import {appData} from './app-data/app-data';
import {appActions} from './app-actions/app-actions';
import {userData} from './user-data/user-data';

export const ReducerName = {
  DATA: `DATA`,
  APP_ACTIONS: `APP_ACTIONS`,
  USER: `USER`
};

export default combineReducers({
  [ReducerName.DATA]: appData,
  [ReducerName.APP_ACTIONS]: appActions,
  [ReducerName.USER]: userData,
});

import {combineReducers} from 'redux';
import {appAction} from './app-actions/app-actions';
import {appData} from './app-data/app-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  ACTIONS: `ACTIONS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.ACTIONS]: appAction,
  [NameSpace.USER]: user,
});

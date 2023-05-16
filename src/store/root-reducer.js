import {combineReducers} from 'redux';

import {appDataReducer} from './app-data/app-data';
import {appActionsReducer} from './app-actions/app-actions';
import {userDataReducer} from './user-data/user-data';
import {ReducerName} from '../const';

export default combineReducers({
  [ReducerName.DATA]: appDataReducer,
  [ReducerName.APP_ACTIONS]: appActionsReducer,
  [ReducerName.USER]: userDataReducer,
});

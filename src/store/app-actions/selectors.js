import {ReducerName} from '../../const';

export const getActiveGenre = (state) => state[ReducerName.APP_ACTIONS].activeGenre;

export const getCount = (state) => state[ReducerName.APP_ACTIONS].count;

export const getActiveNavItem = (state) => state[ReducerName.APP_ACTIONS].activeNavItem;

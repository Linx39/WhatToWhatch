import {ReducerName} from '../root-reducer';

export const getActiveGenre = (state) => state[ReducerName.ACTIONS].activeGenre;
export const getActiveFilmsList = (state) => state[ReducerName.ACTIONS].activeFilmsList;
export const getActiveFilmsListCount = (state) => state[ReducerName.ACTIONS].activeFilmsListCount;
export const getActiveNavItem = (state) => state[ReducerName.ACTIONS].activeNavItem;

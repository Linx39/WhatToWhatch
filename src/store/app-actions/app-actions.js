import {createSlice} from '@reduxjs/toolkit';

import {ReducerName, Genre, FilmsCount, NavItem} from '../../const';

export const initialState = {
  activeGenre: Genre.DEFAULT,
  count: FilmsCount.MAIN,
  activeNavItem: NavItem.OVERVIEW,
};

export const appActions = createSlice({
  name: ReducerName.APP_ACTIONS,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.activeGenre = action.payload;
    },
    changeFilmsCount: (state) => {
      state.count += FilmsCount.MAIN;
    },
    changeActiveNavItem: (state, action) => {
      state.activeNavItem = action.payload;
    },
    resetOnDefaultMainPage: (state) => {
      state.activeGenre = initialState.activeGenre;
      state.count = initialState.count;
    },
    resetOnDefaultFilmPage: (state) => {
      state.activeNavItem = initialState.activeNavItem;
    },
  }
});

export const {
  changeGenre,
  changeFilmsCount,
  changeActiveNavItem,
  resetOnDefaultMainPage,
  resetOnDefaultFilmPage
} = appActions.actions;

export const appActionsReducer = appActions.reducer;

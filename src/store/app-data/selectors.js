import {createSelector} from '@reduxjs/toolkit';

import {ReducerName} from '../root-reducer';
import {getUniqueGenres} from '../../utils';

export const getFilms = (state) => state[ReducerName.DATA].filmsData.data;

export const getIsFilmsLoading = (state) => state[ReducerName.DATA].filmsData.isLoading;

export const getFilmsError = (state) => state[ReducerName.DATA].filmsData.error;

export const getPromoFilm = (state) => state[ReducerName.DATA].promoFilmData.data;

export const getIsPromoFilmLoading = (state) => state[ReducerName.DATA].promoFilmData.isLoading;

export const getPromoFilmError = (state) => state[ReducerName.DATA].promoFilmData.error;

export const getFilm = (state) => state[ReducerName.DATA].filmData.data;

export const getIsFilmLoading = (state) => state[ReducerName.DATA].filmData.isLoading;

export const getFilmError = (state) => state[ReducerName.DATA].filmData.error;

export const getComments = (state) => state[ReducerName.DATA].commentsData.data;

export const getIsCommentsLoading = (state) => state[ReducerName.DATA].commentsData.isLoading;

export const getCommentsError = (state) => state[ReducerName.DATA].commentsData.error;

export const getFavoriteFilms = (state) => state[ReducerName.DATA].favoriteFilmsData.data;

export const getIsFavoriteFilmsLoading = (state) => state[ReducerName.DATA].favoriteFilmsData.isLoading;

export const getFavoriteFilmsError = (state) => state[ReducerName.DATA].favoriteFilmsData.error;


export const getGenresList = createSelector(
    getFilms,
    (films) => getUniqueGenres(films)
);

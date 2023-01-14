import {ReducerName} from '../root-reducer';

export const getFilms = (state) => state[ReducerName.DATA].films;
export const getFilmsLoadedStatus = (state) => state[ReducerName.DATA].isFilmsLoaded;
export const getFilm = (state) => state[ReducerName.DATA].film;
export const getFilmLoadedStatus = (state) => state[ReducerName.DATA].isFilmLoaded;
export const getComments = (state) => state[ReducerName.DATA].comments;
export const getCommentsLoadedStatus = (state) => state[ReducerName.DATA].isCommentsLoaded;

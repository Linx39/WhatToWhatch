import {useState} from 'react';
import {useSelector} from 'react-redux';

import {dispatchData} from './dispath-data';
import {FetchingStatus} from '../../const';

export const useFetchData = ({fetchFilms, fetchPromoFilm, fetchFilm, fetchComments, fetchFavoriteFilms, id}) => {
  const {films, isFilmsLoading, promoFilm, isPromoFilmLoading, film, isFilmLoading, comments, isCommentsLoading, favoriteFilms, isFavoriteFilmsLoading} = useSelector((state) => state.DATA);
  const [fetchingStatus, setFetchingStatus] = useState(FetchingStatus.LOADING);

  let isDataLoading;

  if (fetchFilms) {
    dispatchData(fetchFilms, setFetchingStatus);
    isDataLoading = isDataLoading || isFilmsLoading;
  }

  if (fetchPromoFilm) {
    dispatchData(fetchPromoFilm, setFetchingStatus);
    isDataLoading = isDataLoading || isPromoFilmLoading;
  }

  if (fetchFilm) {
    dispatchData(fetchFilm, setFetchingStatus, id);
    isDataLoading = isDataLoading || isFilmLoading;
  }

  if (fetchComments) {
    dispatchData(fetchComments, setFetchingStatus, id);
    isDataLoading = isDataLoading || isCommentsLoading;
  }

  if (fetchFavoriteFilms) {
    dispatchData(fetchFavoriteFilms, setFetchingStatus);
    isDataLoading = isDataLoading || isFavoriteFilmsLoading;
  }

  return [
    {
      films,
      promoFilm,
      film,
      comments,
      favoriteFilms,
    },
    isDataLoading,
    fetchingStatus,
  ];
};

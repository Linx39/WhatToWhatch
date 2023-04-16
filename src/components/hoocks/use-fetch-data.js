import {useState} from 'react';
import {useSelector} from 'react-redux';

import {dispatchData} from './dispath-data';
import {FetchingStatus} from '../../const';

export const useFetchData = ({fetchFilms, fetchPromoFilm, fetchFilm, fetchComments, fetchFavoriteFilms, id}) => {
  const {
    films,
    isFilmsLoading,
    promoFilm,
    isPromoFilmLoading,
    film,
    isFilmLoading,
    comments,
    isCommentsLoading,
    favoriteFilms,
    isFavoriteFilmsLoading
  } = useSelector((state) => state.DATA);
  const [fetchingStatus, setFetchingStatus] = useState(FetchingStatus.LOADING);

  let isDataLoaded = true;

  if (fetchFilms) {
    dispatchData(fetchFilms, setFetchingStatus);
    isDataLoaded = isDataLoaded && !isFilmsLoading;
  }

  if (fetchPromoFilm) {
    dispatchData(fetchPromoFilm, setFetchingStatus);
    isDataLoaded = isDataLoaded && !isPromoFilmLoading;
  }

  if (fetchFilm) {
    dispatchData(fetchFilm, setFetchingStatus, id);
    isDataLoaded = isDataLoaded && !isFilmLoading;
  }

  if (fetchComments) {
    dispatchData(fetchComments, setFetchingStatus, id);
    isDataLoaded = isDataLoaded && !isCommentsLoading;
  }

  if (fetchFavoriteFilms) {
    dispatchData(fetchFavoriteFilms, setFetchingStatus);
    isDataLoaded = isDataLoaded && !isFavoriteFilmsLoading;
  }

  return [
    {
      films,
      promoFilm,
      film,
      comments,
      favoriteFilms,
    },
    isDataLoaded,
    fetchingStatus,
  ];
};

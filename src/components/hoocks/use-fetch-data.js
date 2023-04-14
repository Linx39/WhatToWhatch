import {useState} from 'react';
import {useSelector} from 'react-redux';

import {dispatchData} from './dispath-data';
import {FetchingStatus} from '../../const';

export const useFetchData = ({fetchFilms, fetchPromoFilm, fetchFilm, fetchComments, fetchFavoriteFilms, id}) => {
  const {
    films,
    isFilmsLoaded,
    promoFilm,
    isPromoFilmLoaded,
    film,
    isFilmLoaded,
    comments,
    isCommentsLoaded,
    favoriteFilms,
    isFavoriteFilmsLoaded
  } = useSelector((state) => state.DATA);
  const [fetchingStatus, setFetchingStatus] = useState(FetchingStatus.LOADING);

  let isDataLoaded = true;

  if (fetchFilms) {
    dispatchData(fetchFilms, isFilmsLoaded, setFetchingStatus);
    isDataLoaded = isDataLoaded && isFilmsLoaded;
  }

  if (fetchPromoFilm) {
    dispatchData(fetchPromoFilm, isPromoFilmLoaded, setFetchingStatus);
    isDataLoaded = isDataLoaded && isPromoFilmLoaded;
  }

  if (fetchFilm) {
    dispatchData(fetchFilm, isFilmLoaded, setFetchingStatus, id);
    isDataLoaded = isDataLoaded && isFilmLoaded;
  }

  if (fetchComments) {
    dispatchData(fetchComments, isCommentsLoaded, setFetchingStatus, id);
    isDataLoaded = isDataLoaded && isCommentsLoaded;
  }

  if (fetchFavoriteFilms) {
    dispatchData(fetchFavoriteFilms, isFavoriteFilmsLoaded, setFetchingStatus);
    isDataLoaded = isDataLoaded && isFavoriteFilmsLoaded;
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

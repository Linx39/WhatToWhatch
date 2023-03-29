import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import LoadingPage from '../pages/info-page/loading-page/loading-page';
import ErrorPage from '../pages/info-page/error-page/error-page';
import NotFoundPage from '../pages/info-page/not-found-page/not-found-page';
import {dispatchData} from './dispath-data';

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
  const [isNotFoundError, setisNotFoundError] = useState(false);
  const [isFetchingError, setIsFetchingError] = useState(false);

  let isDataLoaded = true;

  if (fetchFilms) {
    dispatchData(fetchFilms, isFilmsLoaded, setisNotFoundError, setIsFetchingError);
    isDataLoaded = isDataLoaded && isFilmsLoaded;
  }

  if (fetchPromoFilm) {
    dispatchData(fetchPromoFilm, isPromoFilmLoaded, setisNotFoundError, setIsFetchingError);
    isDataLoaded = isDataLoaded && isPromoFilmLoaded;
  }

  if (fetchFilm) {
    dispatchData(fetchFilm, isFilmLoaded, setisNotFoundError, setIsFetchingError, id);
    isDataLoaded = isDataLoaded && isFilmLoaded;
  }

  if (fetchComments) {
    dispatchData(fetchComments, isCommentsLoaded, setisNotFoundError, setIsFetchingError, id);
    isDataLoaded = isDataLoaded && isCommentsLoaded;
  }

  if (fetchFavoriteFilms) {
    dispatchData(fetchFavoriteFilms, isFavoriteFilmsLoaded, setisNotFoundError, setIsFetchingError);
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
    {
      isDataLoaded,
      isFetchingError,
      isNotFoundError,
    },
  ];
};

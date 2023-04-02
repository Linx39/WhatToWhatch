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
  const [isFetching, setIsFetching] = useState(true);
  const [isNotFoundError, setisNotFoundError] = useState(false);
  const [isFetchingError, setIsFetchingError] = useState(false);

  if (fetchFilms) {
    dispatchData(fetchFilms, isFilmsLoaded, setIsFetching, setisNotFoundError, setIsFetchingError);
    // isFetching = isFetching && isFilmsLoaded;
  }

  if (fetchPromoFilm) {
    dispatchData(fetchPromoFilm, isPromoFilmLoaded, setIsFetching, setisNotFoundError, setIsFetchingError);
    // isFetching = isFetching && isPromoFilmLoaded;
  }

  if (fetchFilm) {
    dispatchData(fetchFilm, isFilmLoaded, setIsFetching, setisNotFoundError, setIsFetchingError, id);
    // isFetching = isFetching && isFilmLoaded;
  }

  if (fetchComments) {
    dispatchData(fetchComments, isCommentsLoaded, setIsFetching, setisNotFoundError, setIsFetchingError, id);
    // isFetching = isFetching && isCommentsLoaded;
  }

  if (fetchFavoriteFilms) {
    dispatchData(fetchFavoriteFilms, isFavoriteFilmsLoaded, setIsFetching, setisNotFoundError, setIsFetchingError);
    // isFetching = isFetching && isFavoriteFilmsLoaded;
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
      isFetching,
      isFetchingError,
      isNotFoundError,
    },
  ];
};

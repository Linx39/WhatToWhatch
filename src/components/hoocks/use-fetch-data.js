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
  const [isLoaded, setIsLoaded] = useState(true);
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const [isFetchingError, setIsFetchingError] = useState(false);

  // let isLoaded = true;

  if (fetchFilms) {
    dispatchData(fetchFilms, isFilmsLoaded, isLoaded, setIsLoaded, setIsNotFoundPage, setIsFetchingError);
    // isLoaded = isLoaded && isFilmLoaded;
  }

  if (fetchPromoFilm) {
    dispatchData(fetchPromoFilm, isPromoFilmLoaded, isLoaded, setIsLoaded, setIsNotFoundPage, setIsFetchingError);
    // isLoaded = isLoaded && isPromoFilmLoaded;
  }

  if (fetchFilm) {
    dispatchData(fetchFilm, isFilmLoaded, isLoaded, setIsLoaded, setIsNotFoundPage, setIsFetchingError, id);
    // isLoaded = isLoaded && isFilmLoaded;
  }

  if (fetchComments) {
    dispatchData(fetchComments, isCommentsLoaded, isLoaded, setIsLoaded, setIsNotFoundPage, setIsFetchingError, id);
    // isLoaded = isLoaded && isCommentsLoaded;
  }

  if (fetchFavoriteFilms) {
    dispatchData(fetchFavoriteFilms, isFavoriteFilmsLoaded, isLoaded, setIsLoaded, setIsNotFoundPage, setIsFetchingError);
    // isLoaded = isLoaded && isFavoriteFilmsLoaded;
  }

  return [
    {
      films,
      promoFilm,
      film,
      comments,
      favoriteFilms,
    },
    isLoaded,
    isFetchingError,
    isNotFoundPage
  ];
};

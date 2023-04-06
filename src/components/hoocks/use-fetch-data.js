import {useState} from 'react';
import {useSelector} from 'react-redux';

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
  const [isNotFoundError, setIsNotFoundError] = useState(false);
  const [isFetchingError, setIsFetchingError] = useState(false);

  let isDataLoaded = true;

  if (fetchFilms) {
    dispatchData(fetchFilms, isFilmsLoaded, setIsNotFoundError, setIsFetchingError);
    isDataLoaded = isDataLoaded && isFilmsLoaded;
  }

  if (fetchPromoFilm) {
    dispatchData(fetchPromoFilm, isPromoFilmLoaded, setIsNotFoundError, setIsFetchingError);
    isDataLoaded = isDataLoaded && isPromoFilmLoaded;
  }

  if (fetchFilm) {
    dispatchData(fetchFilm, isFilmLoaded, setIsNotFoundError, setIsFetchingError, id);
    isDataLoaded = isDataLoaded && isFilmLoaded;
  }

  if (fetchComments) {
    dispatchData(fetchComments, isCommentsLoaded, setIsNotFoundError, setIsFetchingError, id);
    isDataLoaded = isDataLoaded && isCommentsLoaded;
  }

  if (fetchFavoriteFilms) {
    dispatchData(fetchFavoriteFilms, isFavoriteFilmsLoaded, setIsNotFoundError, setIsFetchingError);
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
    }
  ];
};

import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import LoadingPage from '../pages/info-page/loading-page/loading-page';
import ErrorPage from '../pages/info-page/error-page/error-page';
import NotFoundPage from '../pages/info-page/not-found-page/not-found-page';
import {fetchFilms, fetchFilm, fetchComments} from '../../store/api-actions';
import {HttpCode} from '../../const';


export const useFetch = (id) => {
  const {films, isFilmsLoaded, film, isFilmLoaded, comments, isCommentsLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const [isFetchingError, setIsFetchingError] = useState(false);

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilms())
      .catch(() => {
        setIsFetchingError(true);
        return;
      });
    }
  }, [isFilmsLoaded]);

  useEffect(() => {
    if (!isFilmLoaded) {
      dispatch(fetchFilm(id))
      .catch((err) => {
        if (err === HttpCode.PAGE_NOT_FOUND) {
          setIsNotFoundPage(true);
        }
        setIsFetchingError(true);
        return;
      });
    }
  }, [isFilmLoaded]);

  useEffect(() => {
    if (!isCommentsLoaded) {
      dispatch(fetchComments(id))
      .catch((err) => {
        if (err === HttpCode.PAGE_NOT_FOUND) {
          setIsNotFoundPage(true);
        }
        setIsFetchingError(true);
        return;
      });
    }
  }, [isCommentsLoaded]);

  const handleInfoPages = () => {
    if ((!isFilmsLoaded || !isFilmLoaded || !isCommentsLoaded) && !isFetchingError) {
      return (
        <LoadingPage />
      );
    }

    if (isFetchingError && !isNotFoundPage) {
      return (
        <ErrorPage />
      );
    }

    if (isNotFoundPage) {
      return (
        <NotFoundPage />
      );
    }
  };

  return [films, film, comments, handleInfoPages];
};

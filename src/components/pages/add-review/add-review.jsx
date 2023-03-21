import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import Header from '../../common-components/header/header';
import BreadCrumbs from './breadcrumbs/breadcrumbs';
import AddReviewForm from './add-revew-form/add-revew-form';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import NotFoundPage from '../info-page/not-found-page/not-found-page';
import {fetchFilm} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {Patch, HttpCode} from '../../../const';

const AddReview = () => {
  const {id} = useParams();
  const {film, isFilmLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  const handleFilmNameClick = () => dispatch(redirectToRoute((`${Patch.FILMS}/${id}`)));
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);

  useEffect(() => {
    if (!isFilmLoaded) {
      dispatch(fetchFilm(id))
      .catch((err) => {
        if (err === HttpCode.PAGE_NOT_FOUND) {
          setIsNotFoundPage(true);
        }
        setIsErrorLoading(true);
      });
    }
  }, [isFilmLoaded]);

  if (!isFilmLoaded && !isErrorLoading) {
    return (
      <LoadingPage />
    );
  }

  if (isErrorLoading && !isNotFoundPage) {
    return (
      <ErrorPage />
    );
  }

  if (isNotFoundPage) {
    return (
      <NotFoundPage />
    );
  }

  const {name, posterImage, backgroundImage} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <MovieCardBig src={backgroundImage} alt={name} />

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <BreadCrumbs name={name} onClick={handleFilmNameClick} />
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm film={film} />
    </section>
  );
};

export default AddReview;

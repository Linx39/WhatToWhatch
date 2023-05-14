import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import BreadCrumbs from './breadcrumbs/breadcrumbs';
import AddReviewForm from './add-revew-form/add-revew-form';
import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import Header from '../../common-components/header/header';
import MovieCardPoster from '../../common-components/movie-card-poster/movie-card-poster';
import LoadingPage from '../info-page/loading-page/loading-page';
import NotFoundPage from '../info-page/not-found-page/not-found-page';
import ErrorPage from '../info-page/error-page/error-page';
import {fetchFilm} from '../../../store/api-actions';
import {
  getFilm,
  getFilmError,
  getIsFilmLoading,
} from '../../../store/app-data/selectors';
import {redirectToRoute} from '../../../store/action';
import {AppRoute, ResponseStatus, AdditionalClassName} from '../../../const';

const AddReview = () => {
  const {id} = useParams();
  const film = useSelector(getFilm);
  const isFilmLoading = useSelector(getIsFilmLoading);
  const filmError = useSelector(getFilmError);
  const dispatch = useDispatch();

  const handleFilmNameClick = () => dispatch(redirectToRoute((`${AppRoute.FILMS}/${id}`)));

  useEffect(() => {
    if (film.id !== +id) {
      dispatch(fetchFilm(id));
    }
  }, [dispatch]);

  if (isFilmLoading) {
    return <LoadingPage />;
  }

  if (filmError === ResponseStatus.PAGE_NOT_FOUND) {
    return <NotFoundPage />;
  }

  if (filmError && filmError !== ResponseStatus.PAGE_NOT_FOUND) {
    return <ErrorPage />;
  }

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <MovieCardBig film={film} />

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <BreadCrumbs film={film} onClick={handleFilmNameClick} />
        </Header>

        <MovieCardPoster film={film} additionalClassName={AdditionalClassName.MOVIE_CARD_POSTER.SMALL} />
      </div>

      <AddReviewForm film={film} />
    </section>
  );
};

export default AddReview;

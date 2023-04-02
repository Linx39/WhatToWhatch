import React from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import Header from '../../common-components/header/header';
import BreadCrumbs from './breadcrumbs/breadcrumbs';
import AddReviewForm from './add-revew-form/add-revew-form';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import NotFoundPage from '../info-page/not-found-page/not-found-page';
import {fetchFilm} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {useFetchData} from '../../hoocks/use-fetch-data';
import {Patch} from '../../../const';

const AddReview = () => {
  const {id} = useParams();
  const [
    {film},
    {isDataLoaded, isFetchingError, isNotFoundError}
  ] = useFetchData({fetchFilm, id});
  const dispatch = useDispatch();

  const handleFilmNameClick = () => dispatch(redirectToRoute((`${Patch.FILMS}/${id}`)));

  if (!isDataLoaded && !isFetchingError) {
    return (
      <LoadingPage />
    );
  }

  if (isFetchingError && !isNotFoundError) {
    return (
      <ErrorPage />
    );
  }

  if (isNotFoundError) {
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

import React from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import Header from '../../common-components/header/header';
import BreadCrumbs from './breadcrumbs/breadcrumbs';
import AddReviewForm from './add-revew-form/add-revew-form';
import InfoPage from '../info-page/info-page';
import {useFetchData} from '../../hoocks/use-fetch-data';
import {fetchFilm} from '../../../store/api-actions';
import {redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';

const AddReview = () => {
  const {id} = useParams();
  const [
    {film},
    {isDataLoaded, isFetchingError, isNotFoundError}
  ] = useFetchData({fetchFilm, id});
  const {name, posterImage, backgroundImage} = film;
  const dispatch = useDispatch();
  const handleFilmNameClick = () => dispatch(redirectToRoute((`${Patch.FILMS}/${id}`)));

  return (
    <>
      {isDataLoaded
        ? <section className="movie-card movie-card--full">
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
        : <InfoPage
          isFetchingError={isFetchingError}
          isNotFoundError={isNotFoundError}
        />
      }
    </>
  );
};

export default AddReview;

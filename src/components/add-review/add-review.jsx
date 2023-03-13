import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import LogoHeader from '../common-components/logo/logo-header';
import UserBlock from '../common-components/user-block/user-block';
import AddReviewForm from './add-revew-form/add-revew-form';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorScreen from '../error-screen/error-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import {fetchFilm} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {Patch} from '../../const';

const AddReview = () => {
  const {film, isFilmLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();
  const onLoadFilm = (id) => dispatch(fetchFilm(id));
  const onRedirectToRoute = (url) => dispatch(redirectToRoute(url));

  const paramsId = Number(useParams().id);
  const [isErrorLoading, setIsErrorLoading] = useState(false);

  useEffect(() => {
    if (!isFilmLoaded) {
      onLoadFilm(paramsId)
      .catch(() => {
        setIsErrorLoading(true);
      });
    }
  }, [isFilmLoaded]);

  if (!isFilmLoaded && !isErrorLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (isErrorLoading) {
    return (
      <ErrorScreen />
    );
  }

  if (Object.keys(film).length === 0) {
    return (
      <NotFoundPage />
    );
  }


  const {id, name, posterImage, backgroundImage} = film;

  const handleFilmNameClick = () => onRedirectToRoute(`${Patch.FILMS}/${id}`);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <LogoHeader />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="#" onClick={handleFilmNameClick} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm film={film} />
    </section>
  );
};

export default AddReview;

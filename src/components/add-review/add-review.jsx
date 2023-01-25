import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import AddReviewForm from './add-revew-form/add-revew-form';
import Loading from '../common-components/loading/loading';
import {fetchFilm, fetchAddComment} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {Patch} from '../../const';

const AddReview = () => {
  const {film} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const [isFilmLoaded, setIsFilmLoaded] = useState(false);

  const onLoadFilm = (id) => {
    dispatch(fetchFilm(id))
      .then(() => setIsFilmLoaded(true));
  };

  const onSubmit = (id, userForm) => {
    dispatch(fetchAddComment(id, userForm));
  };

  const onFilmNameClick = (filmId) => {
    dispatch(redirectToRoute(`${Patch.FILMS}/${filmId}`));
  };

  const filmId = Number(useParams().id);

  useEffect(() => {
    if (!isFilmLoaded) {
      onLoadFilm(filmId);
    }
  }, [filmId, isFilmLoaded]);

  if (!isFilmLoaded) {
    return (
      <Loading />
    );
  }

  const {id, name, posterImage, backgroundImage} = film;

  const handleFilmNameClick = () => onFilmNameClick(id);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

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
          <img src={posterImage} alt={{name} + ` poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm id={filmId} onSubmit={onSubmit} />
    </section>
  );
};

export default AddReview;

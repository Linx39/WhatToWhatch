import React from 'react';
import {Link, Redirect} from 'react-router-dom';

import Logo from '../components-mini/logo/logo';
import UserBlock from '../components-mini/user-block/user-block';
import AddReviewForm from './add-revew-form';

import {FILMS} from '../props-types';
import {findFilm} from '../component-utils';
import {Patch} from '../../const';

const AddReview = (props) => {
  const {films} = props;

  const film = findFilm(films);

  if (!film) {
    return (
      <Redirect to={Patch.MAIN} />
    );
  }

  const {id, name, posterImage, backgroundImage} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          {<Logo />}

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${Patch.FILMS}${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          {<UserBlock />}
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={{name} + ` poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
};

AddReview.propTypes = {
  films: FILMS,
};

export default AddReview;

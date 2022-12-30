import React from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect, useParams} from 'react-router-dom';
import {connect} from 'react-redux';

import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import AddReviewForm from './add-revew-form/add-revew-form';

import {filmsProp} from '../props-types';
import {findFilm} from '../component-utils';
import {Patch} from '../../const';

const AddReview = ({films, goMain, goMyList}) => {
  const film = findFilm(films);
  const filmId = Number(useParams().id);

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
          <Logo onLogoClick={goMain} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${Patch.FILMS}/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock onAvatarClick={goMyList} />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={{name} + ` poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm id={filmId}/>
    </section>
  );
};

AddReview.propTypes = {
  films: filmsProp,
  goMain: PropTypes.func.isRequired,
  goMyList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);

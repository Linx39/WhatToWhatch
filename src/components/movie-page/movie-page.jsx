import React from 'react';
import {Link} from 'react-router-dom';

import MoviesList from '../movies-list/movies-list';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Copyright from '../copyright/copyright';

import {MOVIES, COUNT} from '../const-props-type';
import {findMovie} from '../component';
import {LogoPosition, Patch} from '../../const';

const MoviePage = (props) => {
  const {movies, count} = props;

  const movie = findMovie(movies);

  const {
    id,
    name,
    posterImage,
    previewImage,
    backgroundImage,
    backgroundColor,
    videoLink,
    previewVideoLink,
    description,
    rating,
    scoresCount,
    director,
    starring,
    runTime,
    genre,
    released,
    isFavorite
  } = movie;

  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          {<Logo/>}
          {<UserBlock />}
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <Link to={`${Patch.FILMS}${id}/review`} className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={{name} + ` poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <Link to="#" className="movie-nav__link">Overview</Link>
                </li>
                <li className="movie-nav__item">
                  <Link to="#" className="movie-nav__link">Details</Link>
                </li>
                <li className="movie-nav__item">
                  <Link to="#" className="movie-nav__link">Reviews</Link>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">Very good</span>
                <span className="movie-rating__count">{scoresCount} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{description}</p>

              <p>{description}</p>

              <p className="movie-card__director"><strong>Director: {director}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {starring.map((star) => star).join(`, `)}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          {<MoviesList movies={movies} count={count} />}
        </div>
      </section>

      <footer className="page-footer">
        {<Logo place = {LogoPosition.FOOTER} />}
        {<Copyright />}
      </footer>
    </div>
  </React.Fragment>;
};

MoviePage.propTypes = {
  movies: MOVIES,
  count: COUNT,
};

export default MoviePage;
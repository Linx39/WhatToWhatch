import React, {useState} from 'react';

import FilmsList from '../films-list/films-list';
import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import Copyright from '../common-components/copyright/copyright';
import GenresList from './genres-list';

import {filmsProp, countProp} from '../props-types';
import {LogoPosition} from '../../const';

const GENRE = `All genres`;

const getUniqueGenres = (films) => {
  const uniqueGenres = [GENRE];

  films.forEach((film) => {
    if (!uniqueGenres.find((genre) => genre === film.genre)) {
      uniqueGenres.push(film.genre);
    }
  });

  return uniqueGenres;
};

const getFilmsFilteredByGenre = (films, genre) => {
  if (genre === GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

const Main = (props) => {
  const {films, count} = props;
  const {name, posterImage, backgroundImage, genre, released} = films[3];

  const genres = getUniqueGenres(films);

  const [activeGenreItem, setActiveGenreItem] = useState(genres[0]);
  const [filmsFilteredByGenre, setFilmsFilteredByGenre] = useState(films);

  const handleGenreItemClick = (item) => {
    setActiveGenreItem(item);
    setFilmsFilteredByGenre(getFilmsFilteredByGenre(films, item));
  };

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo isLink = {false}/>
        <UserBlock />
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={{name} + ` poster`} width="218" height="327" />
          </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList
          genres={genres}
          activeGenreItem={activeGenreItem}
          onClick={handleGenreItemClick}
        />

        <div className="catalog__movies-list">
          <FilmsList films={filmsFilteredByGenre} count={count} />
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <Logo place = {LogoPosition.FOOTER} isLink = {false}/>
        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  films: filmsProp,
  count: countProp,
};

export default Main;

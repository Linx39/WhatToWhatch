import React, {useState} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import FilmsList from '../films-list/films-list';
import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import Copyright from '../common-components/copyright/copyright';
import NavList from './nav-list';
import Overview from './overview';
import Details from './details';
import Reviews from './reviews';

import {filmsProp} from '../props-types';
import {findFilm} from '../component-utils';
import {FilmsCount, LogoPosition, Patch, NavItem} from '../../const';

const Film = (props) => {
  const {films} = props;

  const film = findFilm(films);
  if (!film) {
    return (
      <Redirect to={Patch.MAIN} />
    );
  }

  const {
    id,
    name,
    posterImage,
    backgroundImage,
    genre,
    released,
  } = film;

  const history = useHistory();
  const handlePlayButtonClick = () => {
    return (
      history.push(`${Patch.PLAYER}/${film.id}`)
    );
  };

  const [activeNavItem, setActiveNavItem] = useState(NavItem.OVERVIEW);

  const handleNavItemClick = (item) => setActiveNavItem(item);

  const getActiveComponent = (navItem) => {
    switch (navItem) {
      case NavItem.OVERVIEW:
        return <Overview film={film} />;
      case NavItem.DETAILS:
        return <Details film={film} />;
      case NavItem.REVIEWS:
        return <Reviews film={film} />;
      default:
        throw new Error(`Unknown switch case expression: '${navItem}'!`);
    }
  };

  const filmsLikeThis = films.filter((item) => item.genre === genre && item !== film);

  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={handlePlayButtonClick}>
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
              <Link to={`${Patch.FILMS}/${id}/review`} className="btn movie-card__button">Add review</Link>
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
            <NavList
              activeNavItem={activeNavItem}
              onClick={handleNavItemClick}
            />

            {getActiveComponent(activeNavItem)}
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <FilmsList films={filmsLikeThis} count={FilmsCount.FILMS} />
        </div>
      </section>

      <footer className="page-footer">
        <Logo place = {LogoPosition.FOOTER} />
        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

Film.propTypes = {
  films: filmsProp,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {Film};
export default connect(mapStateToProps)(Film);

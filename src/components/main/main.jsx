import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getActiveFilmsListCount, changeGenre, getActiveFilmsList} from '../../store/action';
import FilmsList from '../films-list/films-list';
import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import UserBlockNoSign from '../common-components/user-block-no-sign/user-block-no-sign';
import Copyright from '../common-components/copyright/copyright';
import GenresList from './genres-list/genres-list';
import ShowMore from './show-more/show-more';
import Loading from './loading/loading';
import {fetchFilms} from '../../store/api-actions';
import {filmsProp, countProp} from '../props-types';
import {AuthorizationStatus} from '../../const';

const Main = (props) => {
  const {
    films,
    count,
    onShowMoreClick,
    activeGenre,
    activeFilmsList,
    onGenreItemClick,
    isFilmsLoaded,
    onLoadData,
    authorizationStatus,
    goMyList,
    goFilm,
  } = props;

  useEffect(() => {
    if (!isFilmsLoaded) {
      onLoadData();
    }
  }, [isFilmsLoaded]);

  if (!isFilmsLoaded) {
    return (
      <Loading />
    );
  }

  const {name, posterImage, backgroundImage, genre, released} = films[3];


  return <React.Fragment>
    <section className='movie-card'>
      <div className='movie-card__bg'>
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className='visually-hidden'>WTW</h1>

      <header className='page-header movie-card__head'>
        <Logo isLink = {false} />

        {authorizationStatus === AuthorizationStatus.AUTH
          ? <UserBlock onAvatarClick={goMyList}/>
          : <UserBlockNoSign />
        }

      </header>

      <div className='movie-card__wrap'>
        <div className='movie-card__info'>
          <div className='movie-card__poster'>
            <img src={posterImage} alt={{name} + ` poster`} width='218' height='327' />
          </div>

          <div className='movie-card__desc'>
            <h2 className='movie-card__title'>{name}</h2>
            <p className='movie-card__meta'>
              <span className='movie-card__genre'>{genre}</span>
              <span className='movie-card__year'>{released}</span>
            </p>

            <div className='movie-card__buttons'>
              <button className='btn btn--play movie-card__button' type='button'>
                <svg viewBox='0 0 19 19' width='19' height='19'>
                  <use xlinkHref='#play-s'></use>
                </svg>
                <span>Play</span>
              </button>
              <button className='btn btn--list movie-card__button' type='button'>
                <svg viewBox='0 0 19 20' width='19' height='20'>
                  <use xlinkHref='#add'></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className='page-content'>
      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <GenresList
          films={films}
          activeGenre={activeGenre}
          onClick={onGenreItemClick}
        />

        <div className='catalog__movies-list'>
          <FilmsList films={activeFilmsList} count={count} goFilm={goFilm} />
        </div>

        {(count < activeFilmsList.length) && <ShowMore onClick={onShowMoreClick} />}

      </section>

      <footer className='page-footer'>
        <Logo isAddClass={true} isLink = {false} />
        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  films: filmsProp,
  count: countProp,
  activeGenre: PropTypes.string.isRequired,
  activeFilmsList: filmsProp,
  onShowMoreClick: PropTypes.func.isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
  isFilmsLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  goMyList: PropTypes.func.isRequired,
  goFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  count: state.activeFilmsListCount,
  activeGenre: state.activeGenre,
  activeFilmsList: state.activeFilmsList,
  isFilmsLoaded: state.isFilmsLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(getActiveFilmsListCount());
  },
  onGenreItemClick(genre) {
    dispatch(changeGenre(genre));
    dispatch(getActiveFilmsList(genre));
  },
  onLoadData() {
    dispatch(fetchFilms());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import FilmsList from '../films-list/films-list';
import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import UserBlockNoSign from '../common-components/user-block-no-sign/user-block-no-sign';
import Copyright from '../common-components/copyright/copyright';
import GenresList from './genres-list/genres-list';
import ShowMore from './show-more/show-more';
import Loading from '../common-components/loading/loading';
import {changeFilmsCount, changeGenre, getFilmsList} from '../../store/action';
import {fetchFilms, fetchPromoFilm, fetchAddFavoriteFilm} from '../../store/api-actions';
import {AuthorizationStatus, FilmsCount, GENRE_DEFAULT} from '../../const';

const getNewCount = (prevCount, maxCount) => {
  const nextCount = prevCount + FilmsCount.MAIN;
  const newCount = nextCount > maxCount ? maxCount : nextCount;

  return newCount;
};

const filterFilmsByGenre = (genre, films) => {
  if (genre === GENRE_DEFAULT) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

const Main = ({goMyList, goFilm, goPlayer}) => {
  const {count, activeGenre, filmsList} = useSelector((state) => state.ACTIONS);
  const {films, isFilmsLoaded, promoFilm} = useSelector((state) => state.DATA);
  const {authorizationStatus} = useSelector((state) => state.USER);

  const [isPromoFilmLoaded, setIsPromoFilmLoaded] = useState(false);

  const dispatch = useDispatch();

  const onLoadFilms = () => {
    dispatch(fetchFilms());
  };

  const onLoadPromoFilm = () => {
    dispatch(fetchPromoFilm())
      .then(() => setIsPromoFilmLoaded(true));
  };

  const onShowMoreClick = (newCount) => {
    dispatch(changeFilmsCount(newCount));
  };

  const onGenreItemClick = (genre) => {
    dispatch(changeGenre(genre));
  };

  const onChangeFilmsList = (list) => {
    dispatch(getFilmsList(list));
  };

  const onAddFavoriteFilm = (id, status) => {
    dispatch(fetchAddFavoriteFilm(id, status, true));
  };

  useEffect(() => {
    if (!isFilmsLoaded) {
      onLoadFilms();
    }

    if (isFilmsLoaded) {
      onChangeFilmsList(films);
    }
  }, [isFilmsLoaded]);

  useEffect(() => {
    if (!isPromoFilmLoaded) {
      onLoadPromoFilm();
    }
  }, [isPromoFilmLoaded]);

  if (!isFilmsLoaded && !isPromoFilmLoaded) {
    return (
      <Loading />
    );
  }

  const {id, name, posterImage, backgroundImage, genre, released, isFavorite} = promoFilm;

  const handlePlayButtonClick = () => goPlayer(id);

  const handleAddFavoriteFilm = () => onAddFavoriteFilm(id, Number(!isFavorite));

  const handleGenreItemClick = (genreItem) => {
    onGenreItemClick(genreItem);
    const list = filterFilmsByGenre(genreItem, films);
    onChangeFilmsList(list);
  };

  const handleShowMoreClick = () => {
    const newCount = getNewCount(count, films.length);
    onShowMoreClick(newCount);

  };

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
              <button onClick={handlePlayButtonClick} className='btn btn--play movie-card__button' type='button'>
                <svg viewBox='0 0 19 19' width='19' height='19'>
                  <use xlinkHref='#play-s'></use>
                </svg>
                <span>Play</span>
              </button>
              <button onClick={handleAddFavoriteFilm} className='btn btn--list movie-card__button' type='button'>
                <svg viewBox='0 0 19 20' width='19' height='20'>
                  {isFavorite
                    ? <use xlinkHref="#in-list"></use>
                    : <use xlinkHref="#add"></use>
                  }
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
          onClick={handleGenreItemClick}
        />

        <div className='catalog__movies-list'>
          <FilmsList films={filmsList} count={count} goFilm={goFilm} />
        </div>

        {(count < filmsList.length) && <ShowMore onClick={handleShowMoreClick} />}

      </section>

      <footer className='page-footer'>
        <Logo isAddClass={true} isLink = {false} />
        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  goMyList: PropTypes.func.isRequired,
  goFilm: PropTypes.func.isRequired,
  goPlayer: PropTypes.func.isRequired,
};

export default Main;

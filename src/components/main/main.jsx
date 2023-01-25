import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import FilmsList from '../films-list/films-list';
import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import UserBlockNoSign from '../common-components/user-block-no-sign/user-block-no-sign';
import Copyright from '../common-components/copyright/copyright';
import Loading from '../common-components/loading/loading';
import GenresList from './genres-list/genres-list';
import ShowMore from './show-more/show-more';
import PlayButton from '../common-components/play-button/play-button';
import {getFilmsList} from '../../store/action';
import {fetchFilms, fetchPromoFilm} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';
import AddFavoriteButton from '../common-components/add-favorite-button/add-favorite-button';

const Main = () => {
  const {films, isFilmsLoaded, promoFilm} = useSelector((state) => state.DATA);
  const {count, filmsList} = useSelector((state) => state.ACTIONS);
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

  const onChangeFilmsList = (list) => {
    dispatch(getFilmsList(list));
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

  const {name, posterImage, backgroundImage, genre, released} = promoFilm;

  return <React.Fragment>
    <section className='movie-card'>
      <div className='movie-card__bg'>
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className='visually-hidden'>WTW</h1>

      <header className='page-header movie-card__head'>
        <Logo isLink = {false} />

        {authorizationStatus === AuthorizationStatus.AUTH
          ? <UserBlock />
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
              <PlayButton film={promoFilm}/>

              <AddFavoriteButton film={promoFilm} />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className='page-content'>
      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <GenresList />

        <FilmsList films={filmsList} count={count} />

        {(count < filmsList.length) && <ShowMore />}
      </section>

      <footer className='page-footer'>
        <Logo isAddClass={true} isLink = {false} />

        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

export default Main;

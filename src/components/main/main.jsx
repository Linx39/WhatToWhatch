import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import FilmsList from '../films-list/films-list';
import LogoHeader from '../common-components/logo/logo-header';
import LogoFooter from '../common-components/logo/logo-footer';
import UserBlock from '../common-components/user-block/user-block';
import UserBlockNoSign from '../common-components/user-block-no-sign/user-block-no-sign';
import Copyright from '../common-components/copyright/copyright';
import Loading from '../common-components/loading/loading';
import PromoFilm from './promo-film/promo-film';
import GenresList from './genres-list/genres-list';
import ShowMore from './show-more/show-more';
import {changeFilmsList} from '../../store/action';
import {fetchFilms, fetchPromoFilm} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

const Main = () => {
  const {films, isFilmsLoaded, promoFilm, isPromoFilmLoaded} = useSelector((state) => state.DATA);
  const {count, filmsList} = useSelector((state) => state.FILMS_LIST_ACTIONS);
  const {authorizationStatus} = useSelector((state) => state.USER);

  const dispatch = useDispatch();
  const onLoadFilms = () => dispatch(fetchFilms());
  const onLoadPromoFilm = () => dispatch(fetchPromoFilm());
  const onChangeFilmsList = (list) => dispatch(changeFilmsList(list));

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

  if (!isFilmsLoaded || !isPromoFilmLoaded) {
    return (
      <Loading />
    );
  }

  const {name, backgroundImage} = promoFilm;

  return (
    <>
      <section className='movie-card'>
        <div className='movie-card__bg'>
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header movie-card__head'>
          <LogoHeader isActive={false} />

          {authorizationStatus === AuthorizationStatus.AUTH
            ? <UserBlock />
            : <UserBlockNoSign />
          }
        </header>

        <PromoFilm film={promoFilm} />
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <GenresList />

          <FilmsList films={filmsList} count={count} />

          {(count < filmsList.length) && <ShowMore />}
        </section>

        <footer className='page-footer'>
          <LogoFooter isActive={false} />

          <Copyright />
        </footer>
      </div>
    </>
  );
};

export default Main;

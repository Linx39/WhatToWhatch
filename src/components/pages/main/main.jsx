import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import Header from '../../common-components/header/header';
import Footer from '../../common-components/footer/footer';
import MoviesList from '../../common-components/movies-list/movies-list';
import PromoFilm from './promo-film/promo-film';
import GenresList from './genres-list/genres-list';
import ShowMore from './show-more/show-more';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import {changeFilmsList} from '../../../store/action';
import {fetchFilms, fetchPromoFilm} from '../../../store/api-actions';

const Main = () => {
  const {films, isFilmsLoaded, promoFilm, isPromoFilmLoaded} = useSelector((state) => state.DATA);
  const {count, filmsList} = useSelector((state) => state.FILMS_LIST_ACTIONS);
  const dispatch = useDispatch();
  const [isFetchingError, setIsFetchingError] = useState(false);

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilms())
      .catch(() => {
        setIsFetchingError(true);
        return;
      });
    }

    if (!isPromoFilmLoaded) {
      dispatch(fetchPromoFilm())
      .catch(() => {
        setIsFetchingError(true);
        return;
      });
    }

    if (isFilmsLoaded) {
      dispatch(changeFilmsList(films));
    }
  }, [isFilmsLoaded && isPromoFilmLoaded]);

  if ((!isFilmsLoaded || !isPromoFilmLoaded) && !isFetchingError) {
    return (
      <LoadingPage />
    );
  }

  if (isFetchingError) {
    return (
      <ErrorPage />
    );
  }

  const {name, backgroundImage} = promoFilm;

  return (
    <>
      <section className='movie-card'>
        <MovieCardBig src={backgroundImage} alt={name} />

        <h1 className="visually-hidden">WTW</h1>

        <Header isLogoClickable={false} />

        <PromoFilm film={promoFilm} />
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <GenresList />

          <MoviesList films={filmsList} count={count} />

          {(count < filmsList.length) && <ShowMore />}
        </section>

        <Footer isLogoClickable={false}/>
      </div>
    </>
  );
};

export default Main;

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import PromoFilm from './promo-film/promo-film';
import GenresList from './genres-list/genres-list';
import ShowMore from './show-more/show-more';
import Footer from '../../common-components/footer/footer';
import MoviesList from '../../common-components/movies-list/movies-list';
import InfoMessage from '../../common-components/info-message/info-message';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import {fetchFilms, fetchPromoFilm} from '../../../store/api-actions';
import {resetOnDefaultMainPage, resetLoadedPromoFilm} from '../../../store/action';
import {getFilmsByGenre} from '../../../utils';
import {InfoText} from '../../../const';

const Main = () => {
  const {filmsData, promoFilmData} = useSelector((state) => state.DATA);
  const {data: films, isLoading: isFilmsLoading, error: filmsError} = filmsData;
  const {data: promoFilm, isLoading: isPromoFilmLoading, error: promoFilmError} = promoFilmData;
  const {count, activeGenre} = useSelector((state) => state.APP_ACTIONS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (films.length === 0) {
      dispatch(fetchFilms());
    }
    dispatch(fetchPromoFilm());

    return () => {
      dispatch(resetOnDefaultMainPage());
      dispatch(resetLoadedPromoFilm());
    };
  }, [dispatch]);

  if (isFilmsLoading || isPromoFilmLoading) {
    return <LoadingPage />;
  }

  if (filmsError) {
    return <ErrorPage />;
  }

  const filmsList = getFilmsByGenre(activeGenre, films).slice(0, count);

  return (
    <>
      {promoFilmError
        ? <InfoMessage text={InfoText.SERVER_ERROR} />
        : <PromoFilm film={promoFilm}/>
      }

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <GenresList />

          <MoviesList films={filmsList} />

          {(count < films.length) && <ShowMore />}
        </section>

        <Footer isLogoClickable={false}/>
      </div>
    </>
  );
};

export default Main;

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Footer from '../../common-components/footer/footer';
import MoviesList from '../../common-components/movies-list/movies-list';
import PromoFilm from './promo-film/promo-film';
import GenresList from './genres-list/genres-list';
import ShowMore from './show-more/show-more';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import InfoMessage from '../../common-components/info-message/info-message';
import {fetchFilms, fetchPromoFilm} from '../../../store/api-actions';
import {GENRE_DEFAULT, InfoText} from '../../../const';

const getFilmsByGenre = (genre, films) => {
  return genre === GENRE_DEFAULT
    ? films
    : films.filter((film) => film.genre === genre);
};

const Main = () => {
  const {filmsData, promoFilmData} = useSelector((state) => state.DATA);
  const {data: films, isLoading: isFilmsLoading, error: filmsError} = filmsData;
  const {data: promoFilm, isLoading: isPromoFilmLoading, error: promoFilmError} = promoFilmData;
  const {count, activeGenre} = useSelector((state) => state.APP_ACTIONS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (films.length === 0) {
      dispatch(fetchFilms());
      dispatch(fetchPromoFilm());
    }
  }, [dispatch]);

  if (isFilmsLoading || isPromoFilmLoading) {
    return <LoadingPage />;
  }

  if (filmsError) {
    return <ErrorPage />;
  }

  const filmsList = getFilmsByGenre(activeGenre, films);

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

          <MoviesList films={filmsList} count={count} />

          {(count < filmsList.length) && <ShowMore />}
        </section>

        <Footer isLogoClickable={false}/>
      </div>
    </>
  );
};

export default Main;

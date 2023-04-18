import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import Header from '../../common-components/header/header';
import Footer from '../../common-components/footer/footer';
import MoviesList from '../../common-components/movies-list/movies-list';
import PromoFilm from './promo-film/promo-film';
import GenresList from './genres-list/genres-list';
import ShowMore from './show-more/show-more';
import InfoPage from '../info-page/info-page';
import {fetchFilms, fetchPromoFilm} from '../../../store/api-actions';
import {GENRE_DEFAULT, FetchingStatus} from '../../../const';

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
    }
    dispatch(fetchPromoFilm());
  }, [dispatch]);

  if (isFilmsLoading || isPromoFilmLoading) {
    return <InfoPage fetchingStatus={FetchingStatus.LOADING} />;
  }

  if (filmsError || promoFilmError) {
    return <InfoPage fetchingStatus={FetchingStatus.SERVER_ERROR} />;
  }

  const {name, backgroundImage} = promoFilm;
  const filmsList = getFilmsByGenre(activeGenre, films);

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

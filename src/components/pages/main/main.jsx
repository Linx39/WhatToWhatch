import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import Header from '../../common-components/header/header';
import Footer from '../../common-components/footer/footer';
import MoviesList from '../../common-components/movies-list/movies-list';
import PromoFilm from './promo-film/promo-film';
import GenresList from './genres-list/genres-list';
import ShowMore from './show-more/show-more';
import InfoPage from '../info-page/info-page';
import {useFetchData} from '../../hoocks/use-fetch-data';
import {fetchFilms, fetchPromoFilm} from '../../../store/api-actions';
import {GENRE_DEFAULT} from '../../../const';

const getFilmsByGenre = (genre, films) => {
  return genre === GENRE_DEFAULT
    ? films
    : films.filter((film) => film.genre === genre);
};

const Main = () => {
  const [
    {films, promoFilm},
    isDataLoaded,
    fetchingStatus
  ] = useFetchData({fetchFilms, fetchPromoFilm});
  const {count, activeGenre} = useSelector((state) => state.FILMS_ACTIONS);
  const {name, backgroundImage} = promoFilm;
  const filmsList = useMemo(() => getFilmsByGenre(activeGenre, films));

  return (
    <>
      {isDataLoaded
        ?
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

        : <InfoPage fetchingStatus={fetchingStatus}
        />
      }
    </>
  );
};

export default Main;

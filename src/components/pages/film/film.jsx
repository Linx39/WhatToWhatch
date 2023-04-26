import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import Header from '../../common-components/header/header';
import MoviesList from '../../common-components/movies-list/movies-list';
import Footer from '../../common-components/footer/footer';
import MovieCardDesc from './movie-card-desc/movie-card-desc';
import MovieCardInfo from './movie-card-info/movie-card-info';
import LoadingPage from '../info-page/loading-page/loading-page';
import NotFoundPage from '../info-page/not-found-page/not-found-page';
import ErrorPage from '../info-page/error-page/error-page';
import InfoMessage from '../../common-components/info-message/info-message';
import {fetchFilms, fetchFilm} from '../../../store/api-actions';
import {changeActiveNavItem, resetOnDefaultFilmPage, resetLoadedFilm, resetLoadedComments} from '../../../store/action';
import {FilmsCount, AdditionalClassName, ResponseStatus, InfoText} from '../../../const';

const getFilmsByGenre = (id, genre, films) => {
  return films.slice().filter((film) => film.genre === genre && film.id !== id);
};

const Film = () => {
  const {id} = useParams();
  const {filmsData, filmData} = useSelector((state) => state.DATA);
  const {data: films, isLoading: isFilmsLoading, error: filmsError} = filmsData;
  const {data: film, isLoading: isFilmLoading, error: filmError} = filmData;
  const {activeNavItem} = useSelector((state) => state.APP_ACTIONS);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const handleChangeActiveNavItem = (item) => dispatch(changeActiveNavItem(item));

  useEffect(() => {
    if (films.length === 0) {
      dispatch(fetchFilms());
    }

    if (film.id !== +id) {
      dispatch(resetLoadedFilm());
      dispatch(resetLoadedComments());
      dispatch(fetchFilm(id));
    }

    return () => {
      dispatch(resetOnDefaultFilmPage());
    };
  }, [dispatch]);

  if (isFilmsLoading || isFilmLoading) {
    return <LoadingPage />;
  }

  if (filmError === ResponseStatus.PAGE_NOT_FOUND) {
    return <NotFoundPage />;
  }

  if ((filmError) && filmError !== ResponseStatus.PAGE_NOT_FOUND) {
    return <ErrorPage />;
  }

  const {name, backgroundImage, genre} = film;
  const filmsLikeThis = getFilmsByGenre(id, genre, films);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <MovieCardBig src={backgroundImage} alt={name} />

          <h1 className="visually-hidden">WTW</h1>

          <Header additionalClassName={AdditionalClassName.HEADER.MOVIE_CARD} />

          <MovieCardDesc film={film} authorizationStatus={authorizationStatus}/>
        </div>

        <MovieCardInfo
          film={film}
          activeNavItem={activeNavItem}
          onClick={handleChangeActiveNavItem}
        />
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {filmsError
            ? <InfoMessage text={InfoText.SERVER_ERROR} />
            : <MoviesList films={filmsLikeThis} count={FilmsCount.FILMS_LIKE_THIS} />
          }
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Film;

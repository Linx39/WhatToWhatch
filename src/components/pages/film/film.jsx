import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import Header from '../../common-components/header/header';
import MoviesList from '../../common-components/movies-list/movies-list';
import Footer from '../../common-components/footer/footer';
import MovieCardDesc from './movie-card-desc/movie-card-desc';
import MovieCardInfo from './movie-card-info/movie-card-info';
import InfoPage from '../info-page/info-page';
import {fetchFilms, fetchFilm, fetchComments} from '../../../store/api-actions';
import {changeActiveNavItem} from '../../../store/action';
import {FilmsCount, AdditionalClassName, FetchingStatus} from '../../../const';

const getFilmsLikeThis = (id, genre, films) => {
  return films.slice().filter((film) => film.genre === genre && film.id !== id);
};

const Film = () => {
  const {id} = useParams();
  const {films, isFilmsLoading, film, isFilmLoading, comments, isCommentsLoading} = useSelector((state) => state.DATA);
  const {activeNavItem} = useSelector((state) => state.FILMS_ACTIONS);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const handleChangeActiveNavItem = (item) => dispatch(changeActiveNavItem(item));

  useEffect(() => {
    if (films.length === 0) {
      dispatch(fetchFilms());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFilm(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch]);

  if (isFilmsLoading || isFilmLoading || isCommentsLoading) {
    return <InfoPage fetchingStatus={FetchingStatus.LOADING} />;
  }

  if (!film) {
    return <InfoPage fetchingStatus={FetchingStatus.PAGE_NOT_FOUND} />;
  }

  const {name, backgroundImage, genre} = film;
  const filmsLikeThis = getFilmsLikeThis(id, genre, films);

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
          comments={comments}
          activeNavItem={activeNavItem}
          onClick={handleChangeActiveNavItem}
        />
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList films={filmsLikeThis} count={FilmsCount.FILMS_LIKE_THIS} />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Film;

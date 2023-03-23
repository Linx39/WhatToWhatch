import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import Header from '../../common-components/header/header';
import MoviesList from '../../common-components/movies-list/movies-list';
import Footer from '../../common-components/footer/footer';
import MovieCardDesc from './movie-card-desc/movie-card-desc';
import MovieCardInfo from './movie-card-info/movie-card-info';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import NotFoundPage from '../info-page/not-found-page/not-found-page';
// import {fetchFilms, fetchFilm, fetchComments} from '../../../store/api-actions';
import {changeActiveNavItem} from '../../../store/action';
import {FilmsCount, AdditionalClassName, HttpCode} from '../../../const';
import {useFetch} from '../../hoocks/use-fetch';

const Film = () => {
  const {id} = useParams();
  // const {films, isFilmsLoaded, film, isFilmLoaded, comments, isCommentsLoaded} = useSelector((state) => state.DATA);
  const {activeNavItem} = useSelector((state) => state.FILMS_ACTIONS);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const [films, film, comments, handleInfoPages] = useFetch(id);
  // const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  // const [isFetchingError, setIsFetchingError] = useState(false);


  const handleChangeActiveNavItem = (item) => dispatch(changeActiveNavItem(item));

  useEffect(() => {
      handleInfoPages();

  }, []);



  // useEffect(() => {
  //   if (!isFilmsLoaded) {
  //     dispatch(fetchFilms())
  //     .catch(() => {
  //       setIsFetchingError(true);
  //       return;
  //     });
  //   }

  //   if (!isFilmLoaded) {
  //     dispatch(fetchFilm(id))
  //     .catch((err) => {
  //       if (err === HttpCode.PAGE_NOT_FOUND) {
  //         setIsNotFoundPage(true);
  //       }
  //       setIsFetchingError(true);
  //       return;
  //     });
  //   }

  //   if (!isCommentsLoaded) {
  //     dispatch(fetchComments(id))
  //     .catch((err) => {
  //       if (err === HttpCode.PAGE_NOT_FOUND) {
  //         setIsNotFoundPage(true);
  //       }
  //       setIsFetchingError(true);
  //       return;
  //     });
  //   }
  // }, [isFilmsLoaded && isFilmLoaded && isCommentsLoaded]);

  // if (isNotLoaded && !isFetchingError) {
  //   return (
  //     <LoadingPage />
  //   );
  // }

  // if (isFetchingError && !isNotFoundPage) {
  //   return (
  //     <ErrorPage />
  //   );
  // }

  // if (isNotFoundPage) {
  //   return (
  //     <NotFoundPage />
  //   );
  // }

  const {name, backgroundImage, genre} = film;
  const filmsLikeThis = films.slice().filter((item) => item.genre === genre && item.id !== id);

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
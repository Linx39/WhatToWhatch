import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import MovieCardBg from '../common-components/movie-card-bg/movie-card-bg';
import Header from '../common-components/header/header';
import FilmsList from '../films-list/films-list';
import Footer from '../common-components/footer/footer';
import NavList from './nav-list/nav-list';
import Overview from './overview/overview';
import Details from './details/details';
import Reviews from './reviews/reviews';
import AddReviewButton from './add-review-button/add-review-button';
import PlayButton from '../common-components/play-button/play-button';
import AddFavoriteButton from '../common-components/add-favorite-button/add-favorite-button';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import NotFoundPage from '../info-page/not-found-page/not-found-page';
import {fetchFilms, fetchFilm, fetchComments} from '../../store/api-actions';
import {changeActiveNavItem} from '../../store/action';
import {FilmsCount, NavItem, AuthorizationStatus, AddFavoriteFetchType, AdditionalClass} from '../../const';

const Film = () => {
  const {id} = useParams();
  const {films, isFilmsLoaded, film, isFilmLoaded, comments, isCommentsLoaded} = useSelector((state) => state.DATA);
  const {activeNavItem} = useSelector((state) => state.FILM_INFO_ACTIONS);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const handleChangeActiveNavItem = (item) => dispatch(changeActiveNavItem(item));

  const [isErrorLoading, setIsErrorLoading] = useState(false);

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilms())
      .catch(() => {
        setIsErrorLoading(true);
      });
    }

    if (!isFilmLoaded) {
      dispatch(fetchFilm(id))
      .catch(() => {
        setIsErrorLoading(true);
      });
    }

    if (!isCommentsLoaded) {
      dispatch(fetchComments(id))
      .catch(() => {
        setIsErrorLoading(true);
      });
    }
  }, [isFilmsLoaded && isFilmLoaded && isCommentsLoaded]);

  if ((!isFilmsLoaded || !isFilmLoaded || !isCommentsLoaded) && !isErrorLoading) {
    return (
      <LoadingPage />
    );
  }

  if (!film) {
    return (
      <NotFoundPage />
    );
  }

  if (isErrorLoading) {
    return (
      <ErrorPage />
    );
  }

  const {name, posterImage, backgroundImage, genre, released} = film;

  const getActiveComponent = (item) => {
    switch (item) {
      case NavItem.OVERVIEW:
        return <Overview film={film} />;
      case NavItem.DETAILS:
        return <Details film={film} />;
      case NavItem.REVIEWS:
        return <Reviews comments={comments} />;
      default:
        throw new Error(`Unknown switch case expression: '${item}'!`);
    }
  };

  const filmsLikeThis = films.slice().filter((item) => item.genre === genre && item.id !== id);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <MovieCardBg src={backgroundImage} alt={name} />

          <h1 className="visually-hidden">WTW</h1>

          <Header additionalHeaderClass={AdditionalClass.HEADER.MOVIE_CARD} />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton film={film}/>

                <AddFavoriteButton film={film} fetchType={AddFavoriteFetchType.FILM} />

                {
                  authorizationStatus === AuthorizationStatus.AUTH
                  &&
                  <AddReviewButton film={film}/>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <NavList
                activeNavItem={activeNavItem}
                onClick={handleChangeActiveNavItem}
              />

              {getActiveComponent(activeNavItem)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={filmsLikeThis} count={FilmsCount.FILMS_LIKE_THIS} />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Film;

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import MovieCardInfo from './movie-card-info/movie-card-info';
import AddReviewButton from './add-review-button/add-review-button';
import Footer from '../../common-components/footer/footer';
import Header from '../../common-components/header/header';
import MovieCardBig from '../../common-components/movie-card-big/movie-card-big';
import MoviesList from '../../common-components/movies-list/movies-list';
import MovieCardMeta from '../../common-components/movie-card-meta/movie-card-meta';
import PlayButton from '../../common-components/play-button/play-button';
import FavoriteButton from '../../common-components/favorite-button/favorite-button';
import InfoMessage from '../../common-components/info-message/info-message';
import LoadingPage from '../info-page/loading-page/loading-page';
import NotFoundPage from '../info-page/not-found-page/not-found-page';
import ErrorPage from '../info-page/error-page/error-page';
import {fetchFilms, fetchFilm} from '../../../store/api-actions';
import {changeActiveNavItem, resetOnDefaultFilmPage, resetLoadedFilm, loadFilm} from '../../../store/action';
import {getFilmsLikeThis} from '../../../utils';
import {FilmsCount, AdditionalClassName, ResponseStatus, InfoText, AuthorizationStatus} from '../../../const';

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
      dispatch(fetchFilm(id));
    }

    return () => {
      dispatch(resetOnDefaultFilmPage());
    };
  }, [dispatch, id]);

  if (isFilmsLoading || isFilmLoading) {
    return <LoadingPage />;
  }

  if (filmError === ResponseStatus.PAGE_NOT_FOUND) {
    return <NotFoundPage />;
  }

  if ((filmError) && filmError !== ResponseStatus.PAGE_NOT_FOUND) {
    return <ErrorPage />;
  }

  const filmsLikeThis = getFilmsLikeThis(film, films).slice(0, FilmsCount.FILMS_LIKE_THIS);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <MovieCardBig film={film} />

          <h1 className="visually-hidden">WTW</h1>

          <Header additionalClassName={AdditionalClassName.HEADER.MOVIE_CARD} />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <MovieCardMeta film={film} />

              <div className="movie-card__buttons">
                <PlayButton film={film}/>

                <FavoriteButton film={film} onLoadData={loadFilm} />

                {authorizationStatus === AuthorizationStatus.AUTH && <AddReviewButton film={film}/> }
              </div>
            </div>
          </div>

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
            : <MoviesList films={filmsLikeThis} />
          }
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Film;

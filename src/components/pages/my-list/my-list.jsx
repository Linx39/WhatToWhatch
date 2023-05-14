import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../common-components/header/header';
import Footer from '../../common-components/footer/footer';
import MoviesList from '../../common-components/movies-list/movies-list';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {
  getFavoriteFilms,
  getIsFavoriteFilmsLoading,
  getFavoriteFilmsError,
} from '../../../store/app-data/selectors';
import {resetLoadedFavoriteFilms} from '../../../store/action';
import {AdditionalClassName} from '../../../const';

const MyList = () => {
  const favoriteFilms = useSelector(getFavoriteFilms);
  const isFavoriteFilmsLoading = useSelector(getIsFavoriteFilmsLoading);
  const favoriteFilmsError = useSelector(getFavoriteFilmsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilms());

    return () => {
      dispatch(resetLoadedFavoriteFilms());
    };
  }, [dispatch]);

  if (isFavoriteFilmsLoading) {
    return <LoadingPage />;
  }

  if (favoriteFilmsError) {
    return <ErrorPage />;
  }

  return (
    <div className="user-page">
      <Header additionalClassName={AdditionalClassName.HEADER.USER_PAGE}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
};

export default MyList;

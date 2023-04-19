import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../common-components/header/header';
import MoviesList from '../../common-components/movies-list/movies-list';
import Footer from '../../common-components/footer/footer';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {AdditionalClassName} from '../../../const';

const MyList = () => {
  const {favoriteFilmsData} = useSelector((state) => state.DATA);
  const {data: favoriteFilms, isLoading: isFavoriteFilmsLoading, error: favoriteFilmsError} = favoriteFilmsData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
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

        <MoviesList films={favoriteFilms} count={favoriteFilms.length} />
      </section>

      <Footer />
    </div>
  );
};

export default MyList;

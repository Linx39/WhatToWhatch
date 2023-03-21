import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../common-components/header/header';
import MoviesList from '../../common-components/movies-list/movies-list';
import Footer from '../../common-components/footer/footer';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {AdditionalClassName} from '../../../const';

const MyList = () => {
  const {favoriteFilms, isFavoriteFilmsLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  const [isFetchingError, setIsFetchingError] = useState(false);

  useEffect(() => {
    if (!isFavoriteFilmsLoaded) {
      dispatch(fetchFavoriteFilms())
      .catch(() => {
        setIsFetchingError(true);
      });
    }
  }, [isFavoriteFilmsLoaded]);

  if (!isFavoriteFilmsLoaded && !isFetchingError) {
    return (
      <LoadingPage />
    );
  }

  if (isFetchingError) {
    return (
      <ErrorPage />
    );
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

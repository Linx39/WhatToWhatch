import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../common-components/header/header';
import MoviesList from '../../common-components/movies-list/movies-list';
import Footer from '../../common-components/footer/footer';
import LoadingPage from '../info-page/loading-page/loading-page';
import ErrorPage from '../info-page/error-page/error-page';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {AdditionalClass} from '../../../const';

const MyList = () => {
  const {favoriteFilms, isFavoriteFilmsLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const [isErrorLoading, setIsErrorLoading] = useState(false);

  useEffect(() => {
    if (!isFavoriteFilmsLoaded) {
      dispatch(fetchFavoriteFilms())
      .catch(() => {
        setIsErrorLoading(true);
      });
    }
  }, [isFavoriteFilmsLoaded]);

  if (!isFavoriteFilmsLoaded && !isErrorLoading) {
    return (
      <LoadingPage />
    );
  }

  if (isErrorLoading) {
    return (
      <ErrorPage />
    );
  }

  return (
    <div className="user-page">
      <Header additionalHeaderClass={AdditionalClass.HEADER.USER_PAGE}>
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

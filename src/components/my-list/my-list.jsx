import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import FilmsList from '../films-list/films-list';
import LogoHeader from '../common-components/logo/logo-header';
import LogoFooter from '../common-components/logo/logo-footer';
import UserBlock from '../common-components/user-block/user-block';
import Copyright from '../common-components/copyright/copyright';
import LoadingPage from '../loading-page/loading-page';
import ErrorPage from '../error-page/error-page';
import {fetchFavoriteFilms} from '../../store/api-actions';

const MyList = () => {
  const {favoriteFilms, isFavoriteFilmsLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();
  const onLoadFavoriteFilms = () => dispatch(fetchFavoriteFilms());

  const [isErrorLoading, setIsErrorLoading] = useState(false);

  useEffect(() => {
    if (!isFavoriteFilmsLoaded) {
      onLoadFavoriteFilms()
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
      <header className="page-header user-page__head">
        <LogoHeader />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favoriteFilms} count={favoriteFilms.length} />
      </section>

      <footer className="page-footer">
        <LogoFooter />

        <Copyright />
      </footer>
    </div>
  );
};

export default MyList;

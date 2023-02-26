import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import FilmsList from '../films-list/films-list';
import LogoHeader from '../common-components/logo/logo-header';
import LogoFooter from '../common-components/logo/logo-footer';
import UserBlock from '../common-components/user-block/user-block';
import Copyright from '../common-components/copyright/copyright';
import {fetchFavoriteFilms} from '../../store/api-actions';
import Loading from '../common-components/loading/loading';

const MyList = () => {
  const {favoriteFilms, isFavoriteFilmsLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();
  const onLoadFavoriteFilms = () => dispatch(fetchFavoriteFilms());

  useEffect(() => {
    if (!isFavoriteFilmsLoaded) {
      onLoadFavoriteFilms();
    }
  }, [isFavoriteFilmsLoaded]);

  if (!isFavoriteFilmsLoaded) {
    return (
      <Loading />
    );
  }

  return <React.Fragment>
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
  </React.Fragment>;
};

export default MyList;

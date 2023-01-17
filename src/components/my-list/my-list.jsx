import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import FilmsList from '../films-list/films-list';
import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import Copyright from '../common-components/copyright/copyright';
import {fetchFavoriteFilms} from '../../store/api-actions';
import Loading from './loading/loading';
import {FilmsCount} from '../../const';

const MyList = ({goMain}) => {
  const {films, favoriteFilms, isFavoriteFilmsLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const onFavoriteLoadFilms = () => {
    dispatch(fetchFavoriteFilms());
  };

  useEffect(() => {
    if (!isFavoriteFilmsLoaded) {
      onFavoriteLoadFilms();
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
        <Logo onLogoClick={goMain} />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <FilmsList films={favoriteFilms} count={favoriteFilms.length} />
        </div>
      </section>

      <footer className="page-footer">
        <Logo
          onLogoClick={goMain}
          isAddClass={true}
        />

        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

MyList.propTypes = {
  goMain: PropTypes.func.isRequired,
};

export default MyList;

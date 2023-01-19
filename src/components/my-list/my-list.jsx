import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import FilmsList from '../films-list/films-list';
import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import Copyright from '../common-components/copyright/copyright';
import {fetchFavoriteFilms} from '../../store/api-actions';
import Loading from '../common-components/loading/loading';

const MyList = ({goMain, goFilm}) => {
  const {favoriteFilms} = useSelector((state) => state.DATA);

  const [isFavoriteFilmsLoaded, setIsFavoriteFilmsLoaded] = useState(false);

  const dispatch = useDispatch();

  const onFavoriteLoadFilms = () => {
    dispatch(fetchFavoriteFilms())
      .then(() => setIsFavoriteFilmsLoaded(true));
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
          <FilmsList films={favoriteFilms} count={favoriteFilms.length} goFilm={goFilm} />
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
  goFilm: PropTypes.func.isRequired,
};

export default MyList;

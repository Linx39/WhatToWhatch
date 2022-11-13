import React from 'react';

import FilmsList from '../films-list/films-list';
import Logo from '../components-mini/logo/logo';
import UserBlock from '../components-mini/user-block/user-block';
import Copyright from '../components-mini/copyright/copyright';

import {FILMS, COUNT} from '../props-types';
import {LogoPosition} from '../../const';

const MyList = (props) => {
  const {films, count} = props;


  return <React.Fragment>
    <div className="user-page">
      <header className="page-header user-page__head">
        {<Logo />}
        <h1 className="page-title user-page__title">My list</h1>
        {<UserBlock />}
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {<FilmsList films={films} count={count} />}
      </section>

      <footer className="page-footer">
        {<Logo place = {LogoPosition.FOOTER} />}
        {<Copyright />}
      </footer>
    </div>
  </React.Fragment>;
};

MyList.propTypes = {
  films: FILMS,
  count: COUNT,
};

export default MyList;

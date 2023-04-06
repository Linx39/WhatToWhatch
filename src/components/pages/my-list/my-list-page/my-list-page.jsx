import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../common-components/header/header';
import MoviesList from '../../../common-components/movies-list/movies-list';
import Footer from '../../../common-components/footer/footer';
import {filmProp} from '../../../../props-types';
import {AdditionalClassName} from '../../../../const';

const MyListPage = ({favoriteFilms}) => {
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

MyListPage.propTypes = {
  favoriteFilms: PropTypes.arrayOf(filmProp).isRequired,
};

export default MyListPage;

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilmsList from '../films-list/films-list';
import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import Copyright from '../common-components/copyright/copyright';

import {filmsProp} from '../props-types';
import {FilmsCount} from '../../const';

const MyList = ({films, goMain}) => {
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
          <FilmsList films={films} count={FilmsCount.MY_LIST} />
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
  films: filmsProp,
  goMain: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {MyList};
export default connect(mapStateToProps)(MyList);

import React from 'react';
import {connect} from 'react-redux';

import FilmsList from '../films-list/films-list';
import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import Copyright from '../common-components/copyright/copyright';

import {filmsProp} from '../props-types';
import {FilmsCount} from '../../const';

const MyList = (props) => {
  const {films} = props;

  return <React.Fragment>
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
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
        <Logo isAddClass={true} />
        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

MyList.propTypes = {
  films: filmsProp,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {MyList};
export default connect(mapStateToProps)(MyList);

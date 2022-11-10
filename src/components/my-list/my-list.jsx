import React from 'react';

import MoviesList from '../movies-list/movies-list';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Copyright from '../copyright/copyright';

import {CARDS_COUNT, MOVIE_CARDS} from '../const-props-type';
import {LogoPosition} from '../../const';

const MyList = (props) => {
  const {cardsCount, movieCards} = props;


  return <React.Fragment>
    <div className="user-page">
      <header className="page-header user-page__head">
        {<Logo />}
        <h1 className="page-title user-page__title">My list</h1>
        {<UserBlock />}
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {<MoviesList cardsCount={cardsCount} movieCards={movieCards}/>}
      </section>

      <footer className="page-footer">
        {<Logo place = {LogoPosition.FOOTER} />}
        {<Copyright />}
      </footer>
    </div>
  </React.Fragment>;
};

MyList.propTypes = {
  cardsCount: CARDS_COUNT,
  movieCards: MOVIE_CARDS,
};

export default MyList;

import React from 'react';

import LogoHeader from '../logo/logo-header';
import LogoFooter from '../logo/logo-footer';
import Copyright from '../copyright/copyright';

const Loading = () => {
  return <>
    <section className="movie-card">
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <LogoHeader />
      </header>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title">Loading ...</h2>
      </section>

      <footer className="page-footer">
        <LogoFooter />

        <Copyright />
      </footer>
    </div>
  </>;
};

export default Loading;

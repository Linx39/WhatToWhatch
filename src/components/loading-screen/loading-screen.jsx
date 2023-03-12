import React from 'react';

import LogoHeader from '../common-components/logo/logo-header';
import LogoFooter from '../common-components/logo/logo-footer';
import Copyright from '../common-components/copyright/copyright';

const LoadingScreen = () => {
  return (
    <>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
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
    </>
  );
};

export default LoadingScreen;

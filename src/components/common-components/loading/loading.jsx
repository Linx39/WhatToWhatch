import React from 'react';

import Logo from '../../common-components/logo/logo';
import Copyright from '../../common-components/copyright/copyright';

const Loading = () => {
  return <React.Fragment>
    <section className="movie-card">
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <Logo isLink = {false} />
      </header>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title">Loading ...</h2>
      </section>

      <footer className="page-footer">
        <Logo isAddClass={true} isLink = {false} />

        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

export default Loading;

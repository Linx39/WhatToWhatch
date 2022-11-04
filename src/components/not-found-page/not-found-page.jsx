import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Copyright from '../copyright/copyright';

import {Patch, LogoProperty} from '../../const';

const NotFoundPage = () => {
  return <React.Fragment>
    <section className="movie-card">
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        {<Logo />}
        {<UserBlock />}
      </header>
    </section>

    <section className="page-header">
      <h1>404. Page not found</h1>
      <Link to={Patch.MAIN}>Вернуться на главную</Link>
    </section>

    <div className="page-content">
      <footer className="page-footer">
        {<Logo place = {LogoProperty.Place.FOOTER} />}
        {<Copyright />}
      </footer>
    </div>
  </React.Fragment>;
};

export default NotFoundPage;

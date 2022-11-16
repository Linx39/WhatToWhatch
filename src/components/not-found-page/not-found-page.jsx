import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import Copyright from '../common-components/copyright/copyright';

import {Patch, LogoPosition} from '../../const';

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
        {<Logo place = {LogoPosition.FOOTER} />}
        {<Copyright />}
      </footer>
    </div>
  </React.Fragment>;
};

export default NotFoundPage;

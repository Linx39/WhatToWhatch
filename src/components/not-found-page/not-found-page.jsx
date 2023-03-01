import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import LogoHeader from '../common-components/logo/logo-header';
import LogoFooter from '../common-components/logo/logo-footer';
import UserBlock from '../common-components/user-block/user-block';
import UserBlockNoSign from '../common-components/user-block-no-sign/user-block-no-sign';
import Copyright from '../common-components/copyright/copyright';
import {Patch, AuthorizationStatus} from '../../const';

const NotFoundPage = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);

  return (
    <>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <LogoHeader />

          {authorizationStatus === AuthorizationStatus.AUTH
            ? <UserBlock />
            : <UserBlockNoSign />
          }
        </header>
      </section>

      <section className="page-header">
        <h1>404. Page not found</h1>

        <Link to={Patch.MAIN}>Вернуться на главную</Link>
      </section>

      <div className="page-content">
        <footer className="page-footer">
          <LogoFooter />

          <Copyright />
        </footer>
      </div>
    </>
  );
};

export default NotFoundPage;

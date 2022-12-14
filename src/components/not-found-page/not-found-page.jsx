import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import Logo from '../common-components/logo/logo';
import UserBlock from '../common-components/user-block/user-block';
import UserBlockNoSign from '../common-components/user-block-no-sign/user-block-no-sign';
import Copyright from '../common-components/copyright/copyright';

import {Patch, AuthorizationStatus} from '../../const';

const NotFoundPage = ({authorizationStatus, goMain, goMyList}) => {
  return <React.Fragment>
    <section className="movie-card">
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <Logo onLogoClick={goMain} />

        {authorizationStatus === AuthorizationStatus.AUTH
          ? <UserBlock onAvatarClick={goMyList}/>
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
        <Logo onLogoClick={goMain} isAddClass={true} />

        <Copyright />
      </footer>
    </div>
  </React.Fragment>;
};

NotFoundPage.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  goMain: PropTypes.func.isRequired,
  goMyList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {NotFoundPage};
export default connect(mapStateToProps)(NotFoundPage);

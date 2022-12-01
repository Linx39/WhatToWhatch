import React from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../store/action';
import {Patch, LogoPosition} from '../../../const';

const Logo = ({place = LogoPosition.HEADER, isLink = true, resetOnDefault}) => {
  const history = useHistory();

  const handleLogoClick = () => {
    resetOnDefault();
    history.push(Patch.MAIN);
  };

  let logoLinkClassName = `logo__link`;
  if (place === LogoPosition.FOOTER) {
    logoLinkClassName += ` logo__link--light`;
  }

  const SpanFragment = () => {
    return <React.Fragment>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </React.Fragment>;
  };

  if (isLink) {
    return (
      <div className="logo">
        <Link to="#"
          className={logoLinkClassName}
          onClick={handleLogoClick}
        >
          <SpanFragment />
        </Link>
      </div>
    );
  }

  return (
    <div className="logo">
      <a className={logoLinkClassName}>
        <SpanFragment />
      </a>
    </div>
  );
};

Logo.propTypes = {
  place: PropTypes.string,
  isLink: PropTypes.bool,
  resetOnDefault: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  resetOnDefault() {
    dispatch(ActionCreator.resetOnDefault());
  },
});

export {Logo};
export default connect(null, mapDispatchToProps)(Logo);

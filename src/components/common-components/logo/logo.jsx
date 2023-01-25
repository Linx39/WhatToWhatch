import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {resetOnDefault, redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';

const Logo = ({isAddClass = false, isLink = true}) => {
  const dispatch = useDispatch();

  const onLogoClick = () => {
    dispatch(redirectToRoute(Patch.MAIN));
  };

  const onResetOnDefault = () => {
    dispatch(resetOnDefault());
  };

  const handleLogoClick = () => {
    onResetOnDefault();
    onLogoClick();
  };

  let logoLinkClassName = `logo__link`;
  if (isAddClass) {
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
  isAddClass: PropTypes.bool,
  isLink: PropTypes.bool,
};

export default Logo;

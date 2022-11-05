import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Patch, LogoPosition} from '../../const';

const Logo = ({place = LogoPosition.HEADER, isLink = true}) => {
  const logoLinkClassName = place === LogoPosition.FOOTER
    ? `logo__link logo__link--light`
    : `logo__link`;

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
        <Link to={Patch.MAIN} className={logoLinkClassName}>
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
};

export default Logo;

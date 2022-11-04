import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Patch, LogoProperty} from '../../const';

const Logo = (props) => {
  const {place = LogoProperty.Place.HEADER, isLink = true} = props;

  let logoClassName = `logo__link`;

  if (place === LogoProperty.Place.FOOTER) {
    logoClassName = `logo__link logo__link--light`;
  }

  const SpanFragment = () => {
    return <React.Fragment>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </React.Fragment>;
  };

  const LinkFragment = () => {
    if (isLink) {
      return <React.Fragment>
        <Link to={Patch.MAIN} className={logoClassName}>
          <SpanFragment />
        </Link>
      </React.Fragment>;
    }

    return <React.Fragment>
      <a className="logo__link">
        <SpanFragment />
      </a>
    </React.Fragment>;
  };

  return <React.Fragment>
    <div className="logo">
      <LinkFragment />
    </div>
  </React.Fragment>;
};

Logo.propTypes = {
  place: PropTypes.string,
  isLink: PropTypes.bool,
};

export default Logo;

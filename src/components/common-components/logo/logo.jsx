import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {resetOnDefault} from '../../../store/action';

const Logo = ({isAddClass = false, isLink = true, onResetOnDefault, onLogoClick}) => {
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
  onResetOnDefault: PropTypes.func,
  onLogoClick: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onResetOnDefault() {
    dispatch(resetOnDefault());
  },
});

export {Logo};
export default connect(null, mapDispatchToProps)(Logo);

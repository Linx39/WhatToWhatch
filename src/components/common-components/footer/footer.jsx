import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/logo';
import {AdditionalClass} from '../../../const';

const Footer = ({isLogoClickable = true}) => {
  return (
    <footer className="page-footer">
      <Logo
        additionalLogoClass={AdditionalClass.LOGO.LIGHT}
        isLogoClickable={isLogoClickable}
      />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  isLogoClickable: true,
};

Footer.propTypes = {
  isLogoClickable: PropTypes.bool.isRequired,
};

export default Footer;

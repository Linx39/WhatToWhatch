import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/logo';
import {AdditionalClassName} from '../../../const';

const Footer = ({isLogoClickable}) => {
  return (
    <footer className="page-footer">
      <Logo
        additionalClassName={AdditionalClassName.LOGO.LIGHT}
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

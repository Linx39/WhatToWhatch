import React from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';

const LogoFooter = ({isActive = true}) => {
  return (
    <Logo
      isActive={isActive}
      className={`logo__link logo__link--light`}
    />
  );
};

LogoFooter.propTypes = {
  isActive: PropTypes.bool,
};

export default LogoFooter;

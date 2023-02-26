import React from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';

const LogoHeader = ({isActive = true}) => {
  return (
    <Logo
      isActive={isActive}
      className={`logo__link`}
    />
  );
};

LogoHeader.propTypes = {
  isActive: PropTypes.bool,
};

export default LogoHeader;

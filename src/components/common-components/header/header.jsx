import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

const Header = ({additionalHeaderClass, isLogoClickable, isUserBlock, children}) => {
  return (
    <header className={`page-header ${additionalHeaderClass}`}>
      <Logo
        isLogoClickable={isLogoClickable}
      />

      {children}

      {isUserBlock && <UserBlock />}
    </header>
  );
};

Header.defaultProps = {
  additionalHeaderClass: ``,
  isLogoClickable: true,
  isUserBlock: true,
};

Header.propTypes = {
  additionalHeaderClass: PropTypes.string.isRequired,
  isLogoClickable: PropTypes.bool.isRequired,
  isUserBlock: PropTypes.bool.isRequired,
  children: PropTypes.element, // isRequired???
};

export default Header;

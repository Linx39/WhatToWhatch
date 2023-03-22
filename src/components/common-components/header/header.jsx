import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

const Header = ({additionalClassName, isLogoClickable, isUserBlock, children}) => {
  return (
    <header className={`page-header ${additionalClassName}`}>
      <Logo
        isLogoClickable={isLogoClickable}
      />

      {children}

      {isUserBlock && <UserBlock />}
    </header>
  );
};

Header.defaultProps = {
  additionalClassName: ``,
  isLogoClickable: true,
  isUserBlock: true,
};

Header.propTypes = {
  additionalClassName: PropTypes.string.isRequired,
  isLogoClickable: PropTypes.bool.isRequired,
  isUserBlock: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

export default Header;

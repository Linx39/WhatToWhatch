import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import LogoLetters from '../logo-letters/logo-letters';
import {redirectToRoute} from '../../../store/action';
import {AppRoute} from '../../../const';

const Logo = ({additionalClassName, isLogoClickable}) => {
  const dispatch = useDispatch();
  const handleLogoClick = () => dispatch(redirectToRoute(AppRoute.MAIN));
  const className = `logo__link ${additionalClassName}`;

  return (
    <div className="logo" data-testid={`test-logo`}>
      {isLogoClickable
        ?
        <Link to="#" className={className} onClick={handleLogoClick}>
          <LogoLetters />
        </Link>
        :
        <a className={className}>
          <LogoLetters />
        </a>
      }
    </div>
  );
};

Logo.defaultProps = {
  additionalClassName: ``,
};

Logo.propTypes = {
  additionalClassName: PropTypes.string.isRequired,
  isLogoClickable: PropTypes.bool.isRequired,
};

export default Logo;

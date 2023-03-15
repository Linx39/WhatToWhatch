import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import LogoLetters from './logo-letters';
import {resetOnDefaultFilmsList, redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';

const Logo = ({additionalLogoClass, isLogoClickable}) => {
  const dispatch = useDispatch();

  const className = `logo__link ${additionalLogoClass}`;

  const handleLogoClick = () => {
    dispatch(resetOnDefaultFilmsList());
    dispatch(redirectToRoute((Patch.MAIN)));
  };

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
  additionalLogoClass: ``,
};

Logo.propTypes = {
  additionalLogoClass: PropTypes.string.isRequired,
  isLogoClickable: PropTypes.bool.isRequired,
};

export default Logo;

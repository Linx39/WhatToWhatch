import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import LogoLetters from './logo-letter';
import {resetOnDefaultFilmsList, redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';

const Logo = ({isActive, className}) => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(resetOnDefaultFilmsList());
    dispatch(redirectToRoute((Patch.MAIN)));
  };

  return (
    <div className="logo" data-testid={`test-logo`}>
      {isActive
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

Logo.propTypes = {
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

export default Logo;

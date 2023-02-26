import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import LogoLetter from './logo-letter';
import {resetOnDefaultFilmsList, redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';

const Logo = ({isActive, className}) => {
  const dispatch = useDispatch();
  const onRedirectToRoute = (url) => dispatch(redirectToRoute(url));
  const onResetOnDefaultFilmsList = () => dispatch(resetOnDefaultFilmsList());

  const handleLogoClick = () => {
    onResetOnDefaultFilmsList();
    onRedirectToRoute(Patch.MAIN);
  };

  return (
    <div className="logo">
      {isActive
        ?
        <Link to="#" className={className} onClick={handleLogoClick}>
          <LogoLetter />
        </Link>
        :
        <a className={className}>
          <LogoLetter />
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

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {resetOnDefaultFilmsList, redirectToRoute} from '../../../store/action';
import {Patch} from '../../../const';

const Logo = ({isAddClass, isClickable}) => {
  const dispatch = useDispatch();

  const onLogoClick = () => {
    dispatch(redirectToRoute(Patch.MAIN));
  };

  const onResetOnDefault = () => {
    dispatch(resetOnDefaultFilmsList());
  };

  const handleLogoClick = () => {
    onResetOnDefault();
    onLogoClick();
  };

  let logoLinkClassName = `logo__link`;
  if (isAddClass) {
    logoLinkClassName += ` logo__link--light`;
  }

  const SpanFragment = () => {
    return <React.Fragment>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </React.Fragment>;
  };

  // const LinkFragment = () => {
  //   return (
  //     <Link to="#"
  //       className={logoLinkClassName}
  //     >
  //       <span className="logo__letter logo__letter--1">W</span>
  //       <span className="logo__letter logo__letter--2">T</span>
  //       <span className="logo__letter logo__letter--3">W</span>
  //     </Link>
  //   );
  // };

  return (
    <div className="logo">
      {isClickable
        ?
        <Link to="#" className={logoLinkClassName} onClick={handleLogoClick}>
          <SpanFragment />
        </Link>
        :
        <Link to="" className={logoLinkClassName}>
          <SpanFragment />
        </Link>
      }
    </div>
  );
};

Logo.propTypes = {
  isAddClass: PropTypes.bool,
  isClickable: PropTypes.bool,
};

export default Logo;

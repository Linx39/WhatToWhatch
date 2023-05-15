import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {clsx} from 'clsx';

import {NavItem} from '../../../../const';

const NavList = ({activeNavItem, onClick}) => {
  const handleNavItemClick = (evt) => onClick(evt.target.textContent);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(NavItem).map((item, index) => {
          return (
            <li key={`item-${index}`}
              className={clsx(`movie-nav__item`, item === activeNavItem && `movie-nav__item--active`)}>
              <Link to="#"
                className="movie-nav__link"
                onClick={handleNavItemClick}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

NavList.propTypes = {
  activeNavItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavList;

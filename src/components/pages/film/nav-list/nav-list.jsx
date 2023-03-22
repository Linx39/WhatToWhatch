import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import {NavItem} from '../../../../const';

const NavList = ({activeNavItem, onClick}) => {
  const handleNavItemClick = (evt) => onClick(evt.target.textContent);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(NavItem).map((navItem, index) => {
          return (
            <li key={`navItem-${index}`}
              className={`movie-nav__item ${navItem === activeNavItem ? `movie-nav__item--active` : ``}`}>
              <Link to="#"
                className="movie-nav__link"
                onClick={handleNavItemClick}
              >
                {navItem}
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

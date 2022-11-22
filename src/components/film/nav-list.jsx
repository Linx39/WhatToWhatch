import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import {NavItem} from "../../const";

const NavList = (props) => {
  const {activeNavItem, onClick} = props;

  const handleMouseClick = (evt) => onClick(evt.target.dataset.navItem);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${activeNavItem === NavItem.OVERVIEW ? `movie-nav__item--active` : ``}`}>
          <Link to="#"
            className="movie-nav__link"
            onClick={handleMouseClick}
            data-nav-item={NavItem.OVERVIEW}
          >
            Overview
          </Link>
        </li>
        <li className={`movie-nav__item ${activeNavItem === NavItem.DETAILS ? `movie-nav__item--active` : ``}`}>
          <Link to="#"
            className="movie-nav__link"
            onClick={handleMouseClick}
            data-nav-item={NavItem.DETAILS}
          >
            Details
          </Link>
        </li>
        <li className={`movie-nav__item ${activeNavItem === NavItem.REVIEWS ? `movie-nav__item--active` : ``}`}>
          <Link to="#"
            className="movie-nav__link"
            onClick={handleMouseClick}
            data-nav-item={NavItem.REVIEWS}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavList.propTypes = {
  activeNavItem: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default NavList;

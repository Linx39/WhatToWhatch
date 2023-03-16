import React from 'react';
import PropTypes from 'prop-types';

import NavList from '../nav-list/nav-list';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import {filmProp, commentProp} from "../../../../props-types";
import {NavItem} from '../../../../const';

const MovieCardInfo = ({film, comments, activeNavItem, onClick}) => {
  const {name, posterImage} = film;

  const getActiveComponent = (item) => {
    switch (item) {
      case NavItem.OVERVIEW:
        return <Overview film={film} />;
      case NavItem.DETAILS:
        return <Details film={film} />;
      case NavItem.REVIEWS:
        return <Reviews comments={comments} />;
      default:
        throw new Error(`Unknown switch case expression: '${item}'!`);
    }
  };

  return (
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <NavList
            activeNavItem={activeNavItem}
            onClick={onClick}
          />

          {getActiveComponent(activeNavItem)}
        </div>
      </div>
    </div>
  );
};

MovieCardInfo.propTypes = {
  film: filmProp,
  comments: PropTypes.arrayOf(commentProp).isRequired,
  activeNavItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCardInfo;

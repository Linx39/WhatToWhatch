import React from 'react';
import PropTypes from 'prop-types';

import NavList from '../nav-list/nav-list';
import MovieCardPoster from '../../../common-components/movie-card-poster/movie-card-poster';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import {filmProp} from '../../../../props-types';
import {NavItem, AdditionalClassName} from '../../../../const';

const MovieCardInfo = ({film, activeNavItem, onClick}) => {

  const getActiveComponent = (item) => {
    switch (item) {
      case NavItem.OVERVIEW:
        return <Overview film={film} />;
      case NavItem.DETAILS:
        return <Details film={film} />;
      case NavItem.REVIEWS:
        return <Reviews film={film} />;
      default:
        throw new Error(`Unknown switch case expression: '${item}'!`);
    }
  };

  return (
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <MovieCardPoster film={film} additionalClassName={AdditionalClassName.MOVIE_CARD_POSTER.BIG} />

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
  activeNavItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCardInfo;

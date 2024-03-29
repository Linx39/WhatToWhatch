import React from 'react';

import {getRatingTitle} from '../../../../utils';
import {filmProp} from '../../../../props-types';

const Overview = ({film}) => {
  const {
    description,
    rating,
    scoresCount,
    director,
    starring,
  } = film;

  return <>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>

      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingTitle(rating)}</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{description}</p>

      <p className="movie-card__director"><strong>Director: {director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {starring.map((star) => star).join(`, `)}</strong></p>
    </div>
  </>;
};

Overview.propTypes = {
  film: filmProp,
};

export default Overview;

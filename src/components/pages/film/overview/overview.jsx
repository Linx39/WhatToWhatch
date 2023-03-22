import React from 'react';

import {filmProp} from '../../../../props-types';

const RatingLevel = [
  {title: `Awesome`, rating: 10},
  {title: `Very good`, rating: 8},
  {title: `Good`, rating: 5},
  {title: `Normal`, rating: 3},
  {title: `Bad`, rating: 0},
];

const getRatingTitle = (value) => RatingLevel
  .find(({rating}) => rating <= value).title;

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

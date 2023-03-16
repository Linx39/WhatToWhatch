import React from 'react';

import {filmProp} from '../../../../props-types';

const RatingLevel = {
  BAD: {name: `Bad`, count: 0},
  NORMAL: {name: `Normal`, count: 3},
  GOOD: {name: `Good`, count: 5},
  VERY_GOOD: {name: `Very good`, count: 8},
  AWESOME: {name: `Awesome`, count: 10},
};

export const getRatingLevel = (rating) => {
  let ratingLevel = RatingLevel.AWESOME.name;

  if (rating >= RatingLevel.BAD.count && rating < RatingLevel.NORMAL.count) {
    ratingLevel = RatingLevel.BAD.name;
  }

  if (rating >= RatingLevel.NORMAL.count && rating < RatingLevel.GOOD.count) {
    ratingLevel = RatingLevel.NORMAL.name;
  }

  if (rating >= RatingLevel.GOOD.count && rating < RatingLevel.VERY_GOOD.count) {
    ratingLevel = RatingLevel.GOOD.name;
  }

  if (rating >= RatingLevel.VERY_GOOD.count && rating < RatingLevel.AWESOME.count) {
    ratingLevel = RatingLevel.VERY_GOOD.name;
  }

  return ratingLevel;
};

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
        <span className="movie-rating__level">{getRatingLevel(rating)}</span>
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

import React from "react";

import {filmProp} from "../../props-types";
import {getRatingLevel} from "../../component-utils";

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

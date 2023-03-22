import React from 'react';

import {getTimeInHoursMinutes} from '../../../../utils';
import {filmProp} from '../../../../props-types';

const getTimeTemplate = (time) => {
  const {hours, minutes} = getTimeInHoursMinutes(time);

  const h = hours !== 0 ? `${hours}h ` : ``;
  const m = minutes.lenght === 1 ? `0${minutes}m` : `${minutes}m`;

  return `${h}${m}`;
};

const Details = ({film}) => {
  const {
    director,
    starring,
    runTime,
    genre,
    released,
  } = film;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((actor, index) => {
              return (
                <React.Fragment key={`star-${index}`}>
                  {index !== starring.length - 1 ? `${actor},` : `${actor}`}
                  {index !== starring.length - 1 ? <br /> : ``}
                </React.Fragment>
              );
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getTimeTemplate(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  film: filmProp,
};

export default Details;

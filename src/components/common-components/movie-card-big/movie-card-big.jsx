import React from 'react';

import {filmProp} from '../../../props-types';

const MovieCardBig = ({film}) => {
  const {backgroundImage, name} = film;

  return (
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
};

MovieCardBig.propTypes = {
  film: filmProp,
};

export default MovieCardBig;

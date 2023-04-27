import React from 'react';
import PropTypes from 'prop-types';

import {filmProp} from '../../../props-types';

const MovieCardPoster = ({film, additionalClassName}) => {
  const {posterImage, name} = film;

  const className = `movie-card__poster ${additionalClassName}`;

  return (
    <div className={className}>
      <img src={posterImage} alt={`${name} poster`} width='218' height='327' />
    </div>
  );
};

MovieCardPoster.defaultProps = {
  additionalClassName: ``,
};

MovieCardPoster.propTypes = {
  film: filmProp,
  additionalClassName: PropTypes.string.isRequired,
};

export default MovieCardPoster;

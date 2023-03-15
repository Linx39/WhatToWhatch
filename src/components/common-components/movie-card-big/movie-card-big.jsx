import React from 'react';
import PropTypes from 'prop-types';

const MovieCardBig = ({src, alt}) => {
  return (
    <div className="movie-card__bg">
      <img src={src} alt={alt} />
    </div>
  );
};

MovieCardBig.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MovieCardBig;

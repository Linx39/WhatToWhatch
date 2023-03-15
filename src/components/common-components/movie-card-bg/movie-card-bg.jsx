import React from 'react';
import PropTypes from 'prop-types';

const MovieCardBg = ({src, alt}) => {
  return (
    <div className="movie-card__bg">
      <img src={src} alt={alt} />
    </div>
  );
};

MovieCardBg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MovieCardBg;

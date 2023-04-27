import React from 'react';
import PropTypes from 'prop-types';

const InfoMessage = ({text}) => {
  return (
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">{text}</strong>
    </p>
  );
};

InfoMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InfoMessage;

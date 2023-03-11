import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {filmProp} from '../../props-types';

const CardImage = ({film, onMouseEnter, onMouseLeave, onClick}) => {
  const {id, name, previewImage} = film;

  const handleMouseClick = () => onClick(id);
  const handleMouseEnter = () => onMouseEnter(id);
  const handleMouseLeave = () => onMouseLeave();

  return (
    <>
      <div
        className="small-movie-card__image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseClick}
        data-testid="test-card"
      >
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>

      <h3 className="small-movie-card__title">
        <Link to="#" onClick={handleMouseClick} className="small-movie-card__link">{name}</Link>
      </h3>
    </>);
};

CardImage.propTypes = {
  film: filmProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardImage;

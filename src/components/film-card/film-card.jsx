import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {filmProp} from '../props-types';
import {Patch} from '../../const';

const FilmCard = (props) => {
  const {film, onMouseEnter, onMouseLeave} = props;
  const {id, name, previewImage} = film;

  const handleMouseEnter = () => {
    onMouseEnter(film);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  return (
    <article className="small-movie-card catalog__movies-card"

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      <div className="small-movie-card__image">
        <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`${Patch.FILMS}${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: filmProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};


export default FilmCard;

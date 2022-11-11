import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {MOVIE} from '../const-props-type';
import {Patch} from '../../const';

const MovieCard = (props) => {
  const {movie, onMouseEnter, onMouseLeave} = props;
  const {id, name, previewImage} = movie;

  const handleMouseEnter = () => {
    onMouseEnter(movie);
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


// MovieCard.defaultProps = {
//   movieCard: {},
//   onMouseEnter: () => undefined,
//   onMouseLeave: () => undefined,
// };

MovieCard.propTypes = {
  movie: MOVIE,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};


export default MovieCard;

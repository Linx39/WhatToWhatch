import React from 'react';

import {MOVIE_CARD} from '../const-props-type';

const MovieCard = (props) => {
  const {movieCard} = props;
  const {name, previewImage} = movieCard;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = MOVIE_CARD;

export default MovieCard;

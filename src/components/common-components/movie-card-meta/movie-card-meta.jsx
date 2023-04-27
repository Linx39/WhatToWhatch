import React from 'react';

import {filmProp} from "../../../props-types";

const MovieCardMeta = ({film}) => {
  const {name, genre, released} = film;

  return (
    <>
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
    </>
  );
};

MovieCardMeta.propTypes = {
  film: filmProp,
};

export default MovieCardMeta;

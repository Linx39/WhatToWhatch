import React from 'react';

import MovieCard from '../movie-card/movie-card';

import {CARDS_COUNT, MOVIE_CARDS} from '../const-props-type';

const MoviesList = (props) => {
  const {movieCards} = props;

  return (
    <div className="catalog__movies-list">
      {movieCards.map((movieCard) => <MovieCard movieCard={movieCard} key={movieCard.id}/>)}
    </div>
  );
};

MoviesList.propTypes = {
  cardsCount: CARDS_COUNT,
  movieCards: MOVIE_CARDS,
};

export default MoviesList;

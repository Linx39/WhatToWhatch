import React, {useCallback, useState} from 'react';

import MovieCard from '../movie-card/movie-card';

import {MOVIES, COUNT} from '../const-props-type';

const MoviesList = (props) => {
  const {movies, count} = props;

  const [activeCard, setActiveCard] = useState(null);

  // const handleMouseEnter = useCallback((card) => {
  //   setActiveCard(card);
  // }, []);

  // const handleMouseLeave = useCallback(() => {
  //   setActiveCard(null);
  // }, []);

  const handleMouseEnter = (card) => setActiveCard(card);

  const handleMouseLeave = () => setActiveCard(null);

  // console.log(activeCard);

  return (
    <>
      {movies.slice(0, count).map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}/>
        );
      })}
    </>
  );
};

MoviesList.propTypes = {
  movies: MOVIES,
  count: COUNT,
};

export default MoviesList;

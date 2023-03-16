import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card';
import {filmProp} from '../../../props-types';

const MoviesList = ({films, count = films.length}) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnter = useCallback(
      (film) => setActiveCard(film),
      [films]
  );
  const handleMouseLeave = useCallback(
      () => setActiveCard(null),
      [films]
  );

  return (
    <div className="catalog__movies-list" data-testid="test-film-list">
      {films.slice(0, count).map((film) => {
        return (
          <MovieCard
            key={film.id}
            film={film}
            isVideoMode={(activeCard && film === activeCard) || false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  count: PropTypes.number.isRequired,
};

export default MoviesList;

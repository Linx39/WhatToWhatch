import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import MovieCardSmall from '../movie-card-small/movie-card-small';
import {filmProp} from '../../../props-types';

const MoviesList = ({films}) => {
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
      {films.map((film) => {
        return (
          <MovieCardSmall
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
};

export default MoviesList;

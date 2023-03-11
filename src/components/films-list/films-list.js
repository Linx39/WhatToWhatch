import React, {useState, useCallback} from 'react';

import FilmCard from '../film-card/film-card';
import {filmsProp, countProp} from '../props-types';

const FilmsList = ({films, count = films.length}) => {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleMouseEnter = useCallback(
      (id) => setActiveCardId(id),
      [films]
  );
  const handleMouseLeave = useCallback(
      () => setActiveCardId(null),
      [films]
  );

  return (
    <div className="catalog__movies-list" data-testid="test-film-list">
      {films.slice(0, count).map((film) => {
        const {id} = film;

        return (
          <FilmCard
            key={id}
            film={film}
            isVideoMode={(activeCardId && id === activeCardId) || false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

FilmsList.propTypes = {
  films: filmsProp,
  count: countProp,
};

export default FilmsList;

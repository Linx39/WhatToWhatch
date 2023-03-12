import React, {useState, useCallback} from 'react';

import FilmCard from '../film-card/film-card';
import {filmsProp, countProp} from '../props-types';

const FilmsList = ({films, count = films.length}) => {
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
          <FilmCard
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

FilmsList.propTypes = {
  films: filmsProp,
  count: countProp,
};

export default FilmsList;

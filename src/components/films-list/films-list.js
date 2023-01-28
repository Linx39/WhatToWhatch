import React, {useState} from 'react';

import FilmCard from '../film-card/film-card';
import {filmsProp, countProp} from '../props-types';

const FilmsList = ({films, count = films.length}) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnter = (film) => setActiveCard(film);
  const handleMouseLeave = () => setActiveCard(null);

  return (
    <div className='catalog__movies-list'>
      {films.slice(0, count).map((film) => {
        return (
          <FilmCard
            key={film.id}
            film={film}
            isVideoMode={(activeCard && film.id === activeCard.id) || false}
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

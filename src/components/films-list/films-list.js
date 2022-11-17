import React, {useState} from 'react';

import FilmCard from '../film-card/film-card';

import {filmsProp, countProp} from '../props-types';

const FilmsList = (props) => {
  const {films, count} = props;

  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnter = (card) => setActiveCard(card);
  const handleMouseLeave = () => setActiveCard(null);

  return (
    <>
      {films.slice(0, count).map((film) => {
        return (
          <FilmCard
            key={film.id}
            film={film}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            isPreview={(activeCard && film.id === activeCard.id) || false}
          />
        );
      })}
    </>
  );
};

FilmsList.propTypes = {
  films: filmsProp,
  count: countProp,
};

export default FilmsList;

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card';
import {filmsProp, countProp} from '../props-types';

const FilmsList = ({films, count, goFilm}) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnter = (film) => setActiveCard(film);
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
            isPreviewMode={(activeCard && film.id === activeCard.id) || false}
            goFilm={goFilm}
          />
        );
      })}
    </>
  );
};

FilmsList.defaultProps = {
  goFilm: () => {},
};

FilmsList.propTypes = {
  films: filmsProp,
  count: countProp,
  goFilm: PropTypes.func.isRequired,
};

export default FilmsList;

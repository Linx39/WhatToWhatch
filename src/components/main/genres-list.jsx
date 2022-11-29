import React from 'react';

import {filmsProp} from '../props-types';

const GENRE = `All genres`;

const getUniqueGenres = (films) => {
  const uniqueGenres = [GENRE];

  films.forEach((film) => {
    const ff = uniqueGenres.find((genre) => genre === film.genre);
    if (!ff) {
      uniqueGenres.push(film.genre);
    }
  });

  return uniqueGenres;
};

const GenresList = (props) => {
  const {films} = props;

  const genres = getUniqueGenres(films);
  // catalog__genres-item--active
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li key={`genre-${index}`} className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  films: filmsProp,
};

export default GenresList;
